const attributes = [
  {
    name: 'checked/v-model:checked',
    description: '是否选中',
    type: 'boolean',
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
    name: 'type',
    description: 'CheckTag 类型',
    type: 'string',
    value: 'primary/success/warning/info/error',
    default: 'info'
  }
]

const events = [
  {
    name: 'change',
    description: '点击 Check Tag 时触发的事件',
    parameter: '(value: boolean) => void'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, events, slots }

module.exports = document
