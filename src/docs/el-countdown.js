const attributes = [
  {
    name: 'value',
    description: '目标时间',
    type: 'number/Dayjs',
    value: '—',
    default: '-'
  },
  {
    name: 'format',
    description: '格式化倒计时',
    type: 'string',
    value: '—',
    default: 'HH:mm:ss'
  },
  {
    name: 'prefix',
    description: '设置数字的前缀',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'suffix',
    description: '设置数字的后缀',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'title',
    description: '数字标题',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'value-style',
    description: '数字样式',
    type: 'string/object',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'change',
    description: '时间差改变事件',
    parameter: '(value: number) => void'
  },
  {
    name: 'finish',
    description: '倒计时结束事件',
    parameter: '() => void'
  }
]

const slots = [
  { name: 'prefix', description: '数字区之前' },
  { name: 'suffix', description: '数字区之后' },
  { name: 'title', description: '数字标题' }
]

const exposes = [
  {
    name: 'displayValue',
    description: '当前显示值',
    parameter: 'Ref<string>'
  }
]

const document = { attributes, exposes, slots, events }

module.exports = document
