const attributes = [
  {
    name: 'title',
    description: '链接的文本内容',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'href',
    description: '链接的地址',
    type: 'string',
    value: '—',
    default: '-'
  }
]

const slots = [
  { name: 'default', description: '链接的内容' },
  { name: 'sub-link', description: '子链接的槽位' }
]

const document = { attributes, slots }

module.exports = document
