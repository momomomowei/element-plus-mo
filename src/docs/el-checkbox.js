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
    name: 'value',
    description: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
    type: 'string/number/boolean/object',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description:
      '选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用',
    type: 'string/number/boolean/object',
    value: '—',
    default: '—'
  },
  {
    name: 'true-value',
    description: '选中时的值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'true-label',
    description: '选中时的值(deprecated)',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-value',
    description: '没有选中时的值',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-label',
    description: '没有选中时的值(deprecated)',
    type: 'string/number',
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
    description: 'Checkbox 的尺寸，仅在 border 为真时有效',
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
  },
  {
    name: 'checked',
    description: '当前是否勾选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'indeterminate',
    description: '设置 indeterminate 状态，只负责样式控制',
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
    name: 'tabindex',
    description: '输入框的 tabindex',
    type: 'string/number',
    value: '—',
    default: '-'
  },
  {
    name: 'id',
    description: '输入框的 id',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'aria-controls',
    description: '与 aria-control一致, 当 indeterminate为 true时生效',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'controls',
    description: '和 aria-control一致。当 indeterminate 为 true 时生效(deprecated)',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
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
