const attributes = [
  {
    name: 'mode',
    description: '模式',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'vertical'
  },
  {
    name: 'collapse',
    description: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'ellipsis-icon',
    description: '自定义省略图标 (仅在水平模式下可用)',
    type: 'string/Component',
    value: '—',
    default: '-'
  },
  {
    name: 'popper-offset',
    description: '弹出层的偏移量(对所有子菜单有效)',
    type: 'number',
    value: '—',
    default: '6'
  },
  {
    name: 'default-active',
    description: '当前激活菜单的 index',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'default-openeds',
    description: '当前打开的 sub-menu 的 index 的数组',
    type: 'Array',
    value: '—',
    default: '—'
  },
  {
    name: 'unique-opened',
    description: '是否只保持一个子菜单的展开',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'menu-trigger',
    description: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
    type: 'string',
    value: 'hover/click',
    default: 'hover'
  },
  {
    name: 'router',
    description:
      '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'collapse-transition',
    description: '是否开启折叠动画',
    type: 'boolean',
    value: '—',
    default: true
  },
  {
    name: 'popper-effect',
    description: 'Tooltip 主题，内置了 dark / light 两种主题，当菜单折叠时生效',
    type: 'string',
    value: 'light/dark',
    default: 'light'
  },
  {
    name: 'close-on-click-outside',
    description: '可选，单击外部时是否折叠菜单',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'popper-class',
    description: '为 popper 添加类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-timeout',
    description: '菜单出现前的延迟',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'hide-timeout',
    description: '菜单消失前的延迟',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'background-color',
    description: '菜单的背景色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'text-color',
    description: '菜单的文字颜色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#303133'
  },
  {
    name: 'active-text-color',
    description: '当前激活菜单的文字颜色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#409EFF'
  },
  {
    name: 'persistent',
    description: '当菜单处于非活动状态且 persistent 为 false 时，菜单将被销毁',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'select',
    description: '菜单激活回调',
    parameter: '`index: 选中菜单项的 index, indexPath: 选中菜单项的 index path`'
  },
  {
    name: 'open',
    description: 'sub-menu 展开的回调',
    parameter: '`index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path`'
  },
  {
    name: 'close',
    description: 'sub-menu 收起的回调',
    parameter: '`index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path`'
  }
]

const exposes = [
  {
    name: 'open',
    description: '打开一个特定的子菜单，参数是要打开的子菜单的索引',
    parameter: '`(index: string) => void`'
  },
  {
    name: 'close',
    description: '关闭一个特定的子菜单，参数是要关闭子菜单的索引',
    parameter: '`(index: string) => void`'
  },
  {
    name: 'updateActiveIndex',
    description: '通过索引激活指定菜单',
    parameter: '`(index: string) => void`'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { exposes, events, attributes, slots }

module.exports = document
