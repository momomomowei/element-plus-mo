const attributes = [
  {
    name: 'target',
    description: '触发滚动的对象',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'visibility-height',
    description: '滚动高度达到此参数值才出现',
    type: 'number',
    value: '',
    default: '200'
  },
  {
    name: 'right',
    description: '控制其显示位置, 距离页面右边距',
    type: 'number',
    value: '',
    default: '40'
  },
  {
    name: 'bottom',
    description: '控制其显示位置, 距离页面底部距离',
    type: 'number',
    value: '',
    default: '40'
  }
]

const events = [
  {
    name: 'click',
    description: '点击按钮触发的事件',
    parameter: '`(evt: MouseEvent) => void`'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, events, slots }

module.exports = document
