const attributes = [
  {
    name: 'v-model',
    description: '绑定值，如果它是数组，长度应该是 2',
    type: 'number/string/Date/[Date, Date]/[string, string]',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '绑定值，如果它是数组，长度应该是 2',
    type: 'number/string/Date/[Date, Date]/[string, string]',
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
    description: '输入框尺寸',
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
    description: '范围选择时结束日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'arrow-control',
    description: '是否使用箭头进行时间选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '显示type',
    type: 'string',
    value: 'year/month/date/week/datetime/datetimerange/daterange',
    default: 'date'
  },
  {
    name: 'format',
    description: '显示在输入框中的格式',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
    default: 'YYYY-MM-DD HH:mm:ss'
  },
  {
    name: 'popper-class',
    description: 'DateTimePicker 下拉框的类名',
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
    name: 'default-value',
    description: '可选，选择器打开时默认显示的时间',
    type: 'Date',
    value: '可被`new Date()`解析',
    default: '—'
  },
  {
    name: 'default-time',
    description: '选中日期后的默认具体时刻',
    type: '非范围选择时：string / 范围选择时：string[]',
    value:
      '非范围选择时：形如`12:00:00`的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00`',
    default: '—'
  },
  {
    name: 'value-format',
    description: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
    type: 'string',
    value: '见[日期格式](https://day.js.org/docs/en/display/format)',
    default: '—'
  },
  {
    name: 'date-format',
    description: '可选，时间选择器下拉列表中显示的日期格式',
    type: 'string',
    value: '见[日期格式](https://day.js.org/docs/en/display/format)',
    default: '—'
  },
  {
    name: 'time-format',
    description: '可选，时间选择器下拉列表中显示的时间格式',
    type: 'string',
    value: '见[日期格式](https://day.js.org/docs/en/display/format)',
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
    description: '等价于原生 input name 属性',
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
    default: 'Date'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string/Component',
    value: '—',
    default: 'CircleClose'
  },
  {
    name: 'shortcuts',
    description: '设置快捷选项，需要传入数组对象',
    type: 'Array<{ text: string, value: Date | Function }>',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled-date',
    description:
      '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
    type: '(data: Date) => boolean',
    value: '—',
    default: '—'
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
    name: 'show-now',
    description: '是否显示 now 按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: '`组件绑定值。格式与绑定值一致，可受 `value-format` 控制`'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '`(e: FocusEvent)`'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '`(e: FocusEvent)`'
  },
  {
    name: 'clear',
    description: '可清空的模式下用户点击清空按钮时触发',
    parameter: '`() => void`'
  },
  {
    name: 'calendar-change',
    description:
      '如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 datetimerange 才生效',
    parameter: '`[Date, Date]`'
  },
  {
    name: 'visible-change',
    description: '当 DateTimePicker 的下拉列表出现/消失时触发',
    parameter: '`(visibility: boolean) => void`'
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
  { name: 'focus', description: '使组件获取焦点', parameter: '`() => void`' },
  { name: 'blur', description: '使组件失去焦点', parameter: '`() => void`' }
]

const document = {
  attributes,
  events,
  slots,
  exposes
}

module.exports = document
