const attributes = [
  {
    name: 'separator',
    description: '分隔符',
    type: 'string',
    value: '—',
    default: "斜杠'/ '"
  },
  {
    name: 'separator-class',
    description: '图标分隔符 class',
    type: 'string/Component',
    value: '—',
    default: '-'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容,子标签 Breadcrumb Item' }]

const document = { attributes, slots }

module.exports = document
