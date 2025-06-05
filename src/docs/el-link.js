const attributes = [
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary/success/warning/danger/info/default',
    default: 'default'
  },
  {
    name: 'underline',
    description: '控制下划线是否出现',
    type: 'string/boolean',
    value: 'always/hover/never/boolean',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'href',
    description: '原生 href 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'target',
    description: '同原生 target 属性',
    type: 'string',
    value: '_blank/_parent/_self/_top',
    default: '-'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'string/Component',
    value: '—',
    default: '-'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容'
  },
  {
    name: 'icon',
    description: '自定义图标组件'
  }
]

const document = { attributes, slots }

module.exports = document
