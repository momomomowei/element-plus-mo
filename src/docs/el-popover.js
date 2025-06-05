const attributes = [
  {
    name: 'trigger',
    description: '触发方式',
    type: 'String',
    value: 'click/focus/hover/contextmenu',
    default: 'hover'
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
    name: 'title',
    description: '标题',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'effect',
    description: '选择提供的主题',
    type: 'string',
    value: 'light/dark',
    default: 'light'
  },
  {
    name: 'content',
    description: '显示的内容，也可以通过 `slot` 传入 DOM',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: '宽度',
    type: 'String/Number',
    value: '—',
    default: '最小宽度 150px'
  },
  {
    name: 'placement',
    description: '出现位置',
    type: 'String',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  {
    name: 'disabled',
    description: 'Popover 是否可用',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'visible/v-model:visible',
    description: '状态是否可见',
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
    default: 'fade-in-linear'
  },
  {
    name: 'show-arrow',
    description:
      '是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popper-options',
    description: '[popper.js](https://popper.js.org/docs/v2/) 的参数',
    type: 'Object',
    value: '参考 [popper.js](https://popper.js.org/docs/v2/) 文档',
    default: "`{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}`"
  },
  {
    name: 'popper-class',
    description: '为 popper 添加类名',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'popper-style',
    description: '为 popper 添加类名',
    type: 'String/object',
    value: '—',
    default: '—'
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
    name: 'auto-close',
    description: 'tooltip 出现后自动隐藏延时，单位毫秒',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'tabindex',
    description:
      'Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'teleported',
    description: '是否将 popover 的下拉列表插入至 body 元素',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'append-to',
    description: '下拉框挂载到哪个 DOM 元素',
    type: 'CSSSelector/HTMLElement',
    value: '—',
    default: '-'
  },
  {
    name: 'persistent',
    description: '当下拉框未被激活并且persistent设置为false，下拉框容器会被删除。',
    type: 'boolean',
    value: '—',
    default: 'true'
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
    description: '代表 tooltip 所要附加的参照元素',
    type: 'string',
    value: 'HTMLElement',
    default: '-'
  }
]

const events = [
  { name: 'show', description: '显示时触发', parameter: '() => void' },
  {
    name: 'before-enter',
    description: '显示动画播放前触发',
    parameter: '() => void'
  },
  {
    name: 'after-enter',
    description: '显示动画播放完毕后触发',
    parameter: '() => void'
  },
  { name: 'hide', description: '隐藏时触发', parameter: '() => void' },
  {
    name: 'before-leave',
    description: '隐藏动画播放前触发',
    parameter: '() => void'
  },
  {
    name: 'after-leave',
    description: '隐藏动画播放完毕后触发',
    parameter: '() => void'
  }
]

const slots = [
  { name: 'default', description: 'Popover 内嵌 HTML 文本' },
  { name: 'reference', description: '触发 Popover 显示的 HTML 元素' }
]

const exposes = [
  {
    name: 'hide',
    description: '隐藏 popover',
    parameter: '() => void'
  }
]

const document = { attributes, events, slots, exposes }

module.exports = document
