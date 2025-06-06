const attributes = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '主题',
    type: 'string',
    value: 'primary/success/warning/info/error',
    default: 'info'
  },
  {
    name: 'description',
    description: '辅助性文字。也可通过默认 slot 传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'closable',
    description: '是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'center',
    description: '文字是否居中',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-text',
    description: '关闭按钮自定义文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-icon',
    description: '是否显示图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'effect',
    description: '选择提供的主题',
    type: 'string',
    value: 'light/dark',
    default: 'light'
  }
]

const events = [
  { name: 'close', description: '关闭alert时触发的事件', parameter: '`event: MouseEvent) => void`' }
]

const slots = [
  { name: 'default', description: 'Alert 内容描述' },
  { name: 'title', description: '标题的内容' },
  { name: 'icon', description: 'icon 的内容' }
]

const document = { attributes, events, slots }

module.exports = document
