module.exports = {
  size: {
    type: '`string`',
    values: ['large', 'default', 'small'],
    description: '尺寸',
    default: ''
  },
  type: {
    type: '`string`',
    values: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
    description: '按钮类型，在设置`color`时，后者优先。',
    default: ''
  },
  plain: {
    type: '`boolean`',
    values: [],
    description: '是否为朴素按钮',
    default: false
  },
  text: {
    type: '`boolean`',
    values: [],
    description: '是否为文字按钮',
    default: false
  },
  bg: {
    type: '`boolean`',
    values: [],
    description: '是否显示文字按钮背景颜色',
    default: false
  },
  link: {
    type: '`boolean`',
    values: [],
    description: '是否为链接按钮',
    default: false
  },
  round: {
    type: '`boolean`',
    values: [],
    description: '是否为圆角按钮',
    default: false
  },
  circle: {
    type: '`boolean`',
    values: [],
    description: '是否为圆形按钮',
    default: false
  },
  loading: {
    type: '`boolean`',
    values: [],
    description: '是否为加载中状态',
    default: false
  },
  'loading-icon': {
    type: ['`string`', '`Component`'],
    values: [],
    description: '自定义加载中状态图标组件',
    default: 'Loading'
  },
  disabled: {
    type: '`boolean`',
    values: [],
    description: '按钮是否为禁用状态',
    default: false
  },
  icon: {
    type: ['`string`', '`Component`'],
    values: [],
    description: '图标组件',
    default: ''
  },
  autofocus: {
    type: '`boolean`',
    values: [],
    description: '原生 `autofocus` 属性',
    default: false
  },
  'native-type': {
    type: '`string`',
    values: ['button', 'submit', 'reset'],
    description: '原生 type 属性',
    default: 'button'
  },
  'auto-insert-space': {
    type: '`boolean`',
    values: [],
    description:
      '两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)',
    default: false
  },
  color: {
    type: '`string`',
    values: [],
    description: '自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色',
    default: ''
  },
  dark: {
    type: '`boolean`',
    values: [],
    description: 'dark 模式, 意味着自动设置 `color` 为 dark 模式的颜色',
    default: false
  },
  tag: {
    type: ['`string`', '`Component`'],
    values: [],
    description: '自定义元素标签',
    default: 'button'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/button.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      },
      {
        name: 'loading',
        description: '自定义加载中组件'
      },
      {
        name: 'icon',
        description: '自定义图标组件'
      }
    ],
    exposes: [
      {
        name: 'ref',
        description: '按钮 html 元素',
        type: '`Ref<HTMLButtonElement>`'
      },
      {
        name: 'size',
        description: '按钮尺寸',
        type: "`ComputedRef<'' | 'small' | 'default' | 'large'>`"
      },
      {
        name: 'type',
        description: '按钮类型',
        type: "`ComputedRef<'' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>`"
      },
      {
        name: 'disabled',
        description: '按钮已禁用',
        type: '`ComputedRef<boolean>`'
      },
      {
        name: 'shouldAddSpace',
        description: '是否在两个字符之间插入空格',
        type: '`ComputedRef<boolean>`'
      }
    ]
  }
}
