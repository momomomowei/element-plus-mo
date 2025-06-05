const attributes = [
  {
    name: 'command',
    description: '指令',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'divided',
    description: '显示分割线',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'string/Component',
    value: '—',
    default: '—'
  }
]

const slots = [{ name: 'default', description: '自定义Dropdown-Item内容' }]

const document = { attributes, slots }

module.exports = document
