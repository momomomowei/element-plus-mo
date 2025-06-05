const attributes = [
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'span',
    description: '列的数量',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'rowspan',
    description: '单元格应该跨越的行数',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'width',
    description: '列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'min-width',
    description:
      '列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'label-width',
    description: '列标签宽，如果未设置，它将与列宽度相同。 比 Descriptions 的 label-width 优先级高',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'align',
    description: '列的内容对齐方式（如无 border，对标签和内容均生效）',
    type: 'string',
    value: 'left/center/right',
    default: 'left'
  },
  {
    name: 'label-align',
    description:
      '列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）',
    type: 'string',
    value: 'left/center/right',
    default: 'left'
  },
  {
    name: 'class-name',
    description: '列的内容自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label-class-name',
    description: '自定义标签类名',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'label', description: '自定义标签文本' }
]

const document = { attributes, slots }

module.exports = document
