const attributes = [
  {
    name: 'name',
    description: '幻灯片的名字，可用作 `setActiveItem` 的参数',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '该幻灯片所对应指示器的文本',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, slots }

module.exports = document
