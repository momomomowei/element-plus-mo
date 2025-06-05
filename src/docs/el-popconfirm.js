const attributes = [
  {
    name: 'title',
    description: '标题',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'confirm-button-text',
    description: '确认按钮文字',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'cancel-button-text',
    description: '取消按钮文字',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'confirm-button-type',
    description: '确认按钮类型',
    type: 'String',
    value: 'primary/success/warning/danger/info/text',
    default: 'Primary'
  },
  {
    name: 'cancel-button-type',
    description: '取消按钮类型',
    type: 'String',
    value: 'primary/success/warning/danger/info/text',
    default: 'Text'
  },
  {
    name: 'icon',
    description: '自定义图标',
    type: 'String/Component',
    value: '—',
    default: 'QuestionFilled'
  },
  {
    name: 'icon-color',
    description: 'Icon 颜色',
    type: 'String',
    value: '—',
    default: '#f90'
  },
  {
    name: 'hide-icon',
    description: '是否隐藏 Icon',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hide-after',
    description: '关闭时的延迟',
    type: 'number',
    value: '—',
    default: '200'
  },
  {
    name: 'teleported',
    description: '是否将 popover 的下拉列表插入至 body 元素',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'persistent',
    description: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'width',
    description: '弹层宽度，最小宽度 150px',
    type: 'number/string',
    value: '—',
    default: '150'
  }
]

const events = [
  { name: 'confirm', description: '点击确认按钮时触发', parameter: '(e: MouseEvent) => void' },
  { name: 'cancel', description: '点击取消按钮时触发', parameter: '(e: MouseEvent) => void' }
]

const slots = [
  { name: 'reference', description: '触发 Popconfirm 显示的 HTML 元素' },
  { name: 'actions', description: '页脚的内容, {confirm,cancel}' }
]

const document = { attributes, events, slots }

module.exports = document
