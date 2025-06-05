const attributes = [
  {
    name: 'direction',
    description: '设置分割线方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'horizontal'
  },
  {
    name: 'border-style',
    description: '设置分隔符样式',
    type: 'string',
    value: '-',
    default: 'solid'
  },
  {
    name: 'content-position',
    description: '设置分割线文案的位置',
    type: 'string',
    value: 'left/right/center',
    default: 'center'
  }
]

const slots = [{ name: 'default', description: '设置分割线文案的位置' }]

const document = { attributes, slots }

module.exports = document
