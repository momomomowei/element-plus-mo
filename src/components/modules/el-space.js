module.exports = {
  alignment: {
    type: '`enum`',
    values: [
      'stretch',
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'self-start',
      'self-end',
      'baseline',
      'first baseline',
      'last baseline',
      'normal',
      'anchor-center',
      'safe center',
      'unsafe center',
      'inherit',
      'initial',
      'revert',
      'revert-layer',
      'unset'
    ],
    description:
      '对齐的方式，详见 https://developer.mozilla.org/en-US/docs/Web/CSS/align-items',
    default: 'center'
  },
  class: {
    type: ['`string`', '`object`', '`array`'],
    values: [],
    description: 'className',
    default: ''
  },
  direction: {
    type: '`enum`',
    values: ['horizontal', 'vertical'],
    description: '排列的方向',
    default: 'horizontal'
  },
  'prefix-cls': {
    type: '`string`',
    values: [],
    description: '给 space-items 的类名前缀',
    default: ''
  },
  style: {
    type: ['`string`', '`CSSProperties | CSSProperties[] | string[]`'],
    values: [],
    description: '额外样式',
    default: ''
  },
  spacer: {
    type: ['`string`', '`number`', '`VNode`'],
    values: [],
    description: '间隔符',
    default: ''
  },
  size: {
    type: ['`default | small | large`', '`number`', '`[number, number]`'],
    values: ['small', 'default', 'large'],
    description: '间隔大小',
    default: 'small'
  },
  wrap: {
    type: '`boolean`',
    values: [],
    description: '设置是否自动折行',
    default: false
  },
  fill: {
    type: '`boolean`',
    values: [],
    description: '子元素是否填充父容器',
    default: false
  },
  'fill-ratio': {
    type: '`number`',
    values: [],
    description: '填充父容器的比例',
    default: 100
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/space.html',
    slots: [
      {
        name: 'default',
        description: '需要添加间隔的元素'
      }
    ]
  }
}
