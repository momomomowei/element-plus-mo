const attributes = [
  {
    name: 'value',
    description: '选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）',
    type: 'string/number/boolean/object',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description:
      '选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用',
    type: 'string/number/boolean/object',
    value: '—',
    default: '—'
  },
  {
    name: 'true-value',
    description: '选中时的值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'true-label',
    description: '选中时的值(deprecated)',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-value',
    description: '没有选中时的值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-label',
    description: '没有选中时的值(deprecated)',
    type: 'string/number',
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
  },
  {
    name: 'checked',
    description: '当前是否勾选',
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
