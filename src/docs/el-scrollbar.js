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
    type: 'string/CSSSProperties/CSSSProperties[]/string[]',
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
    type: 'string/CSSSProperties/CSSSProperties[]/string[]',
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

const events = [
  {
    name: 'scroll',
    description: '滚动时触发的事件',
    parameter: '`({ scrollLeft: number, scrollTop: number }) => void`'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const exposes = [
  {
    name: 'handleScroll',
    description: '触发滚动事件',
    parameter: '`() => void`'
  },
  {
    name: 'scrollTo',
    description: '滚动到一组特定坐标',
    parameter: '`(options: ScrollToOptions \\| number, yCoord?: number) => void`'
  },
  {
    name: 'setScrollTop',
    description: '设置滚动条到顶部的距离',
    parameter: '`(scrollTop: number) => void`'
  },
  {
    name: 'setScrollLeft',
    description: '设置滚动条到左边的距离',
    parameter: '`(scrollLeft: number) => void`'
  },
  {
    name: 'update',
    description: '手动更新滚动条状态',
    parameter: '`() => void`'
  },
  {
    name: 'wrapRef',
    description: '滚动条包裹的 ref 对象',
    parameter: '`Ref<HTMLDivElement>`'
  },
]

const document = { attributes, exposes, events, slots }

module.exports = document
