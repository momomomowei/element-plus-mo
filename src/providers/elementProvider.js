const vscode = require('vscode')
const COMPONENTS = require('../components/index')

class ElementProvider {
  // 提供悬停提示
  provideHover(document, position) {
    const range = document.getWordRangeAtPosition(position)
    if (!range) return null

    // 从当前行向上查找，直到找到标签的开始
    const currentLine = position.line
    let tagStartLine = currentLine
    let foundTag = false
    let componentName = ''

    // 向上查找标签开始
    for (let i = currentLine; i >= 0; i--) {
      const lineText = document.lineAt(i).text
      const tagMatch = lineText.match(/<(el-[a-z-]+)/i)
      if (tagMatch) {
        tagStartLine = i
        componentName = tagMatch[1]
        foundTag = true
        break
      }
    }

    if (!foundTag) return null

    const component = COMPONENTS[componentName]
    if (!component) return null

    // 检查是否在属性上悬停
    const hoveredAttr = document.getText(range).replace(/^:/, '')
    const attrConfig = component[hoveredAttr]

    if (attrConfig) {
      const content = new vscode.MarkdownString()
      content.supportHtml = true
      content.isTrusted = true
      content.appendMarkdown(`#### ${hoveredAttr}\n\n`)
      content.appendMarkdown(`- 说明: ${attrConfig.description}\n`)
      content.appendMarkdown(`- 类型: ${attrConfig.type}\n`)
      content.appendMarkdown(`- 默认值: ${attrConfig.default || '—'}\n`)

      if (attrConfig.values?.length) {
        content.appendMarkdown(`- 可选值: ${attrConfig?.values.join('/')}\n`)
      }

      return new vscode.Hover(content)
    }

    // 组件整体的文档
    const content = new vscode.MarkdownString()
    content.supportHtml = true
    content.isTrusted = true

    content.appendMarkdown(`#### ${componentName} Attributes\n\n`)
    content.appendMarkdown('| 属性 | 说明 | 类型 | 可选值 | 默认 |\n')
    content.appendMarkdown('|--------|------|------|--------|--------|\n')

    Object.entries(component).forEach(([key, config]) => {
      if (key !== '__doc') {
        let displayType = Array.isArray(config.type)
          ? config.type
              .map((item) => item.replace(/`/g, '`').replace(/\|/g, '\\|'))
              .join('/')
          : config.type
        content.appendMarkdown(
          `| ${key} | ${config.description} | ${displayType} | ${
            config.values?.join('/') || '—'
          } | ${config.default || '—'} |\n`
        )
      }
    })

    if (component.__doc) {
      if (component.__doc.slots?.length) {
        content.appendMarkdown('\n\n---\n\n')
        content.appendMarkdown(`\n#### ${componentName} Slots\n\n`)
        content.appendMarkdown('| 插槽名 | 说明 | 子标签 |\n')
        content.appendMarkdown('|--------|------|--------|\n')
        component.__doc.slots.forEach((slot) => {
          content.appendMarkdown(
            `| ${slot.name} | ${slot.description} | ${
              slot.subtags?.join(', ') || '—'
            } |\n`
          )
        })
      }

      if (component.__doc.events?.length) {
        content.appendMarkdown('\n\n---\n\n')
        content.appendMarkdown(`\n#### ${componentName} Events\n\n`)
        content.appendMarkdown('| 事件名 | 说明 | 类型 |\n')
        content.appendMarkdown('|--------|------|--------|\n')
        component.__doc.events.forEach((exp) => {
          // 处理类型显示，转义特殊字符
          let displayType = exp.type
            .replace(/`/g, '`') // 使用正确的 Markdown 代码格式
            .replace(/\|/g, '\\|') // 转义表格分隔符

          content.appendMarkdown(
            `| ${exp.name} | ${exp.description} | ${displayType} |\n`
          )
        })
      }

      if (component.__doc.exposes?.length) {
        content.appendMarkdown('\n\n---\n\n')
        content.appendMarkdown(`\n#### ${componentName} Exposes\n\n`)
        content.appendMarkdown('| 属性名 | 说明 | 类型 |\n')
        content.appendMarkdown('|--------|------|--------|\n')
        component.__doc.exposes.forEach((exp) => {
          // 处理类型显示，转义特殊字符
          let displayType = exp.type
            .replace(/`/g, '`') // 使用正确的 Markdown 代码格式
            .replace(/\|/g, '\\|') // 转义表格分隔符

          content.appendMarkdown(
            `| ${exp.name} | ${exp.description} | ${displayType} |\n`
          )
        })
      }

      if (component.__doc?.url) {
        // 添加官方文档链接
        content.appendMarkdown('\n\n---\n\n')
        content.appendMarkdown(`[📖 ${componentName} 官方文档](${component.__doc.url})`)
      }
    }

    return new vscode.Hover(content)
  }

  // 提供属性补全
  provideCompletionItems(document, position) {
    if (!this.isInTemplate(document, position)) {
      return undefined
    }

    // 从当前行向上查找组件标签
    const currentLine = position.line
    let componentName = ''
    let foundTag = false

    for (let i = currentLine; i >= 0; i--) {
      const lineText = document.lineAt(i).text
      const tagMatch = lineText.match(/<(el-[a-z-]+)/i)
      if (tagMatch) {
        componentName = tagMatch[1]
        foundTag = true
        break
      }
    }

    if (!foundTag) {
      return undefined
    }

    const component = COMPONENTS[componentName]
    if (!component) {
      return undefined
    }

    const linePrefix = document.lineAt(position).text.substring(0, position.character)

    // 检查是否在属性值位置
    const normalAttrMatch = linePrefix.match(/\s([a-z-]+)=["']?$/i)
    const bindAttrMatch = linePrefix.match(/\s:([a-z-]+)=["']?$/i)
    const inQuotesMatch = linePrefix.match(/\s(?::)?([a-z-]+)=["']([^"']*)$/i)

    if (normalAttrMatch || bindAttrMatch || inQuotesMatch) {
      const attrName = (normalAttrMatch || bindAttrMatch || inQuotesMatch)[1]
      const partialValue = inQuotesMatch ? inQuotesMatch[2] : ''
      const isBinding = !!bindAttrMatch || linePrefix.includes(`:${attrName}=`)

      return this.getAttributeValues(
        component,
        attrName,
        isBinding,
        partialValue,
        !!inQuotesMatch
      )
    }

    // 检查属性是否重复
    if (this.isDuplicateAttribute(document, position, currentLine)) {
      return undefined
    }

    return this.getAttributes(component, this.getCurrentInputText(linePrefix))
  }

  isInTemplate(document, position) {
    const text = document.getText()
    const offset = document.offsetAt(position)
    const beforeText = text.substring(0, offset)
    return beforeText.lastIndexOf('<template>') > beforeText.lastIndexOf('</template>')
  }

  isDuplicateAttribute(document, position, currentLine) {
    const linePrefix = document.lineAt(position).text.substring(0, position.character)
    const currentAttrMatch = linePrefix.match(/\s(?::)?([a-z-]+)(?:=["']?)?$/i)
    if (!currentAttrMatch) return false

    const currentAttr = currentAttrMatch[1]
    const existingAttrs = []

    // 从当前行向上收集所有属性
    for (let i = currentLine; i >= 0; i--) {
      const lineText = document.lineAt(i).text
      if (lineText.includes('<el-')) break
      const attrs = lineText.match(/\s(?::)?[a-z-]+(?:=["'][^"']*["'])?/gi) || []
      existingAttrs.push(...attrs)
    }

    return existingAttrs.some((attr) => {
      const attrName = attr.match(/(?::)?([a-z-]+)/i)?.[1]
      return attrName === currentAttr && !linePrefix.endsWith(attr.trim())
    })
  }

  getCurrentInputText(linePrefix) {
    const words = linePrefix.split(/\s+/)
    const lastWord = words[words.length - 1] || ''
    return lastWord.startsWith(':') ? lastWord.substring(1) : lastWord
  }

  getAttributes(component, partial = '') {
    const attributes = Object.keys(component).filter((key) => key !== '__doc')
    const filteredAttrs = attributes.filter((attr) =>
      attr.toLowerCase().startsWith(partial.toLowerCase())
    )

    const completionItems = []

    // 添加普通属性
    filteredAttrs.forEach((attr) => {
      const item = new vscode.CompletionItem(attr)
      item.kind = vscode.CompletionItemKind.Property
      item.insertText = new vscode.SnippetString(`${attr}="$1"`)
      item.command = {
        command: 'editor.action.triggerSuggest',
        title: 'Re-trigger completions...'
      }
      item.documentation = new vscode.MarkdownString(component[attr].description)
      item.sortText = `1${attr}`
      item.preselect = true
      completionItems.push(item)
    })

    // 添加绑定属性
    if (partial === '' || partial === ':') {
      filteredAttrs.forEach((attr) => {
        const bindItem = new vscode.CompletionItem(':' + attr)
        bindItem.kind = vscode.CompletionItemKind.Property
        bindItem.insertText = new vscode.SnippetString(`:${attr}="$1"`)
        bindItem.command = {
          command: 'editor.action.triggerSuggest',
          title: 'Re-trigger completions...'
        }
        bindItem.documentation = new vscode.MarkdownString(component[attr].description)
        bindItem.sortText = partial === ':' ? `!${attr}` : `0${attr}`
        bindItem.preselect = true
        completionItems.push(bindItem)
      })
    }

    return completionItems
  }

  getAttributeValues(
    component,
    attribute,
    isBinding = false,
    partialValue = '',
    isInQuotes = false
  ) {
    const attrConfig = component[attribute]
    if (!attrConfig?.values?.length) {
      return undefined
    }

    const filteredValues = attrConfig.values.filter((value) =>
      value.toLowerCase().includes(partialValue.toLowerCase())
    )

    return filteredValues.map((value) => {
      const item = new vscode.CompletionItem(value)
      item.kind = vscode.CompletionItemKind.Value

      if (isBinding && attrConfig.type === 'string') {
        const hasQuotes = partialValue.startsWith("'") || partialValue.endsWith("'")
        item.insertText = isInQuotes && hasQuotes ? value : `'${value}'`
      } else {
        item.insertText = value
      }

      item.sortText = `!${value}`
      item.preselect = true

      const typeInfo = attrConfig.type === 'string' ? '(字符串)' : `(${attrConfig.type})`
      const bindingInfo = isBinding && attrConfig.type === 'string' ? ' - 需要单引号' : ''
      item.documentation = new vscode.MarkdownString(
        `${attribute} ${typeInfo}${bindingInfo}\n\n` +
          `说明: ${attrConfig.description}\n\n` +
          `可选值: ${value}`
      )

      return item
    })
  }
}

module.exports = ElementProvider
