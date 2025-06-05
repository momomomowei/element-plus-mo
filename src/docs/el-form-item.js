const attributes = [
  {
    name: 'prop',
    description: `model 的键名。 它可以是一个属性的值(如 a.b.0 或 ['a', 'b', '0'])。 在使用了 validate、resetFields 的方法时，该属性是必填的`,
    type: 'string/string[]',
    value: '传入 Form 组件的 `model` 中的字段',
    default: '—'
  },
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label-position',
    description:
      '表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 默认会继承 Form的label-position',
    type: 'string',
    value: 'left/right/top',
    default: '—'
  },
  {
    name: 'label-width',
    description: "表单域标签的的宽度，例如 '50px'。支持 `auto`。",
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'required',
    description: '是否必填，如不设置，则会根据校验规则自动生成',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'error',
    description: '表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息',
    type: 'string',
    value: '—',
    default: '—'
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
    description: '以行内形式展示校验信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '用于控制该表单域下组件的尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '-'
  },
  {
    name: 'for',
    description: '和原生标签相同能力',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-status',
    description: 'formitem 校验的状态',
    type: 'string',
    value: 'error/validating/success',
    default: '-'
  }
]

const exposes = [
  {
    name: 'size',
    description: '表单项大小',
    parameter: `ComputedRef<'' | 'large' | 'default' | 'small'>`
  },
  {
    name: 'validateMessage',
    description: '校验消息',
    parameter: `Ref<string>`
  },
  {
    name: 'validateState',
    description: '校验状态',
    parameter: `Ref<'' | 'error' | 'validating' | 'success'>`
  },
  {
    name: 'validate',
    description: '验证表单项',
    parameter: `(trigger: string, callback?: FormValidateCallback | undefined) => FormValidationResult`
  },
  {
    name: 'resetField',
    description: '对该表单项进行重置，将其值重置为初始值并移除校验结果',
    parameter: '() => void'
  },
  {
    name: 'clearValidate',
    description: '移除该表单项的校验结果',
    parameter: '() => void'
  }
]

const slots = [
  { name: 'default', description: 'Form Item 的内容' },
  { name: 'label', description: '标签文本的内容' },
  { name: 'error', description: '验证错误信息的显示内容' }
]

const document = { attributes, exposes, slots }

module.exports = document
