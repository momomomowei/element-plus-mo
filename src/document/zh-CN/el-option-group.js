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

const document = { attributes }

module.exports = document
