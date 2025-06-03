module.exports = {
  direction: {
    type: '`string`',
    values: ['horizontal', 'vertical'],
    description: '子元素的排列方向',
    default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/container.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容',
        subtags: ['Container', 'Header', 'Aside', 'Main', 'Footer']
      }
    ]
  }
}
