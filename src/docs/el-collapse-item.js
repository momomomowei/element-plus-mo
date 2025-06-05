const attributes = [
  {
    name: 'name',
    description: '唯一标志符',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'title',
    description: '面板标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'icon',
    description: '折叠项目的图标',
    type: 'string/Component',
    value: '—',
    default: 'ArrowRight'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: 'Collapse Item 的内容' },
  { name: 'title', description: 'Collapse Item 的标题' },
  { name: 'icon', description: '折叠项目图标的内容 { isActive: boolean }' }
]

const exposes = [
  {
    name: 'isActive',
    description: '当前折叠项是否激活',
    parameter: 'ComputedRef<boolean | undefined>'
  }
]

const document = { attributes, slots, exposes }

module.exports = document
