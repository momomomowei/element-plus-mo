const vscode = require('vscode')

const mapValue = [
  {
    value: 'table-column',
    mapValue: 'table'
  },
  {
    value: 'input-search',
    mapValue: 'input'
  },
  {
    value: 'row',
    mapValue: 'layout'
  },
  {
    value: 'col',
    mapValue: 'layout'
  },
  {
    value: 'header',
    mapValue: 'container'
  },
  {
    value: 'main',
    mapValue: 'container'
  },
  {
    value: 'footer',
    mapValue: 'container'
  },
  {
    value: 'aside',
    mapValue: 'container'
  },
  {
    value: 'breadcrumb-item',
    mapValue: 'breadcrumb'
  },
  {
    value: 'radio-group',
    mapValue: 'radio'
  },
  {
    value: 'checkbox-group',
    mapValue: 'checkbox'
  },
  {
    value: 'tab-pane',
    mapValue: 'tabs'
  },
  {
    value: 'menu-item',
    mapValue: 'menu'
  },
  {
    value: 'submenu',
    mapValue: 'menu'
  },
  {
    value: 'anchor-link',
    mapValue: 'anchor'
  },
  {
    value: 'timeline-item',
    mapValue: 'timeline'
  },
  {
    value: 'collapse-item',
    mapValue: 'collapse'
  },
  {
    value: 'descriptions-item',
    mapValue: 'descriptions'
  },
  {
    value: 'dropdown-menu',
    mapValue: 'dropdown'
  },
  {
    value: 'dropdown-item',
    mapValue: 'dropdown'
  },
  {
    value: 'carousel-item',
    mapValue: 'carousel'
  },
  {
    value: 'step',
    mapValue: 'steps'
  },
  {
    value: 'form-item',
    mapValue: 'form'
  }
]

function findTagResult(list, result, document, pattern) {
  for (let i = 0; i < list.length; i++) {
    if (pattern.test(list[i].tag)) {
      const componentName = mapValue.find(val => val.value === list[i].tag?.replace(pattern, ''))
      result.push({
        range: new vscode.Range(
          document.positionAt(list[i].start + 1),
          document.positionAt(list[i].start + (list[i].tag?.length || 0) + 1)
        ),
        target: vscode.Uri.parse(
          `https://cn.element-plus.org/zh-CN/component/${
            componentName ? componentName.mapValue : list[i].tag?.replace(pattern, '')
          }.html`
        )
      })
    }
    findTagResult(list[i].children, result, document, pattern)
  }
  return result
}

module.exports = findTagResult
