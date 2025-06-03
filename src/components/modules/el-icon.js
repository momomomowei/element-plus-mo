module.exports = {
  size: {
    type: ['`string`', '`number`'],
    values: [],
    description: 'SVG 图标的大小，size x size',
    default: '继承字体大小'
  },
  color: {
    type: '`string`',
    values: [],
    description: 'svg 的 fill 颜色',
    default: '继承字体大小'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/icon.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      }
    ]
  }
}
