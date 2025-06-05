const attributes = [
  {
    name: 'header',
    description: '设置 header，也可以通过 `slot#header` 传入 DOM',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'footer',
    description:
      '卡片页脚。 你既可以通过设置 footer 来修改卡片底部内容，也可以通过 slot#footer 传入 DOM 节点',
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
    name: 'header-class',
    description: 'card header 的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'body-class',
    description: 'body 的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'footer-class',
    description: 'footer 的自定义类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'shadow',
    description: '设置阴影显示时机',
    type: 'string',
    value: 'always/hover/never',
    default: 'always'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'header', description: '卡片标题内容' },
  { name: 'footer', description: '卡片页脚内容' }
]

const document = { attributes, slots }

module.exports = document
