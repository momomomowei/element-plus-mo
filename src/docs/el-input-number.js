const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'model-value',
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
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'readonly',
    description: '原生 readonly 属性，是否只读',
    type: 'boolean',
    value: '—',
    default: 'false'
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
    name: 'aria-label',
    description: '等价于原生 input aria-label 属性',
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
  },
  {
    name: 'id',
    description: '等价于原生 input id 属性',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'value-on-clear',
    description: '当输入框被清空时显示的值',
    type: 'number/min/max',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

const slots = [
  { name: 'prefix', description: '输入框头部内容' },
  { name: 'suffix', description: '输入框尾部内容' },
  { name: 'decrease-icon', description: '	自定义输入框按钮减少图标' },
  { name: 'increase-icon', description: '自定义输入框按钮增加图标' }
]

const events = [
  {
    name: 'change',
    description: '绑定值被改变时触发',
    parameter: '`(currentValue: number, oldValue: number) => void`'
  },
  {
    name: 'blur',
    description: '在组件 Input 失去焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  },
  {
    name: 'focus',
    description: '在组件 Input 获得焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  }
]

const exposes = [
  { name: 'focus', description: '	使 input 组件获得焦点', parameter: '`() => void`' },
  { name: 'blur', description: '使 input 组件失去焦点', parameter: '`() => void`' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
