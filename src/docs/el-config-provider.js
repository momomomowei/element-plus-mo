const attributes = [
  {
    name: 'locale',
    description: '翻译文本对象',
    type: 'object({name: string, el: TranslatePair})',
    value: '—',
    default: 'en'
  },
  {
    name: 'size',
    description: '全局组件大小',
    type: 'string',
    value: 'large/default/small',
    default: 'default'
  },
  {
    name: 'zIndex',
    description: '全局初始化 zIndex 的值',
    type: 'number',
    value: '-',
    default: '-'
  },
  {
    name: 'namespace',
    description: '全局组件类名称前缀 (需要配合 $namespace 使用)',
    type: 'string',
    value: '-',
    default: 'el'
  },
  {
    name: 'button',
    description: '按钮相关配置',
    type: 'object({autoInsertSpace?: boolean, type?: string, plain?: boolean, round?: boolean})',
    value: '-',
    default: '-'
  },
  {
    name: 'link',
    description: '链接相关的配置',
    type: 'object({type?: string, underline?: boolean | string})',
    value: '-',
    default: '-'
  },
  {
    name: 'message',
    description: '消息相关配置',
    type: 'object({max?: number})',
    value: '-',
    default: '-'
  },
  {
    name: 'experimental-features',
    description: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
    type: 'object',
    value: '-',
    default: '-'
  },
  {
    name: 'empty-values',
    description: '输入类组件空值',
    type: 'array',
    value: '-',
    default: '-'
  },
  {
    name: 'value-on-clear',
    description: '输入类组件清空值',
    type: 'string/number/boolean/Function',
    value: '-',
    default: '-'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容，Scope：config: 提供全局配置（从顶部继承）'
  }
]

const document = { attributes, slots }

module.exports = document
