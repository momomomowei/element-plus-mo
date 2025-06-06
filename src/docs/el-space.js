const attributes = [
  {
    name: 'alignment',
    description: '对齐方式',
    type: 'string',
    value: 'start/end/align-items',
    default: 'center'
  },
  {
    name: 'class',
    description: '类名',
    type: 'string/Array/Object',
    value: '—',
    default: '-'
  },
  {
    name: 'direction',
    description: '排列的方向',
    type: 'string',
    value: 'vertical/horizontal',
    default: 'horizontal'
  },
  {
    name: 'prefix-cls',
    description: '给 space-items 的类名前缀',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'style',
    description: '额外样式',
    type: 'string/CSSProperties/CSSProperties[]/string[]',
    value: '-',
    default: '—'
  },
  {
    name: 'spacer',
    description: '间隔符',
    type: 'string/number/VNode',
    value: '—',
    default: '-'
  },
  {
    name: 'size',
    description: '间隔大小',
    type: 'string(default/small/large)/number/array[number, number]',
    value: '—',
    default: 'small'
  },
  {
    name: 'wrap',
    description: '设置是否自动折行',
    type: 'boolean',
    value: 'true/false',
    default: 'false'
  },
  {
    name: 'fill',
    description: '子元素是否填充父容器',
    type: 'boolean',
    value: 'true/false',
    default: 'false'
  },
  {
    name: 'fill-ratio',
    description: '填充父容器的比例',
    type: 'number',
    value: '—',
    default: '100'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, slots }

module.exports = document
