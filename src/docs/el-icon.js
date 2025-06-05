const attributes = [
  {
    name: 'color',
    description: 'svg 的 fill 颜色',
    type: 'string',
    value: '—',
    default: '继承颜色'
  },
  {
    name: 'size',
    description: 'SVG 图标的大小，size x size',
    type: 'number / string',
    value: '—',
    default: '继承字体大小'
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
