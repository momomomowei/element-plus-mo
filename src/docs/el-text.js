const attributes = [
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary/success/warning/danger/info',
    default: '-'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large / default / small',
    default: '—'
  },
  {
    name: 'truncated',
    description: '显示省略号',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'line-clamp',
    description: '最大行数',
    type: 'string/number',
    value: '—',
    default: '-'
  },
  {
    name: 'tag',
    description: '自定义元素标签',
    type: 'string',
    value: '—',
    default: 'span'
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
