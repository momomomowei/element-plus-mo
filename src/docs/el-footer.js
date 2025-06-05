const attributes = [
  {
    name: 'height',
    description: '底栏高度',
    type: 'string',
    value: '—',
    default: '60px'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容'
  }
]

const document = { attributes, slots }

module.exports = document
