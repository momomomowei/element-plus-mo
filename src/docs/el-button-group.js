const attributes = [
  {
    name: 'size',
    description: '用于控制该按钮组内按钮的大小',
    type: 'string',
    value: 'large / default / small',
    default: '—'
  },
  {
    name: 'type',
    description: '用于控制该按钮组内按钮的类型',
    type: 'string',
    value: 'default / primary / success / warning / danger / info / text',
    default: '—'
  }
]

const slots = [{ name: 'default', description: '自定义按钮组内容' }]

const document = { attributes, slots }

module.exports = document
