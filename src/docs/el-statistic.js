const attributes = [
  {
    name: 'value',
    description: '数字内容',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'decimal-separator',
    description: '设置小数点符号',
    type: 'string',
    value: '—',
    default: '.'
  },
  {
    name: 'formatter',
    description: '自定义数字格式化',
    type: 'function',
    value: '`(value: number) => string \\| number`',
    default: '-'
  },
  {
    name: 'group-separator',
    description: '设置千分位标识符',
    type: 'string',
    value: '—',
    default: ','
  },
  {
    name: 'precision',
    description: '数字精度',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'prefix',
    description: '设置数字的前缀',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'suffix',
    description: '设置数字的后缀',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'title',
    description: '数字标题',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'value-style',
    description: '数字样式',
    type: 'string/object',
    value: '—',
    default: '-'
  }
]

const slots = [
  { name: 'prefix', description: '数字区之前' },
  { name: 'suffix', description: '数字区之后' },
  { name: 'title', description: '数字标题' }
]

const exposes = [
  {
    name: 'displayValue',
    description: '当前显示值',
    parameter: '`Ref<string \\| number>`'
  }
]

const document = { attributes, exposes, slots }

module.exports = document
