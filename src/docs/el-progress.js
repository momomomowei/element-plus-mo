const attributes = [
  {
    name: 'percentage',
    description: '百分比（必填）',
    type: 'number',
    value: '0-100',
    default: '0'
  },
  {
    name: 'type',
    description: '进度条类型',
    type: 'string',
    value: 'line/circle/dashboard',
    default: 'line'
  },
  {
    name: 'stroke-width',
    description: '进度条的宽度，单位 px',
    type: 'number',
    value: '—',
    default: '6'
  },
  {
    name: 'text-inside',
    description: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'status',
    description: '进度条当前状态',
    type: 'string',
    value: 'success/exception/warning',
    default: '—'
  },
  {
    name: 'indeterminate',
    description: '是否为动画进度条',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'duration',
    description: '控制动画进度条速度和条纹进度条流动速度',
    type: 'number',
    value: '—',
    default: '3'
  },
  {
    name: 'color',
    description: '进度条背景色（会覆盖 status 状态颜色）',
    type: 'string/function/array',
    value: '—',
    default: "''"
  },
  {
    name: 'width',
    description: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
    type: 'number',
    value: '',
    default: '126'
  },
  {
    name: 'show-text',
    description: '是否显示进度条文字内容',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'stroke-linecap',
    description: 'circle/dashboard 类型路径两端的形状',
    type: 'string',
    value: 'butt/round/square',
    default: 'round'
  },
  {
    name: 'format',
    description: '指定进度条文字内容',
    type: 'function(percentage)',
    value: '—',
    default: '—'
  },
  {
    name: 'striped',
    description: '在进度条上增加条纹',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'striped-flow',
    description: '让进度条上的条纹流动起来',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const document = { attributes, slots }

module.exports = document
