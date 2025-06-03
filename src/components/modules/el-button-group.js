module.exports = {
  size: {
    type: '`string`',
    values: ['large', 'default', 'small'],
    description: '用于控制该按钮组内按钮的大小',
    default: ''
  },
  type: {
    type: '`string`',
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    description: '用于控制该按钮组内按钮的类型',
    default: ''
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/button.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      }
    ]
  }
}
