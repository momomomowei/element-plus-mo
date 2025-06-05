const attributes = [
  {
    name: 'border',
    description: '是否带有边框',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'column',
    description: '一行 Descriptions Item 的数量',
    type: 'number',
    value: '—',
    default: 3
  },
  {
    name: 'direction',
    description: '排列的方向',
    type: 'string',
    value: 'vertical/horizontal',
    default: 'horizontal'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'title',
    description: '标题文本，显示在左上方',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'extra',
    description: '操作区文本，显示在右上方',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label-width',
    description: '每一列的标签宽度',
    type: 'string/number',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'title', description: '自定义标题，显示在左上方' },
  { name: 'extra', description: '自定义操作区，显示在右上方' }
]

const document = { attributes, slots }

module.exports = document
