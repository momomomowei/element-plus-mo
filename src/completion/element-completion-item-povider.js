const {
  CompletionItemProvider,
  Position,
  Range,
  CompletionItem,
  CompletionItemKind,
  workspace,
  SnippetString
} = require('vscode')

const { localDocument } = require('../document')
const { ExtensionLanguage } = require('..')

class ElementCompletionItemProvider {
  constructor() {
    this._document = null
    this._position = null
    this.token = null
    this.tagReg = /<([\w-]+)\s*/g
    this.attrReg = /(?:\(|\s*)([\w-]+)=['"][^'"]*/
    this.tagStartReg = /<([\w-]*)$/
    this.pugTagStartReg = /^\s*[\w-]*$/
    this.size = 0
    this.quotes = ''
  }

  /**
   * 获取前置标签
   */
  getPreTag() {
    let line = this._position.line
    let tag
    let txt = this.getTextBeforePosition(this._position)

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)
      if (tag === 'break') {
        return undefined
      }
      if (tag) {
        return tag
      }
      line--
    }
    return undefined
  }

  /**
   * 获取前置属性
   */
  getPreAttr() {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '')
    let end = this._position.character
    let start = txt.lastIndexOf(' ', end) + 1
    let parsedTxt = this._document.getText(
      new Range(this._position.line, start, this._position.line, end)
    )
    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 匹配属性
   * @param {RegExp} reg 匹配模式
   * @param {string} txt 匹配文本
   */
  matchAttr(reg, txt) {
    let match
    match = reg.exec(txt)
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1]
    }
    return ''
  }

  /**
   * 匹配标签
   * @param {RegExp} reg 匹配模式
   * @param {string} txt 匹配文本
   * @param {number} line 当前行
   */
  matchTag(reg, txt, line) {
    let match
    let arr = []

    if (
      /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
      (this._position.line === line &&
        (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))
    ) {
      return 'break'
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      })
    }
    return arr.pop()
  }

  /**
   * 获取当前位置之前的字符串
   * @param {Position} position 位置
   */
  getTextBeforePosition(position) {
    var start = new Position(position.line, 0)
    var range = new Range(start, position)
    return this._document.getText(range)
  }

  /**
   * 是否位属性值的开始
   * @param {Object} tag 标签
   * @param {string} attr 属性
   */
  isAttrValueStart(tag, attr) {
    return !!tag && !!attr
  }

  /**
   * 是否位属性的开始
   * @param {Object} tag 标签
   */
  isAttrStart(tag) {
    const preText = this.getTextBeforePosition(this._position)
    return tag && / :?[\w-]*$/.test(preText)
  }

  /**
   * 是否为方法的开始
   * @param {Object} tag 标签
   */
  isEventStart(tag) {
    const preText = this.getTextBeforePosition(this._position)
    return tag && / @[\w-]*$/.test(preText)
  }

  /**
   * 获取属性值
   * @param {string} tag 标签
   * @param {string} attr 属性
   */
  getAttrValues(tag, attr) {
    const config = workspace.getConfiguration().get('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    const document = localDocument[language]
    const attributes = document[tag].attributes || []
    const attribute = attributes.find(attribute => attribute.name === attr)
    if (!attribute) {
      return []
    }
    const values = attribute.value.split(/[,/\\]/).map(item => item.trim())
    return values
  }

  /**
   * 获取属性值的提示信息
   * @param {string} tag 标签
   * @param {string} attr 属性
   */
  getAttrValueCompletionItems(tag, attr) {
    let completionItems = []
    const values = this.getAttrValues(tag, attr)
    values.forEach(value => {
      if (/\w+/.test(value)) {
        completionItems.push({
          label: `${value}`,
          sortText: `0${value}`,
          detail: `${tag}-${attr}`,
          kind: CompletionItemKind.Value,
          insertText: value
        })
      }
    })
    return completionItems
  }

  /**
   * 获取事件名称提示
   * @param {string} tag 标签
   */
  getEventCompletionItems(tag) {
    let completionItems = []
    const config = workspace.getConfiguration().get('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    const document = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*@([\w-]*)$/, '$1')
    const events = document[tag]?.events || []
    const likeTag = events.filter(event => event.name.includes(prefix))
    likeTag.forEach(event => {
      const start = preText.lastIndexOf('@') + 1
      const end = start + prefix.length
      const startPos = new Position(this._position.line, start)
      const endPos = new Position(this._position.line, end)
      const range = new Range(startPos, endPos)
      completionItems.push({
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `${tag} Event`,
        documentation: event.description,
        kind: CompletionItemKind.Value,
        insertText: event.name,
        range
      })
    })
    return completionItems
  }

  /**
   * 获取属性的提示信息
   * @param {string} tag 标签
   */
  getAttrCompletionItems(tag) {
    let completionItems = []
    const config = workspace.getConfiguration().get('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    const document = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*[\s@:]/g, '')
    const attributes = document[tag].attributes || []
    const likeTag = attributes.filter(attribute => attribute.name.includes(prefix))
    likeTag.forEach(attribute => {
      const start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1
      const end = start + prefix.length
      const startPos = new Position(this._position.line, start)
      const endPos = new Position(this._position.line, end)
      const range = new Range(startPos, endPos)
      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${tag} Attribute`,
        documentation: attribute.description,
        kind: CompletionItemKind.Value,
        insertText: attribute.name,
        range
      })
    })
    return completionItems
  }

  /**
   * 是否为标签的开始
   */
  isTagStart() {
    let txt = this.getTextBeforePosition(this._position)
    return this.tagStartReg.test(txt)
  }

  /**
   * 获取标签提示
   * @param {string} tag 标签
   */
  getTagCompletionItems(tag) {
    let completionItems = []
    const config = workspace.getConfiguration().get('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    const document = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*<([\w-]*)$/, '$1')
    const likeTag = Object.keys(document).filter(name => name.includes(prefix))
    likeTag.forEach(tag => {
      const start = preText.lastIndexOf('<') + 1
      const end = start + prefix.length
      const startPos = new Position(this._position.line, start)
      const endPos = new Position(this._position.line, end)
      const range = new Range(startPos, endPos)
      completionItems.push({
        label: tag,
        sortText: `0${tag}`,
        detail: 'Element-UI',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString().appendText(tag),
        range
      })
    })
    return completionItems
  }

  /**
   * 提供自动完成提示
   */
  provideCompletionItems(document, position, token, context) {
    this._document = document
    this._position = position
    this.token = token

    let tag = this.getPreTag()
    let attr = this.getPreAttr()

    if (this.isAttrValueStart(tag, attr)) {
      return this.getAttrValueCompletionItems(tag.text, attr)
    } else if (this.isEventStart(tag)) {
      return this.getEventCompletionItems(tag.text)
    } else if (this.isAttrStart(tag)) {
      return this.getAttrCompletionItems(tag.text)
    } else if (this.isTagStart()) {
      return this.getTagCompletionItems(tag?.text)
    }
    return []
  }
}

module.exports = { ElementCompletionItemProvider }
