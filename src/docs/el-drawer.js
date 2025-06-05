const attributes = [
  {
    name: 'model-value/v-model',
    description: '是否显示 Drawer',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'append-to-body',
    description: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'append-to',
    description: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body',
    type: 'string',
    value: 'CSSSelector/HTMLElement',
    default: 'body'
  },
  {
    name: 'lock-scroll',
    description: '是否在 Drawer 出现时将 body 滚动锁定',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'before-close',
    description: '关闭前的回调，会暂停 Drawer 的关闭',
    type: 'function(done)，done 用于关闭 Drawer',
    value: '—',
    default: '—'
  },
  {
    name: 'close-on-click-modal',
    description: '是否可以通过点击 modal 关闭 Drawer',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Drawer',
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
    name: 'destroy-on-close',
    description: '控制是否在关闭 Drawer 之后将子元素全部销毁',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'modal',
    description: '是否需要遮罩层',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'direction',
    description: 'Drawer 打开的方向',
    type: 'Direction',
    value: 'rtl / ltr / ttb / btt',
    default: 'rtl'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description:
      "Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释",
    type: 'number / string',
    value: '-',
    default: "'30%'"
  },
  {
    name: 'title',
    description: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'with-header',
    description:
      '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'modal-class',
    description: '遮罩层的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
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
    description: 'Drawer 的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const events = [
  { name: 'open', description: 'Drawer 打开的回调', parameter: '() => void' },
  {
    name: 'opened',
    description: 'Drawer 打开动画结束时的回调',
    parameter: '() => void'
  },
  { name: 'close', description: 'Drawer 关闭的回调', parameter: '() => void' },
  {
    name: 'closed',
    description: 'Drawer 关闭动画结束时的回调',
    parameter: '() => void'
  },
  {
    name: 'open-auto-focus',
    description: '输入焦点聚焦在 Drawer 内容时的回调',
    parameter: '() => void'
  },
  {
    name: 'close-auto-focus',
    description: '输入焦点从 Drawer 内容失焦时的回调',
    parameter: '() => void'
  }
]

const slots = [
  { name: 'default', description: 'Drawer 默认内容' },
  { name: 'header', description: 'Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮' },
  { name: 'footer', description: 'Dialog 按钮操作区的内容' }
]

const exposes = [
  {
    name: 'handleClose',
    description: '用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法',
    parameter: '-'
  }
]

const document = { attributes, exposes, events, slots }

module.exports = document
