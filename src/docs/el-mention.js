const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'options',
    description: '提及选项列表',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'prefix',
    description: '触发字段的前缀。 字符串长度必须且只能为 1',
    type: 'string/array',
    value: '-',
    default: "'@'"
  },
  {
    name: 'split',
    description: '用于拆分提及的字符。 字符串长度必须且只能为 1',
    type: 'string',
    value: '-',
    default: ''
  },
  {
    name: 'filter-option',
    description: '定制筛选器选项逻辑',
    type: 'false/(pattern: string, option: MentionOption) => boolean',
    value: 'Enter/Space',
    default: '-'
  },
  {
    name: 'placement',
    description: '设置弹出位置',
    type: 'string',
    value: 'bottom/top',
    default: 'bottom'
  },
  {
    name: 'show-arrow',
    description: '下拉菜单的内容是否有箭头',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'offset',
    description: '下拉面板偏移量',
    type: 'number',
    value: '-',
    default: '0'
  },
  {
    name: 'whole',
    description: '当退格键被按下做删除操作时，是否将提及部分作为整体删除',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'check-is-whole',
    description: '当退格键被按下做删除操作时，检查是否将提及部分作为整体删除',
    type: 'Function',
    value: '`(pattern: string, prefix: string) => boolean`',
    default: '-'
  },
  {
    name: 'loading',
    description: '提及的下拉面板是否处于加载状态',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'popper-class',
    description: '自定义浮层类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'popper-options',
    description: 'popper.js 参数',
    type: 'object',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'search',
    description: '按下触发字段时触发',
    parameter: '`(pattern: string, prefix: string) => void`'
  },
  {
    name: 'select',
    description: '当用户选择选项时触发',
    parameter: '`(option: MentionOption, prefix: string) => void`'
  }
]

const slots = [
  { name: 'label', description: '自定义标签内容：{ item: MentionOption, index: number }' },
  { name: 'loading', description: '自定义 loading内容' },
  { name: 'header', description: '下拉列表顶部的内容' },
  { name: 'footer', description: '下拉列表底部的内容' }
]

const exposes = [
  { name: 'input', description: 'el-input 组件实例', parameter: '`Ref<InputInstance>`' },
  { name: 'tooltip', description: 'el-tooltip 组件实例', parameter: '`Ref<TooltipInstance>`' },
  { name: 'dropdownVisible ', description: 'tooltip 显示状态', parameter: '`ComputedRef<boolean>`' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
