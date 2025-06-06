const attributes = [
  {
    name: 'model',
    description: '表单数据对象',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'inline',
    description: '行内表单模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'label-position',
    description: '表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`',
    type: 'string',
    value: 'right/left/top',
    default: 'right'
  },
  {
    name: 'label-width',
    description:
      "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。",
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'label-suffix',
    description: '表单域标签的后缀',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-required-asterisk',
    description: '是否显示必填字段的标签旁边的红色星号',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'require-asterisk-position',
    description: '星号的位置。',
    type: 'string',
    value: 'left/right',
    default: 'false'
  },
  {
    name: 'show-message',
    description: '是否显示校验错误信息',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'inline-message',
    description: '是否以行内形式展示校验信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'status-icon',
    description: '是否在输入框中显示校验结果反馈图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'validate-on-rule-change',
    description: '是否在 `rules` 属性改变后立即触发一次验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description: '用于控制该表单内组件的尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'disabled',
    description:
      '是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'scroll-to-error',
    description: '当校验失败时，滚动到第一个错误表单项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'scroll-into-view-options',
    description: '当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置',
    type: 'boolean/object',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'validate',
    description: '任一表单项被校验后触发',
    parameter: '`(prop: FormItemProp, isValid: boolean, message: string) => void`'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容'
  }
]

const exposes = [
  {
    name: 'validate',
    description: '对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise',
    parameter: '`(callback?: FormValidateCallback) => Promise<void>`'
  },
  {
    name: 'validateField',
    description: '验证具体的某个字段。',
    parameter:
      '`(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult`'
  },
  {
    name: 'resetFields',
    description: '重置该表单项，将其值重置为初始值，并移除校验结果',
    parameter: '`(props?: Arrayable<FormItemProp>) => void`'
  },
  {
    name: 'scrollToField',
    description: '滚动到指定的字段',
    parameter: '`(prop: FormItemProp) => void`'
  },
  {
    name: 'clearValidate',
    description: '清理某个字段的表单验证信息。',
    parameter: '`(props?: Arrayable<FormItemProp>) => void`'
  },
  {
    name: 'fields',
    description: '获取所有字段的 context',
    parameter: '`FormItemContext[]`'
  }
]

const document = { attributes, events, slots, exposes }

module.exports = document
