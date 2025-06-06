const attributes = [
  {
    name: 'offset',
    description: '偏移距离',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'position',
    description: '固钉位置',
    type: 'string',
    value: 'top/bottom',
    default: 'top'
  },
  {
    name: 'target',
    description: '指定容器（CSS 选择器）',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'z-index',
    description: 'z-index',
    type: 'number',
    value: '—',
    default: '100'
  }
]

const events = [
  {
    name: 'change',
    description: '固钉状态改变时触发的事件',
    parameter: '`(fixed: boolean) => void`'
  },
  {
    name: 'scroll',
    description: '滚动时触发的事件',
    parameter: '`(value: { scrollTop: number, fixed: boolean }) => void`'
  }
]

const exposes = [
  {
    name: 'update',
    description: '手动更新固钉状态',
    parameter: '`() => void`'
  },
  {
    name: 'updateRoot',
    description: '手动更新根元素的盒模型信息',
    parameter: '`() => void`'
  }
]

const document = { attributes, events, exposes }

module.exports = document
