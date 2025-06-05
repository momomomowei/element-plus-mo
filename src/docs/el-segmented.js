const attributes = [
  {
    name: 'model-value/v-model',
    description: '绑定值',
    type: 'string/number/boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'options',
    description: '选项的数据',
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'props',
    description: '配置选项',
    type: 'object',
    value: '{value,label,disabled}',
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
    name: 'block',
    description: '撑满父元素宽度',
    type: 'boolean',
    value: '-',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'id',
    description: 'input 的 id',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'aria-label',
    description: '等价于原生 input aria-label 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'direction',
    description: '展示的方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'horizontal'
  }
]

const events = [
  {
    name: 'change',
    description: '当所选值更改时触发，参数是当前选中的值',
    parameter: '(val: any) => void'
  }
]

const slots = [{ name: 'default', description: '自定义 Option 模板 { item: Option }' }]

const document = { attributes, slots, events }

module.exports = document
