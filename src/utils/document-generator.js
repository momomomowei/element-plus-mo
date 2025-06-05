const { MarkdownString } = require('vscode')

class HoverDocumentGenerator {
  /**
   * 生成属性文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @returns {MarkdownString}
   */
  generateAttribute(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const attributes = document.attributes || [] // 取得属性列表
    if (attributes.length) {
      // 生成表头
      markdownString.appendMarkdown(`### ${tag} 属性 \r`)
      markdownString.appendMarkdown('| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r')
      markdownString.appendMarkdown('|---|---|:-:|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach(row => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        )
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find(row => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        )
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * // methods 已经改为 exposes 默认暴露
   * 生成方法文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @returns {MarkdownString}
   */
  generateMethods(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const methods = document.exposes || []
    if (methods.length) {
      markdownString.appendMarkdown('---\r')
      markdownString.appendMarkdown(`### ${tag} 暴露\r`)
      markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r')
      markdownString.appendMarkdown('|---|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach(row => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find(row => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * 生成事件文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @returns {MarkdownString}
   */
  generateEvents(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const events = document.events || []
    if (events.length) {
      markdownString.appendMarkdown('---\r')
      markdownString.appendMarkdown(`### ${tag} 事件\r`)
      markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r')
      markdownString.appendMarkdown('|---|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach(row => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find(row => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * 生成插槽文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @returns {MarkdownString}
   */
  generateSlots(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const slots = document.slots || []
    if (slots.length) {
      markdownString.appendMarkdown('---\r')
      markdownString.appendMarkdown(`### ${tag} 插槽\r`)
      markdownString.appendMarkdown('| 插槽 | 说明 |\r')
      markdownString.appendMarkdown('|---|---|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach(row => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find(row => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * 生成局部插槽文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 在标签的属性上悬停时具有
   * @returns {MarkdownString}
   */
  generateScopedSlots(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const scopedSlots = document.scopedSlots || []
    if (scopedSlots.length) {
      markdownString.appendMarkdown('---\r')
      markdownString.appendMarkdown(`### ${tag} 插槽\r`)
      markdownString.appendMarkdown('| 插槽 | 说明 |\r')
      markdownString.appendMarkdown('|---|---|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      scopedSlots.forEach(row => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = scopedSlots.find(row => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * 生成其他文档表格
   * @param {Object} document 文档 具体标签对应的文档
   * @param {string} tag 标签
   * @param {string} attribute 属性 文档对象具体的属性值
   * @returns {MarkdownString}
   */
  generateOther(document, tag, attribute) {
    let isUndefined = true // 标记是否具有文档
    let markdownString = new MarkdownString('', true)
    const attributes = document[attribute] || []
    if (attributes.length) {
      markdownString.appendMarkdown('---\r')
      markdownString.appendMarkdown(`### ${tag} ${attribute}\r`)
      markdownString.appendMarkdown('| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r')
      markdownString.appendMarkdown('|---|---|:-:|---|:-:|\r')
      attributes.forEach(row => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        )
        isUndefined = false
      })
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }

  /**
   * 生成文档
   * @param {Object} document 文档对象
   * @param {string} key 文档对象的key
   * @param {string} tag 标签
   * @param {string} attr 属性
   * @returns {MarkdownString}
   */
  generate(document, key, tag, attr) {
    switch (key) {
      case 'attributes':
        return this.generateAttribute(document, tag, attr)
      case 'exposes':
        return this.generateMethods(document, tag, attr)
      case 'events':
        return this.generateEvents(document, tag, attr)
      case 'slots':
        return this.generateSlots(document, tag, attr)
      case 'scopedSlots':
        return this.generateScopedSlots(document, tag, attr)
      default:
        return this.generateOther(document, tag, key)
    }
  }

  /**
   * 获取单例实例
   * @returns {HoverDocumentGenerator}
   */
  static getInstance() {
    if (!HoverDocumentGenerator.instance) {
      HoverDocumentGenerator.instance = new HoverDocumentGenerator()
    }
    return HoverDocumentGenerator.instance
  }
}

module.exports = { HoverDocumentGenerator }
