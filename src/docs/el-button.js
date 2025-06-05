const attributes = [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'type',
    description: '按钮类型，在设置color时，后者优先',
    type: 'string',
    value: 'default/primary/success/warning/danger/info/text',
    default: '—'
  },
  {
    name: 'plain',
    description: '是否朴素按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'text',
    description: '是否为文字按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'bg',
    description: '是否显示文字按钮背景颜色',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'link',
    description: '是否为链接按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'round',
    description: '是否圆角按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'circle',
    description: '是否圆形按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否为加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading-icon',
    description: '自定义加载中状态图标组件',
    type: 'string/Component',
    value: '—',
    default: 'Loading'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'icon',
    description: '图标组件',
    type: 'string/Component',
    value: '—',
    default: '—'
  },
  {
    name: 'autofocus',
    description: '原生 autofocus 属性',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'native-type',
    description: '原生 type 属性',
    type: 'string',
    value: 'button/submit/reset',
    default: 'button'
  },
  {
    name: 'auto-insert-space',
    description: '两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'color',
    description: '自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'dark',
    description: 'dark 模式, 意味着自动设置 color 为 dark 模式的颜色',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tag',
    description: '自定义元素标签',
    type: 'string/Component',
    value: '—',
    default: 'button'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容' },
  { name: 'loading', description: '自定义加载中组件' },
  { name: 'icon', description: '自定义图标组件' }
]

const document = { attributes, slots }

module.exports = document
