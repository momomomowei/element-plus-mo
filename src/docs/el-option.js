const attributes = [
  {
    name: 'value',
    description: '选项的值',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '选项的标签，若不设置则默认与 `value` 相同',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用该选项',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const document = { attributes }

module.exports = document
