const attributes = [
  {
    name: 'container',
    description: '滚动的容器',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'offset',
    description: '设置锚点滚动的偏移量',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'bound',
    description: '触发锚点的元素的位置偏移量',
    type: 'number',
    value: '—',
    default: '15'
  },
  {
    name: 'duration',
    description: '设置容器滚动持续时间，单位毫秒',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'marker',
    description: '是否显示标记',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'type',
    description: '设置锚点类型',
    type: 'string',
    value: 'default/underline',
    default: 'default'
  },
  {
    name: 'direction',
    description: '设置锚点方向',
    type: 'string',
    value: 'vertical/horizontal',
    default: 'vertical'
  },
  {
    name: 'select-scroll-top',
    description: '滚动时，链接是否选中位于顶部',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

const events = [
  {
    name: 'change',
    description: 'step 改变时的回调',
    parameter: '`(href: string) => void`'
  },
  {
    name: 'click',
    description: '当用户点击链接时触发',
    parameter: '`(e: MouseEvent, href?: string) => void`'
  }
]

const exposes = [
  {
    name: 'scrollTo',
    description: '手动滚动到特定位置。',
    parameter: '`(href: string) => void`'
  }
]

const slots = [{ name: 'default', description: 'AnchorLink 组件列表' }]

const document = { attributes, events, exposes, slots }

module.exports = document
