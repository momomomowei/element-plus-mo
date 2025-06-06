const attributes = [
  {
    name: 'height',
    description: '走马灯的高度',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'initial-index',
    description: '初始状态激活的幻灯片的索引，从 0 开始',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'trigger',
    description: '指示器的触发方式',
    type: 'string',
    value: 'click',
    default: '—'
  },
  {
    name: 'autoplay',
    description: '是否自动切换',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'interval',
    description: '自动切换的时间间隔，单位为毫秒',
    type: 'number',
    value: '—',
    default: '3000'
  },
  {
    name: 'indicator-position',
    description: '指示器的位置',
    type: 'string',
    value: 'outside/none',
    default: '—'
  },
  {
    name: 'arrow',
    description: '切换箭头的显示时机',
    type: 'string',
    value: 'always/hover/never',
    default: 'hover'
  },
  {
    name: 'type',
    description: '走马灯的类型',
    type: 'string',
    value: 'card',
    default: '—'
  },
  {
    name: 'cardScale',
    description: '当 type 为 card时，二级卡的缩放大小',
    type: 'number',
    value: '',
    default: '0.83'
  },
  {
    name: 'loop',
    description: '是否循环显示',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'direction',
    description: '走马灯展示的方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'horizontal'
  },
  {
    name: 'pause-on-hover',
    description: '鼠标悬浮时暂停自动切换',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'motion-blur',
    description: '添加动态模糊以给走马灯注入活力和流畅性。',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

const events = [
  {
    name: 'change',
    description: '幻灯片切换时触发',
    parameter: '`(current: number, prev: number) => boolean`'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const exposes = [
  {
    name: 'activeIndex',
    description: '当前幻灯片的索引',
    parameter: '`number`'
  },
  {
    name: 'setActiveItem',
    description: '手动切换幻灯片',
    parameter: '`(index: string \\| number) => void`'
  },
  { name: 'prev', description: '切换至上一张幻灯片', parameter: '`() => void`' },
  { name: 'next', description: '切换至下一张幻灯片', parameter: '`() => void`' }
]

const document = { attributes, exposes, events, slots }

module.exports = document
