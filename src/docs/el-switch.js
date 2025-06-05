const attributes = [
  {
    name: 'model-value/v-model',
    description: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
    type: 'boolean/string/number',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否显示加载中',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'width',
    description: 'switch 的宽度（像素）',
    type: 'number/string',
    value: '—',
    default: '-'
  },
  {
    name: 'inline-prompt',
    description: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'active-icon',
    description: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'inactive-icon',
    description: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'active-action-icon',
    description: 'on状态下显示的图标组件',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'inactive-action-icon',
    description: 'off状态下显示的图标组件',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'active-text',
    description: 'switch 打开时的文字描述',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'inactive-text',
    description: 'switch 关闭时的文字描述',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'active-value',
    description: 'switch 打开时的值',
    type: 'boolean/string/number',
    value: '—',
    default: 'true'
  },
  {
    name: 'inactive-value',
    description: 'switch 关闭时的值',
    type: 'boolean/string/number',
    value: '—',
    default: 'false'
  },
  {
    name: 'name',
    description: 'switch 对应的 name 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'id',
    description: 'input 的 id',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'tabindex',
    description: 'input 的 tabindex',
    type: 'string/number',
    value: '—',
    default: '-'
  },
  {
    name: 'aria-label',
    description: '等价于原生 input aria-label 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'before-change',
    description: 'switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换',
    type: 'function',
    value: '() => Promise<boolean> | boolen',
    default: '-'
  },
  {
    name: 'active-color',
    description: 'switch 打开时的背景色',
    type: 'string',
    value: '—',
    default: '#409EFF'
  },
  {
    name: 'inactive-color',
    description: 'switch 关闭时的背景色',
    type: 'string',
    value: '—',
    default: '#C0CCDA'
  },
  {
    name: 'border-color',
    description: '开关的边框颜色 ',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const slots = [
  { name: 'active-action', description: '自定义 active 行为' },
  { name: 'inactive-action', description: '自定义 inactive 行为' }
]

const events = [
  {
    name: 'change',
    description: 'switch 状态发生变化时的回调函数',
    parameter: '(val: boolean | string | number) => void'
  }
]

const exposes = [
  { name: 'focus', description: '手动 focus 到 switch 组件', parameter: '() => void' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
