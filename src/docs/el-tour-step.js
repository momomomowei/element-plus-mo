const attributes = [
  {
    name: 'target',
    description:
      '获取引导卡片指向的元素， 为空时居中于屏幕。 支持字符串和函数类型。 字符串类型是文档.querySelector的选择器',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'show-arrow',
    description: '是否显示箭头',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'title',
    description: '标题部分',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'description',
    description: '主要描述部分',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  {
    name: 'content-style',
    description: '为content自定义样式',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'mask',
    description: '是否启用遮罩，通过自定义属性改变遮罩样式以及填充的颜色',
    type: 'boolean/Object',
    value: '—',
    default: 'true'
  },
  {
    name: 'type',
    description: '类型，影响底色与文字颜色',
    type: 'string',
    value: 'default/primary',
    default: 'default'
  },
  {
    name: 'next-button-props',
    description: '“下一步”按钮的属性',
    type: 'Object',
    value: '{ children: VueNode | string; onClick: Function }',
    default: '-'
  },
  {
    name: 'prev-button-props',
    description: '“上一步”按钮的属性',
    type: 'Object',
    value: '{ children: VueNode | string; onClick: Function }',
    default: '-'
  },
  {
    name: 'scroll-into-view-options',
    description: '是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数',
    type: 'boolean/Object',
    value: '-',
    default: '{ block: "center" }'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-icon',
    description: '自定义关闭图标，默认Close',
    type: 'string/Component',
    value: '—',
    default: 'Close'
  }
]

const slots = [
  { name: 'default', description: '主要描述部分' },
  { name: 'header', description: '头部' }
]

const events = [
  {
    name: 'close',
    description: '关闭引导时的回调函数',
    parameter: '() => void'
  }
]

const document = { attributes, events, slots }

module.exports = document
