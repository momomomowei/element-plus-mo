const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'max',
    description: '可添加标签的最大数量',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'tag-type',
    description: '标签类型',
    type: 'string',
    value: 'success/info/warning/danger',
    default: 'info'
  },
  {
    name: 'tag-effect',
    description: '标签效果',
    type: 'string',
    value: 'light/dark/plain',
    default: 'light'
  },
  {
    name: 'trigger',
    description: '触发输入标签的按键',
    type: 'string',
    value: 'Enter/Space',
    default: 'Enter'
  },
  {
    name: 'draggable',
    description: '是否可以拖动标签',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'delimiter',
    description: '在匹配分隔符时添加标签',
    type: 'string/regex',
    value: '—',
    default: '-'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'save-on-blur',
    description: '当输入失去焦点时是否保存输入值',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'clearable',
    description: '当输入失去焦点时是否保存输入值',
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
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'readonly',
    description: '等价于原生 readonly 属性',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'autofocus',
    description: '等价于原生  autofocus  属性',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'id',
    description: '等价于原生 input id 属性',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'tabindex',
    description: '输入框的tabindex',
    type: 'string/number',
    value: '-',
    default: '-'
  },
  {
    name: 'maxlength',
    description: '等价于原生  maxlength  属性',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'minlength',
    description: '等价于原生  minlength  属性',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'autocomplete',
    description: '等价于原生  autocomplete  属性',
    type: 'string',
    value: '—',
    default: 'off'
  },
  {
    name: 'aria-label',
    description: '等价于原生  aria-label  属性',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '仅在输入框失去焦点或用户按下回车时触发',
    parameter: '`(value: string[]) => void`'
  },
  {
    name: 'input',
    description: '在 Input 值改变时触发',
    parameter: '`(value: string) => void`'
  },
  {
    name: 'add-tag',
    description: 'tag 被添加时触发',
    parameter: '`(value: string) => void`'
  },
  {
    name: 'remove-tag',
    description: 'tag 被移除时触发',
    parameter: '`(value: string) => void`'
  },
  {
    name: 'blur',
    description: '在 Input 失去焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  },
  {
    name: 'focus',
    description: '在 Input 获得焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  },

  {
    name: 'clear',
    description: '点击清除图标时触发',
    parameter: '`() => void`'
  }
]

const slots = [
  { name: 'tag', description: '作为tag的内容，{ value: string, index: number }' },
  { name: 'prefix', description: 'InputTag 头部内容' },
  { name: 'suffix', description: 'InputTag 尾部内容' }
]

const exposes = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '`() => void`' },
  { name: 'blur', description: '使 input 失去焦点', parameter: '`() => void`' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
