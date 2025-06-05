const attributes = [
  {
    name: 'height',
    description: '滚动条高度',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'max-height',
    description: '滚动条最大高度',
    type: 'string / number',
    value: '—',
    default: '-'
  },
  {
    name: 'native',
    description: '是否使用原生滚动条样式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'wrap-style',
    description: '包裹容器的自定义样式',
    type: 'string/object(CSSSProperties | CSSSProperties[] | string[])',
    value: '—',
    default: '-'
  },
  {
    name: 'wrap-class',
    description: '包裹容器的自定义类名',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'view-style',
    description: '视图的自定义样式',
    type: 'string/object(CSSSProperties | CSSSProperties[] | string[])',
    value: '—',
    default: '-'
  },
  {
    name: 'view-class',
    description: '视图的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'noresize',
    description: '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tag',
    description: '视图的元素标签',
    type: 'string',
    value: '—',
    default: 'div'
  },
  {
    name: 'always',
    description: '滚动条总是显示',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'min-size',
    description: '滚动条最小尺寸',
    type: 'number',
    value: '—',
    default: '20'
  },
  {
    name: 'id',
    description: '视图ID',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'role',
    description: '视图的角色',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'aria-label',
    description: '视图的 aria-label',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'aria-orientation',
    description: '视图的 aria-label',
    type: 'string',
    value: 'horizontal/vertical',
    default: '-'
  },
  {
    name: 'tabindex',
    description: '容器的tabindex',
    type: 'number/string',
    value: '—',
    default: '-'
  }
]

const methods = [
  {
    name: 'scroll',
    description: '当触发滚动事件时，返回滚动的距离',
    parameter: '({ scrollLeft: number, scrollTop: number }) => void'
  }
]

const events = [
  {
    name: 'scroll',
    description: '滚动时触发的事件',
    parameter: '滚动距离 { scrollLeft, scrollTop }'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, methods, events, slots }

module.exports = document
