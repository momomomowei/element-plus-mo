const attributes = [
  {
    name: 'v-model',
    description: '选中项绑定值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '选中项绑定值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'value',
    description: '单选框的值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '单选框的 label 如果value没有值， label则作为value使用',
    type: 'string/number/boolean',
    value: '—',
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
    name: 'border',
    description: '是否显示边框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Radio 的尺寸，仅在 border 为真时有效',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
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
    description: '自定义默认内容'
  }
]

const document = { attributes, events, slots }

module.exports = document
