const attributes = [
  {
    name: 'label',
    description: 'Radio 的 value',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const document = { attributes }

module.exports = document
