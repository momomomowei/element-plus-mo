const attributes = [
  {
    name: 'index',
    description: '唯一标志',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'route',
    description: 'Vue Router 路径对象',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  }
]

const events = [
  {
    name: 'click',
    description: '点击菜单项时回调函数, 参数为菜单项实例',
    parameter: '(item: MenuItemRegistered) => void'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'title', description: '自定义标题内容' }
]


const document = { attributes, events, slots }

module.exports = document
