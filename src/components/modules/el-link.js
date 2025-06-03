module.exports = {
  type: {
    type: '`string`',
    values: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    description: '类型',
    default: 'default'
  },
  underline: {
    type: ['`string`', '`boolean`'],
    values: ['always', 'hover', 'never', 'boolean'],
    description: '控制下划线是否出现',
    default: 'hover'
  },
  disabled: {
    type: '`boolean`',
    values: [true, false],
    description: '是否禁用状态',
    default: false
  },
  href: {
    type: '`string`',
    values: [],
    description: '原生 href 属性',
    default: ''
  },
  target: {
    type: '`string`',
    values: ['_blank', '_parent', '_self', '_top'],
    description: '同原生 target 属性',
    default: ''
  },
  icon: {
    type: ['`string`', '`Component`'],
    values: [],
    description: '图标组件',
    default: 'Loading'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/link.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      },
      {
        name: 'icon',
        description: '自定义图标组件'
      }
    ]
  }
}
