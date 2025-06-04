const attributes = [
  {
    name: 'direction',
    description: '设置分割线方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'horizontal'
  },
  {
    name: 'content-position',
    description: '设置分割线文案的位置',
    type: 'string',
    value: 'left / right / center',
    default: 'center'
  }
]

const document = { attributes }

module.exports = document
