const attributes = [
  {
    name: 'value/v-model',
    description: '绑定值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'min',
    description: '设置计数器允许的最小值',
    type: 'number',
    value: '—',
    default: '-Infinity'
  },
  {
    name: 'max',
    description: '设置计数器允许的最大值',
    type: 'number',
    value: '—',
    default: 'Infinity'
  },
  {
    name: 'step',
    description: '计数器步长',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'step-strictly',
    description: '是否只能输入 step 的倍数',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'precision',
    description: '数值精度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '计数器尺寸',
    type: 'string',
    value: 'large, small',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用计数器',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'controls',
    description: '是否使用控制按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'controls-position',
    description: '控制按钮位置',
    type: 'string',
    value: 'right',
    default: '-'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '输入框关联的label文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框默认 placeholder',
    type: 'string',
    value: '-',
    default: '-'
  }
]

const methods = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '-' },
  { name: 'select', description: '选中 input 中的文字', parameter: '—' }
]

const events = [
  {
    name: 'change',
    description: '绑定值被改变时触发',
    parameter: 'currentValue, oldValue'
  },
  {
    name: 'blur',
    description: '在组件 Input 失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '在组件 Input 获得焦点时触发',
    parameter: '(event: Event)'
  }
]

const document = { attributes, methods, events }

module.exports = document
