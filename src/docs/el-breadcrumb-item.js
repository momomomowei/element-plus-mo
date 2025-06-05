const attributes = [
  {
    name: 'to',
    description: '路由跳转对象，同 `vue-router` 的 `to`',
    type: 'string/object',
    value: '—',
    default: '—'
  },
  {
    name: 'replace',
    description: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, slots }

module.exports = document
