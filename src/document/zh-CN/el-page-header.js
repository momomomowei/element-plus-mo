const attributes = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '返回'
  },
  {
    name: 'content',
    description: '内容',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const events = [{ name: 'back', description: '点击左侧区域触发', parameter: '—' }]

const slots = [
  { name: 'title', description: '标题内容' },
  { name: 'content', description: '内容' }
]

const document = { attributes, events, slots }

module.exports = document
