const attributes = [
  {
    name: 'header',
    description: '设置 header，也可以通过 `slot#header` 传入 DOM',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'body-style',
    description: '设置 body 的样式',
    type: 'object',
    value: '—',
    default: "{ padding: '20px' }"
  },
  {
    name: 'shadow',
    description: '设置阴影显示时机',
    type: 'string',
    value: 'always / hover / never',
    default: 'always'
  }
]

const document = { attributes }

module.exports = document
