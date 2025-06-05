const attributes = [
  {
    name: 'label',
    description: '分组的组名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否将该分组下所有选项置为禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
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
