const attributes = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'number/string/object',
    value: '—',
    default: ''
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
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
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
    description: '范围选择时结束日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '显示类型',
    type: 'string',
    value:
      'year/years/month/months/date/dates/datetime/week/datetimerange/daterange/monthrange/yearrange',
    default: 'date'
  },
  {
    name: 'format',
    description: '显示在输入框中的格式,参见 date formats',
    type: 'string',
    value: '-',
    default: 'YYYY-MM-DD'
  },
  {
    name: 'popper-class',
    description: 'DatePicker 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'picker-options',
    description: '当前时间日期选择器特有的选项参考下表',
    type: 'object',
    value: '—',
    default: '{}'
  },
  {
    name: 'range-separator',
    description: '选择范围时的分隔符',
    type: 'string',
    value: '—',
    default: "'-'"
  },
  {
    name: 'default-value',
    description: '可选，选择器打开时默认显示的时间',
    type: 'Date',
    value: '可被`new Date()`解析',
    default: '—'
  },
  {
    name: 'default-time',
    description: '范围选择时选中日期所使用的当日内具体时刻',
    type: 'string[]',
    value:
      '数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00`',
    default: '—'
  },
  {
    name: 'value-format',
    description: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
    default: '—'
  },
  {
    name: 'id',
    description: '等价于原生 input id 属性',
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
    name: 'unlink-panels',
    description: '在范围选择器里取消两个日期面板之间的联动',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'prefix-icon',
    description: '自定义头部图标的类名',
    type: 'string/Component',
    value: '—',
    default: '-'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string/Component',
    value: '—',
    default: 'CircleClose'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'disabled-date',
    description:
      '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
    type: '(data: Date) => boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'shortcuts',
    description: '设置快捷选项，需要传入数组对象',
    type: 'Array<{ text: string, value: Date | Function }>',
    value: '-',
    default: '[]'
  },
  {
    name: 'cell-class-name',
    description: '设置自定义类名',
    type: '(data: Date) => string',
    value: '-',
    default: '-'
  },
  {
    name: 'teleported',
    description: '是否将 date-picker 的下拉列表插入至 body 元素',
    type: 'boolean',
    value: '—',
    default: 'true'
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
  },
  {
    name: 'fallback-placements',
    description: 'Tooltip 可用的 positions 请查看popper.js 文档',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'placement',
    description: '下拉框出现的位置',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: '(val: typeof v-model) => void'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '(e: FocusEvent) => void'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '(e: FocusEvent) => void'
  },
  {
    name: 'clear',
    description: '可清空的模式下用户点击清空按钮时触发',
    parameter: '() => void'
  },
  {
    name: 'calendar-change',
    description: '在日历所选日期更改时触发',
    parameter: '(val: [Date, null | Date]) => void'
  },
  {
    name: 'panel-change',
    description: '当日期面板改变时触发。',
    parameter: `(date: Date | [Date, Date], mode: 'month' | 'year', view?: string) => void`
  },
  {
    name: 'visible-change',
    description: '当 DatePicker 的下拉列表出现/消失时触发',
    parameter: '(visibility: boolean) => void'
  }
]

const slots = [
  { name: 'default', description: '自定义单元格内容' },
  { name: 'range-separator', description: '自定义范围分割符内容' },
  { name: 'prev-month', description: '上个月的图标' },
  { name: 'next-month', description: '下个月的图标' },
  { name: 'prev-year', description: '上一年图标' },
  { name: 'next-year', description: '下一年图标' }
]

const exposes = [
  { name: 'focus', description: '使组件获取焦点', parameter: '() => void' },
  { name: 'blur', description: '使组件失去焦点', parameter: '() => void' },
  { name: 'handleOpen', description: '打开日期选择器弹窗', parameter: '() => void' },
  { name: 'handleClose', description: '关闭日期选择器弹窗', parameter: '() => void' }
]

const document = { attributes, events, slots, exposes }

module.exports = document
