module.exports = {
  locale: {
    type: '`{name: string, el: TranslatePair}`',
    values: [],
    description:
      '翻译文本对象，详见 https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang',
    default: 'en'
  },
  size: {
    type: '`enum`',
    values: ['large', 'default', 'small'],
    description: '全局组件大小',
    default: 'default'
  },
  zIndex: {
    type: '`number`',
    values: [],
    description: '全局初始化 zIndex 的值',
    default: ''
  },
  //   namespace: {
  //     type: '`string`',
  //     values: [],
  //     description:
  //       '全局组件类名称前缀，需配合 https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1 使用',
  //     default: 'el'
  //   },
  //   button: {
  //     type: '`object`',
  //     values: [],
  //     description:
  //       '按钮相关配置，详见 https://cn.element-plus.org/zh-CN/component/config-provider.html#button-attribute',
  //     default: '详见下表'
  //   },
  //   link: {
  //     type: '`object`',
  //     values: [],
  //     description:
  //       '链接相关的配置，详见 https://cn.element-plus.org/zh-CN/component/config-provider.html#link-attribute',
  //     default: '详见下表'
  //   },
  //   message: {
  //     type: '`object`',
  //     values: [],
  //     description:
  //       '消息相关配置，详见 https://cn.element-plus.org/zh-CN/component/config-provider.html#message-attribute',
  //     default: '详见下表'
  //   },
  'experimental-features': {
    type: '`object`',
    values: [],
    description: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
    default: ''
  },
  'empty-values': {
    type: '`array`',
    values: [],
    description: '输入类组件空值',
    default: ''
  },
  'value-on-clear': {
    type: ['`string`', '`number`', '`boolean`', '`Function`'],
    values: [],
    description: '输入类组件清空值',
    default: ''
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/config-provider.html'
  }
}
