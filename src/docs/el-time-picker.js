const attributes = [
  {
    name: 'v-model',
    description: '绑定值，如果它是数组，长度应该是 2',
    type: 'number/string/Date/[Date, Date]/[number, number]/[string, string]',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '绑定值，如果它是数组，长度应该是 2',
    type: 'number/string/Date/[Date, Date]/[number, number]/[string, string]',
    value: '—',
    default: '—'
  },
  {
    name: 'readonly',
    description: '完全只读',
    type: 'boolean',
    value: '—',
    default: 'false'
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
    name: 'start-placeholder',
    description: '范围选择时开始日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'end-placeholder',
    description: '范围选择时开始日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'is-range',
    description: '是否为时间范围选择，仅对`<el-time-picker>`有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'arrow-control',
    description: '是否使用箭头进行时间选择，仅对`<el-time-picker>`有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popper-class',
    description: 'TimePicker 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'range-separator',
    description: '选择范围时的分隔符',
    type: 'string',
    value: '-',
    default: "'-'"
  },
  {
    name: 'format',
    description: '显示在输入框中的格式',
    type: 'string',
    value:
      '见[日期格式](#https://cn.element-plus.org/zh-CN/component/date-picker.html#date-formats)',
    default: '—'
  },
  {
    name: 'value-format',
    description: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象',
    type: 'string',
    value:
      '见[日期格式](#https://cn.element-plus.org/zh-CN/component/date-picker.html#date-formats)',
    default: '—'
  },
  {
    name: 'default-value',
    description: '可选，选择器打开时默认显示的时间',
    type: 'Date/Object',
    value: '可被`new Date()`解析(TimePicker)/可选值(TimeSelect)',
    default: '—'
  },
  {
    name: 'id',
    description: 'input 的 id',
    type: 'string',
    value: '—',
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
    default: '-'
  },
  {
    name: 'prefix-icon',
    description: '自定义头部图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-time'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-circle-close'
  },
  {
    name: 'disabled-hours',
    description: '禁止选择部分小时选项',
    type: 'Function',
    value: '(role: string, comparingDate?: Dayjs) => number[]',
    default: '-'
  },
  {
    name: 'disabled-minutes',
    description: '禁止选择部分分钟选项',
    type: 'Function',
    value: '(hour: number, role: string, comparingDate?: Dayjs) => number[]',
    default: '-'
  },
  {
    name: 'disabled-seconds',
    description: '禁止选择部分秒选项',
    type: 'Function',
    value: '`(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`',
    default: '-'
  },
  {
    name: 'teleported',
    description: '是否将 popover 的下拉列表镜像至 body 元素',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'tabindex',
    description: 'input 的 tabindex',
    type: 'string/number',
    value: '—',
    default: '-'
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
    parameter:
      '`(val: number \\| string \\| Date \\| [number, number] \\| [string, string] \\| [Date, Date]) => void`'
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
  },
  {
    name: 'visible-change',
    description: '当 TimePicker 的下拉列表出现/消失时触发',
    parameter: '`(visibility: boolean) => void`'
  }
]

const exposes = [
  { name: 'focus', description: '使组件获取焦点', parameter: '`() => void`' },
  { name: 'blur', description: '使组件失去焦点', parameter: '`() => void`' },
  { name: 'handleOpen', description: '打开时间选择器弹窗', parameter: '`() => void`' },
  { name: 'handleClose', description: '关闭时间选择器弹窗', parameter: '`() => void`' }
]

const document = { attributes, exposes, events }

module.exports = document
