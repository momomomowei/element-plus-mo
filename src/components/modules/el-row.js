module.exports = {
  gutter: {
    type: '`number`',
    values: [],
    description: '尺寸',
    default: 0
  },
  justify: {
    type: '`string`',
    values: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
    description: 'flex 布局下的水平排列方式',
    default: 'start'
  },
  align: {
    type: '`string`',
    values: ['top', 'middle', 'bottom'],
    description: 'flex 布局下的垂直排列方式',
    default: ''
  },
  tag: {
    type: ['`string`', '`Component`'],
    values: [],
    description: '自定义元素标签',
    default: 'div'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/layout.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容',
        subtags: ['Col']
      }
    ]
  }
}
