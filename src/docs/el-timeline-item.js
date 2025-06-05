const attributes = [
  {
    name: 'timestamp',
    description: '时间戳',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'hide-timestamp',
    description: '是否隐藏时间戳',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'center',
    description: '是否垂直居中',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: '时间戳位置',
    type: 'string',
    value: 'top/bottom',
    default: 'bottom'
  },
  {
    name: 'type',
    description: '节点类型',
    type: 'string',
    value: 'primary/success/warning/danger/info',
    default: '-'
  },
  {
    name: 'color',
    description: '节点颜色',
    type: 'string',
    value: 'hsl/hsv/hex/rgb',
    default: '-'
  },
  {
    name: 'size',
    description: '节点尺寸',
    type: 'string',
    value: 'normal/large',
    default: 'normal'
  },
  {
    name: 'icon',
    description: '自定义图标',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'hollow',
    description: '是否空心点',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const slots = [
  { name: 'default', description: 'Timeline-Item 的内容' },
  { name: 'dot', description: '自定义节点' }
]

const document = { attributes, slots }

module.exports = document
