const attributes = [
  {
    name: 'width',
    description: '侧边栏宽度',
    type: 'string',
    value: '—',
    default: '300px'
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
