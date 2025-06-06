const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'string[]/number[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'string[]/number[]',
    value: '—',
    default: '[]'
  },
  {
    name: 'size',
    description: '多选框组尺寸',
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
    name: 'min',
    description: '可被勾选的 checkbox 的最小数量',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'max',
    description: '可被勾选的 checkbox 的最大数量',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'aria-label',
    description: '原生 aria-label属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'text-color',
    description: '按钮形式的 Checkbox 激活时的文本颜色',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'fill',
    description: '按钮形式的 Checkbox 激活时的填充色和边框色',
    type: 'string',
    value: '—',
    default: '#409EFF'
  },
  {
    name: 'tag',
    description: '复选框组元素标签',
    type: 'string',
    value: '—',
    default: 'div'
  },
  {
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'label',
    description: '原生 aria-label属性',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
    parameter: '`(value: string[] \\| number[]) => void`'
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
