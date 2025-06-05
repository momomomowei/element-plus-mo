const attributes = [
  {
    name: 'visible/v-model:visible',
    description: '状态是否可见',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'append-to',
    description: '指示 Tooltip 的内容将附加在哪一个DOM元素上',
    type: 'CSSSelector/HTMLElement',
    value: '—',
    default: '-'
  },
  {
    name: 'effect',
    description: '默认提供的主题',
    type: 'String',
    value: 'dark/light',
    default: 'dark'
  },
  {
    name: 'content',
    description: '显示的内容，也可以通过 `slot#content` 传入 DOM',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'raw-content',
    description: 'content 中的内容是否作为 HTML 字符串处理',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: 'Tooltip 的出现位置',
    type: 'String',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  {
    name: 'fallback-placements',
    description: 'Tooltip 可用的 positions',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'disabled',
    description: 'Tooltip 是否可用',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'offset',
    description: '出现位置的偏移量',
    type: 'Number',
    value: '—',
    default: '0'
  },
  {
    name: 'transition',
    description: '定义渐变动画',
    type: 'String',
    value: '—',
    default: 'el-fade-in-linear'
  },
  {
    name: 'popper-options',
    description: '[popper.js](https://popper.js.org/docs/v2/) 的参数',
    type: 'Object',
    value: '参考 [popper.js](https://popper.js.org/docs/v2/) 文档',
    default: "{ boundariesElement: 'body', gpuAcceleration: false }"
  },
  {
    name: 'arrow-offset',
    description: '控制Tooltip的箭头相对于弹出窗口的偏移(添加)',
    type: 'number',
    value: '—',
    default: '5'
  },
  {
    name: 'show-after',
    description: '触发方式为 hover 时的显示延迟，单位为毫秒',
    type: 'Number',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-after',
    description: '触发方式为 hover 时的显示延迟，单位为毫秒',
    type: 'Number',
    value: '—',
    default: '200'
  },
  {
    name: 'show-arrow',
    description: 'tooltip 的内容是否有箭头',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-close',
    description: 'tooltip 出现后自动隐藏延时，单位毫秒',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'popper-class',
    description: '为 Tooltip 的 popper 添加类名',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'enterable',
    description: '鼠标是否可进入到 tooltip 中',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'teleported',
    description: '是否将下拉列表元素插入 append-to 指向的元素下',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'trigger',
    description: '如何触发 Tooltip',
    type: 'string',
    value: 'hover/click/focus/contextmenu',
    default: 'hover'
  },
  {
    name: 'virtual-triggering',
    description: '是否启用虚拟触发器',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'virtual-ref',
    description: '标识虚拟触发时的触发元素',
    type: 'string',
    value: 'HTMLElement',
    default: '-'
  },
  {
    name: 'trigger-keys',
    description:
      '当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Popover 的显示',
    type: 'Array',
    value: '-',
    default: "['Enter','Space']"
  },
  {
    name: 'persistent',
    description:
      '当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'aria-label',
    description: '原生 aria-label属性',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: 'Tooltip 触发 & 引用的元素' },
  { name: 'content', description: '自定义内容' }
]

const exposes = [
  {
    name: 'popperRef',
    description: 'el-popper 组件实例',
    parameter: 'Ref<PopperInstance | undefined>'
  },
  {
    name: 'contentRef',
    description: 'el-tooltip-content 组件实例',
    parameter: 'Ref<TooltipContentInstance | undefined>'
  },
  {
    name: 'isFocusInsideContent',
    description: '验证当前焦点事件是否在 el-tooltip-content 中触发',
    parameter: '() => boolean | undefined'
  },
  { name: 'updatePopper', description: '更新 el-popper组件实例', parameter: '() => void' },
  {
    name: 'onOpen',
    description: 'onOpen 方法控制 el-tooltip 显示状态',
    parameter: '(event?: Event | undefined) => void'
  },
  {
    name: 'onClose',
    description: 'onClose 方法控制 el-tooltip 显示状态',
    parameter: '(event?: Event | undefined) => void'
  },
  { name: 'hide', description: '提供 hide 方法', parameter: '(event?: Event | undefined) => void' }
]

const document = { attributes, slots, exposes }

module.exports = document
