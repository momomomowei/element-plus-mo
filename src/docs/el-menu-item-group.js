const attributes = [
  {
    name: 'title',
    description: '分组标题',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: '默认插槽内容，Menu-Item' },
  { name: 'title', description: '自定义组标题内容' }
]

const document = { attributes, slots }

module.exports = document
