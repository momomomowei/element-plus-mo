const attributes = [
  {
    name: 'v-model',
    description: '选中项绑定值',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'model-value',
    description: '选中项绑定值',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'editable',
    description: '文本框可输入',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'clearable',
    description: '是否显示清除按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'include-end-time',
    description: '是否在选项中包含end',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '非范围选择时的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'effect',
    description: 'Tooltip 主题，内置了 dark / light 两种主题',
    type: 'string',
    value: 'light/dark',
    default: 'light'
  },
  {
    name: 'prefix-icon',
    description: '自定义头部图标的类名',
    type: 'string',
    value: '—',
    default: 'Clock'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string',
    value: '—',
    default: 'CircleClose'
  },
  {
    name: 'start',
    description: '开始时间',
    type: 'string',
    value: '—',
    default: '09:00'
  },
  {
    name: 'end',
    description: '结束时间',
    type: 'string',
    value: '—',
    default: '18:00'
  },
  {
    name: 'step',
    description: '间隔时间',
    type: 'string',
    value: '—',
    default: '00:30'
  },
  {
    name: 'min-time',
    description: '最小时间，小于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '00:00'
  },
  {
    name: 'max-time',
    description: '最大时间，大于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: '设置时间格式',
    type: 'string',
    value: '—',
    default: 'HH:mm'
  },
  {
    name: 'empty-values',
    description: '组件的空值配置 参考config-provider',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'value-on-clear',
    description: '清空选项的值 参考 config-provider',
    type: 'string/number/boolean/Function',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: '`(value: string) => void`'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '`(e: FocusEvent) => void`'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '`(e: FocusEvent) => void`'
  },
  {
    name: 'clear',
    description: '可清空的模式下用户点击清空按钮时触发',
    parameter: '`() => void`'
  }
]

const exposes = [
  { name: 'focus', description: '使组件获取焦点', parameter: '`() => void`' },
  { name: 'blur', description: '使组件失去焦点', parameter: '`() => void`' }
]

const document = { attributes, events, exposes }

module.exports = document
