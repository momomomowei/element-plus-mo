const { Position, Range, Hover } = require('vscode')
const { HoverDocumentGenerator } = require('./document-generator')
const { toKebabCase } = require('./index')
const document = require('../docs/index')

class ElementHoverProvider {
  constructor() {
    this._position = null
    this._document = null
    this._token = null
    this.tagReg = /<([\w-]+)\s*/g
    this.attrReg = /(?:\(|\s*)([\w-]+)=?/
  }

  provideHover(doc, position, token) {
    this._document = doc
    this._position = position
    this._token = token

    const tag = this.getTag()

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null
    }

    const attr = this.getAttr()
    const range = this.getHoverRange(attr)

    return this.getHoverInstance(tag, attr, range)
  }

  /**
   * 获取标签
   */
  getTag() {
    let line = this._position.line
    let tag
    let txt = this.getTextAfterPosition(this._position)

    // 向前搜索 最多十行 搜索标签
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
   * 获取属性
   */
  getAttr() {
    const txt = this.getTextAfterPosition(this._position)
    let end = txt.length
    let start = txt.lastIndexOf(' ', this._position.character) + 1
    let parsedTxt = this._document.getText(
      new Range(this._position.line, start, this._position.line, end)
    )
    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 获取高亮范围
   * @param {string} attr 属性名称
   */
  getHoverRange(attr) {
    const line = this._document.lineAt(this._position.line).text
    const start = line.indexOf(attr)
    const end = start + attr.length
    const range = new Range(this._position.line, start, this._position.line, end)
    return range
  }

  /**
   * 匹配标签
   * @param {RegExp} reg 匹配模式串
   * @param {string} txt 待匹配字符
   * @param {number} line 匹配行
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
   * 匹配标签
   * @param {RegExp} reg 匹配模式
   * @param {string} txt 待匹配字符
   */
  matchAttr(reg, txt) {
    let match = reg.exec(txt)
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1]
    }
    return ''
  }

  /**
   * 获取前置内容
   * @param {Position} position 位置信息
   */
  getTextBeforePosition(position) {
    const wordRange = this._document.getWordRangeAtPosition(position)
    const start = new Position(position.line, 0)
    const end = wordRange?.end || position
    const range = new Range(start, end)
    return this._document.getText(range)
  }

  /**
   * 获取当前位置直到单词结束的内容
   * @param {Position} position 文档位置
   */
  getTextAfterPosition(position) {
    const wordRange = this._document.getWordRangeAtPosition(position)
    const start = new Position(position.line, 0)
    let endIndex = (wordRange?.end || position).character
    const text = this._document.lineAt(position).text
    while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
      endIndex++
    }
    const end = new Position(position.line, endIndex)
    const range = new Range(start, end)
    return this._document.getText(range)
  }

  /**
   * 获取Hover实例
   * @param {Object} tag 标签
   * @param {string} attr 属性
   * @param {Range} range 区域
   */
  getHoverInstance(tag, attr, range) {
    const kebabCaseTag = toKebabCase(tag?.text)
    const kebabCaseAttr = toKebabCase(attr)
    return this.createHoverInstance(kebabCaseTag, kebabCaseAttr, range)
  }

  /**
   * 创建Hover实例
   * @param {string} tag 标签
   * @param {string} attr 属性
   * @param {Range} range 范围
   */
  createHoverInstance(tag, attr, range) {
    if (tag === attr) {
      attr = ''
    }
    if (Object.prototype.hasOwnProperty.call(document, tag)) {
      const tagDocument = document[tag]
      const hoverMarkdownStrings = []
      Object.keys(tagDocument).forEach(key => {
        const hoverMarkdownString = HoverDocumentGenerator.getInstance().generate(
          tagDocument,
          key,
          tag,
          attr
        )
        if (hoverMarkdownString) {
          hoverMarkdownStrings.push(hoverMarkdownString)
        }
      })
      return new Hover(hoverMarkdownStrings, range)
    } else {
      return null
    }
  }
}

module.exports = { ElementHoverProvider }
