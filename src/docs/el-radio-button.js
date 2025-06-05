const attributes = [
  {
    name: 'value',
    description: '单选框的值',
    type: 'string/number/boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '单选框的 label 如果没有 value， label则作为value使用',
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
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'text-color',
    description: '按钮形式的 Radio 激活时的文本颜色',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'fill',
    description: '按钮形式的 Radio 激活时的填充色和边框色',
    type: 'string',
    value: '—',
    default: '#409eff'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容'
  }
]

const document = { attributes, slots }

module.exports = document
