const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value:
      'text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)',
    default: 'text'
  },
  {
    name: 'maxlength',
    description: '原生属性，最大输入长度',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'minlength',
    description: '原生属性，最小输入长度',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'show-word-limit',
    description: '是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可清空',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'formatter',
    description: '指定输入值的格式。(只有当 type 是"text"时才能工作)',
    type: 'Function (value: string | number) => string',
    value: '—',
    default: '-'
  },
  {
    name: 'parser',
    description: '指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)',
    type: 'Function (value: string) => string',
    value: '—',
    default: '-'
  },
  {
    name: 'show-password',
    description: '是否显示切换密码图标',
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
    description: '输入框尺寸，只在 `type!="textarea"` 时有效',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'prefix-icon',
    description: '输入框头部图标',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'suffix-icon',
    description: '输入框尾部图标',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'rows',
    description: '输入框行数，只对 `type="textarea"` 有效',
    type: 'number',
    value: '—',
    default: '2'
  },
  {
    name: 'autosize',
    description:
      '自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
    type: 'boolean/object',
    value: '—',
    default: 'false'
  },
  {
    name: 'autocomplete',
    description: '原生属性，自动补全',
    type: 'string',
    value: 'on, off',
    default: 'off'
  },
  {
    name: 'auto-complete',
    description: '下个主版本弃用',
    type: 'string',
    value: 'on, off',
    default: 'off'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'readonly',
    description: '原生属性，是否只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'max',
    description: '原生属性，设置最大值',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'min',
    description: '原生属性，设置最小值',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'step',
    description: '原生属性，设置输入字段的合法数字间隔',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'resize',
    description: '控制是否能被用户缩放',
    type: 'string',
    value: 'none, both, horizontal, vertical',
    default: '—'
  },
  {
    name: 'autofocus',
    description: '原生属性，自动获取焦点',
    type: 'boolean',
    value: 'true, false',
    default: 'false'
  },
  {
    name: 'form',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '等价于原生 input aria-label 属性',
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
    name: 'tabindex',
    description: '输入框的tabindex',
    type: 'string/number',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'input-style',
    description: 'input 元素或 textarea 元素的 style',
    type: 'string/object',
    value: '-',
    default: '{}'
  }
]

const events = [
  {
    name: 'blur',
    description: '在 Input 失去焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'focus',
    description: '在 Input 获得焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'change',
    description: '仅在输入框失去焦点或用户按下回车时触发',
    parameter: '(value: string | number) => void'
  },
  {
    name: 'input',
    description: '在 Input 值改变时触发',
    parameter: '(value: string | number) => void'
  },
  {
    name: 'clear',
    description: '在点击由 `clearable` 属性生成的清空按钮时触发',
    parameter: '() => void'
  }
]

const slots = [
  { name: 'prefix', description: '输入框头部内容，只对非 type="textarea" 有效' },
  { name: 'suffix', description: '输入框尾部内容，只对非 type="textarea" 有效' },
  { name: 'prepend', description: '输入框头部内容，只对非 type="textarea" 有效' },
  { name: 'append', description: '输入框尾部内容，只对非 type="textarea" 有效' }
]

const exposes = [
  { name: 'blur', description: '使 input 失去焦点', parameter: '() => void' },
  { name: 'clear', description: '使 input 失去焦点', parameter: '() => void' },
  { name: 'focus', description: '使 input 获取焦点', parameter: '() => void' },
  { name: 'input', description: 'Input HTML 元素', parameter: 'Ref<HTMLInputElement>' },
  {
    name: 'ref',
    description: '	HTML元素 input 或 textarea',
    parameter: 'Ref<HTMLInputElement | HTMLTextAreaElement>'
  },
  { name: 'resizeTextarea', description: '改变 textarea 大小', parameter: '() => void' },
  { name: 'select', description: '选中 input 中的文字', parameter: '() => void' },
  { name: 'textarea', description: 'HTML textarea 元素', parameter: 'Ref<HTMLTextAreaElement>' },
  { name: 'textareaStyle', description: 'textarea 的样式', parameter: 'Ref<StyleValue>' },
  { name: 'isComposing ', description: '是否是输入 composing 状态', parameter: 'Ref<boolean>' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
