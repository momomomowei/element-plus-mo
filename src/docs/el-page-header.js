const attributes = [
  {
    name: 'icon',
    description: 'Page Header 的图标 Icon 组件',
    type: 'string/Component',
    value: '—',
    default: 'Back'
  },
  {
    name: 'title',
    description: 'Page Header 的主标题，默认是 Back (内置 a11y)',
    type: 'string',
    value: '—',
    default: '返回'
  },
  {
    name: 'content',
    description: 'Page Header 的内容',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const events = [{ name: 'back', description: '点击左侧区域触发', parameter: '`() => void`' }]

const slots = [
  { name: 'icon', description: '图标内容' },
  { name: 'title', description: '标题内容' },
  { name: 'content', description: '内容' },
  { name: 'extra', description: '扩展设置' },
  { name: 'breadcrumb', description: '面包屑导航内容' },
  { name: 'default', description: '默认内容' }
]

const document = { attributes, events, slots }

module.exports = document
