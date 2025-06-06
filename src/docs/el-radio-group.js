const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效',
    type: 'string',
    value: 'large/default/small',
    default: '—'
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
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'aria-label',
    description: '与 RadioGroup 中的 aria-label 属性相同',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'id',
    description: '原生 id 属性',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '绑定值变化时触发的事件',
    parameter: '`(value: string \\| number \\| boolean) => void`'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容，子标签Radio / RadioButton'
  }
]

const document = { attributes, events, slots }

module.exports = document
