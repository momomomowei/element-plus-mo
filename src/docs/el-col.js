const attributes = [
  {
    name: 'span',
    description: '栅格占据的列数',
    type: 'number',
    value: '—',
    default: '24'
  },
  {
    name: 'offset',
    description: '栅格左侧的间隔格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'push',
    description: '栅格向右移动格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'pull',
    description: '栅格向左移动格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'xs',
    description: '`<768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object ({span?: number, offset?: number, pull?: number, push?: number})',
    value: '—',
    default: '—'
  },
  {
    name: 'sm',
    description: '`≥768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object ({span?: number, offset?: number, pull?: number, push?: number})',
    value: '—',
    default: '—'
  },
  {
    name: 'md',
    description: '`≥992px` 响应式栅格数或者栅格属性对象',
    type: 'number/object ({span?: number, offset?: number, pull?: number, push?: number})',
    value: '—',
    default: '—'
  },
  {
    name: 'lg',
    description: '`≥1200px` 响应式栅格数或者栅格属性对象',
    type: 'number/object ({span?: number, offset?: number, pull?: number, push?: number})',
    value: '—',
    default: '—'
  },
  {
    name: 'xl',
    description: '`≥1920px` 响应式栅格数或者栅格属性对象',
    type: 'number/object ({span?: number, offset?: number, pull?: number, push?: number})',
    value: '—',
    default: '—'
  },
  {
    name: 'tag',
    description: '自定义元素标签',
    type: 'string',
    value: '-',
    default: 'div'
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
