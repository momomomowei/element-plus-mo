const attributes = [
  {
    name: 'value',
    description: '显示值',
    type: 'string, number',
    value: '—',
    default: '—'
  },
  {
    name: 'max',
    description: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'is-dot',
    description: '小圆点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hidden',
    description: '隐藏 badge',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary/success/warning/danger/info',
    default: '—'
  },
  {
    name: 'show-zero',
    description: '值为零时是否显示 Badge',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'color',
    description: '背景色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'offset',
    description: 'badge 的偏移量',
    type: '[ number , number ]',
    value: '-',
    default: '-'
  },
  {
    name: 'badge-style',
    description: '自定义 badge 样式',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'badge-class',
    description: '自定义 badge 类名',
    type: 'string',
    value: '-',
    default: '-'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'content', description: '自定义显示内容' }
]

const document = { attributes, slots }

module.exports = document
