const attributes = [
  {
    name: 'index',
    description: '唯一标志，必须的',
    type: 'string',
    value: '—',
    default: null
  },
  {
    name: 'popper-class',
    description: '弹出菜单的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-timeout',
    description: '展开 sub-menu 的延时',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'hide-timeout',
    description: '收起 sub-menu 的延时',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'popper-append-to-body',
    description: '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
    type: 'boolean',
    value: '—',
    default: '一级子菜单：true / 非一级子菜单：false'
  },
  {
    name: 'persistent',
    description: '当菜单处于非活动状态且 persistent 为 false 时，菜单将被销毁',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popper-offset',
    description: '弹出层的偏移量(对所有子菜单有效)',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'expand-close-icon',
    description:
      '父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效',
    type: 'string/Component',
    value: '—',
    default: '-'
  },
  {
    name: 'expand-open-icon',
    description:
      '父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效',
    type: 'string/Component',
    value: '—',
    default: '-'
  },
  {
    name: 'collapse-close-icon',
    description:
      '父菜单收起且子菜单关闭时的图标， collapse-close-icon 和 collapse-open-icon 需要一起配置才能生效',
    type: 'string/Component',
    value: '—',
    default: '-'
  },
  {
    name: 'collapse-open-icon',
    description:
      '父菜单收起且子菜单打开时的图标， collapse-open-icon 和 collapse-close-icon 需要一起配置才能生效',
    type: 'string/Component',
    value: '—',
    default: '-'
  }
]

const slots = [
  { name: 'default', description: '自定义默认内容，SubMenu / Menu-Item / Menu-Item-Group' },
  { name: 'title', description: '自定义标题内容' }
]

const document = { attributes, slots }

module.exports = document
