const attributes = [
  {
    name: 'gutter',
    description: '栅格间隔',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'justify',
    description: 'flex 布局下的水平排列方式',
    type: 'string',
    value: 'start/end/center/space-around/space-between/space-evenly',
    default: 'start'
  },
  {
    name: 'align',
    description: 'flex 布局下的垂直排列方式',
    type: 'string',
    value: 'top/middle/bottom',
    default: '-'
  },
  {
    name: 'tag',
    description: '自定义元素标签',
    type: 'string',
    value: '-',
    default: 'div'
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
