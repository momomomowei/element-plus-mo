const attributes = [
  {
    name: 'v-model',
    description: '打开引导',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'model-value',
    description: '打开引导',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'v-model:current',
    description: '当前值',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'current',
    description: '当前值',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'append-to',
    description: '框挂载到哪个 DOM 元素',
    type: 'CSSSelector/HTMLElement',
    value: '—',
    default: '-'
  },
  {
    name: 'show-arrow',
    description: '是否显示箭头',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom-start'
  },
  {
    name: 'content-style',
    description: '为content自定义样式',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'mask',
    description: '是否启用遮罩，通过自定义属性改变遮罩样式以及填充的颜色',
    type: 'boolean/Object',
    value: '—',
    default: 'true'
  },
  {
    name: 'gap',
    description: '遮罩和目标之间的透明的间距',
    type: 'Object',
    value: '—',
    default: '{ offset: 6, radius: 2 }'
  },
  {
    name: 'type',
    description: '类型，影响底色与文字颜色',
    type: 'string',
    value: 'default/primary',
    default: 'default'
  },
  {
    name: 'scroll-into-view-options',
    description: '是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数',
    type: 'boolean/Object',
    value: '-',
    default: '{ block: "center" }'
  },
  {
    name: 'z-index',
    description: 'Tour 的层级',
    type: 'number',
    value: '—',
    default: '2001'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-icon',
    description: '自定义关闭图标，默认Close',
    type: 'string/Component',
    value: '—',
    default: 'Close'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Dialog',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'target-area-clickable',
    description: '启用蒙层时，target 元素区域是否可以点击',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const slots = [
  { name: 'default', description: 'tourStep 组件列表' },
  { name: 'indicators', description: '自定义指示器, scope 参数是 { current, total }' }
]

const events = [
  {
    name: 'change',
    description: '步骤改变时的回调',
    parameter: '`(current: number) => void`'
  },
  {
    name: 'close',
    description: '关闭引导时的回调函数',
    parameter: '`(current: number) => void`'
  },
  {
    name: 'finish',
    description: '引导完成时的回调',
    parameter: '`() => void`'
  }
]

const document = { attributes, events, slots }

module.exports = document
