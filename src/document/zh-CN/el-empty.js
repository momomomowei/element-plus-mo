const attributes = [
  {
    name: 'image',
    description: '图片地址',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'image-size',
    description: '图片大小（宽度）',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'description',
    description: '文本描述',
    type: 'string',
    value: '—',
    default: '—'
  }
]

const slots = [
  { name: 'default', description: '自定义底部内容' },
  { name: 'image', description: '自定义图片' },
  { name: 'description', description: '自定义描述文字' }
]

const document = { attributes, slots }

module.exports = document
