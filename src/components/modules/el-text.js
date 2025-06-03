module.exports = {
  type: {
    type: '`string`',
    values: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    description: '类型',
    default: ''
  },
  size: {
    type: '`string`',
    values: ['large', 'default', 'small'],
    description: '尺寸',
    default: ''
  },
  truncated: {
    type: '`boolean`',
    values: [true, false],
    description: '显示省略号',
    default: false
  },
  'line-clamp': {
    type: ['`string`', '`number`'],
    values: [],
    description: '最大行数',
    default: ''
  },
  tag: {
    type: '`string`',
    values: [],
    description: '自定义元素标签',
    default: 'span'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/text.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      }
    ]
  }
}
