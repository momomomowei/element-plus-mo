const attributes = [
  {
    name: 'v-model',
    description: '是否显示 Dialog',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'model-value',
    description: '是否显示 Dialog',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'title',
    description: 'Dialog 的标题，也可通过具名 slot （见下表）传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: 'Dialog 的宽度',
    type: 'string',
    value: '—',
    default: '50%'
  },
  {
    name: 'fullscreen',
    description: '是否为全屏 Dialog',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'top',
    description: 'Dialog CSS 中的 margin-top 值',
    type: 'string',
    value: '—',
    default: '15vh'
  },
  {
    name: 'modal',
    description: '是否需要遮罩层',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'modal-class',
    description: '遮罩的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'header-class',
    description: 'header 部分的自定义 class 名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'body-class',
    description: 'body 部分的自定义 class 名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'footer-class',
    description: 'footer 部分的自定义 class 名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'append-to',
    description: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body',
    type: 'string',
    value: 'CSSSelector/HTMLElement',
    default: 'body'
  },
  {
    name: 'append-to-body',
    description: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'lock-scroll',
    description: '是否在 Dialog 出现时将 body 滚动锁定',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'open-delay',
    description: 'dialog 打开的延时时间，单位毫秒',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'close-delay',
    description: 'dialog 关闭的延时时间，单位毫秒',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'close-on-click-modal',
    description: '是否可以通过点击 modal 关闭 Dialog',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Dialog',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'before-close',
    description: '关闭前的回调，会暂停 Dialog 的关闭',
    type: 'function(done)，done 用于关闭 Dialog',
    value: '—',
    default: '—'
  },
  {
    name: 'draggable',
    description: '为 Dialog 启用可拖拽功能',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'overflow',
    description: '拖动范围可以超出可视区',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'center',
    description: '是否对头部和底部采用居中布局',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'destroy-on-close',
    description: '关闭时销毁 Dialog 中的元素',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'close-icon',
    description: '折叠项目的图标',
    type: 'string/Component',
    value: '—',
    default: 'ArrowRight'
  },
  {
    name: 'z-index',
    description: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'header-aria-level',
    description: 'header 的 aria-level 属性',
    type: 'string',
    value: '—',
    default: '2'
  },
  {
    name: 'custom-class',
    description: 'Dialog 的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  { name: 'open', description: 'Dialog 打开的回调', parameter: '`() => void`' },
  {
    name: 'opened',
    description: 'Dialog 打开动画结束时的回调',
    parameter: '`() => void`'
  },
  { name: 'close', description: 'Dialog 关闭的回调', parameter: '`() => void`' },
  {
    name: 'closed',
    description: 'Dialog 关闭动画结束时的回调',
    parameter: '`() => void`'
  },
  {
    name: 'open-auto-focus',
    description: '输入焦点聚焦在 Dialog 内容时的回调',
    parameter: '`() => void`'
  },
  {
    name: 'close-auto-focus',
    description: '输入焦点从 Dialog 内容失焦时的回调',
    parameter: '`() => void`'
  }
]

const slots = [
  { name: 'default', description: '对话框的默认内容' },
  { name: 'header', description: '对话框标题的内容；会替换标题部分，但不会移除关闭按钮' },
  { name: 'footer', description: 'Dialog 按钮操作区的内容' }
]

const exposes = [
  {
    name: 'resetPosition',
    description: '重置位置',
    parameter: '`() => void`'
  },
  {
    name: 'handleClose',
    description: '关闭对话框',
    parameter: '`() => void`'
  }
]

const document = { attributes, events, slots, exposes }

module.exports = document
