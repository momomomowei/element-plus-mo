const attributes = [
  {
    name: 'model-value/v-model',
    description: '当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`)',
    type: 'string/array',
    value: '—',
    default: '—'
  },
  {
    name: 'accordion',
    description: '是否手风琴模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-icon-position',
    description: '设置展开图标位置',
    type: 'string',
    value: 'left/right',
    default: 'right'
  },
  {
    name: 'before-collapse',
    description: '折叠状态更改之前的折叠钩子。 返回 false 或者返回 Promise 且被 reject 则停止切换',
    type: 'Function',
    value: '() => Promise<boolean> | boolen',
    default: '-'
  }
]

const slots = [{ name: 'default', description: '自定义默认内容' }]

const exposes = [
  {
    name: 'activeNames',
    description: '当前活动的面板名称',
    parameter: 'ComputedRef<(string | number)[]>'
  },
  {
    name: 'setActiveNames',
    description: '设置活动面板名称',
    parameter: '(activeNames: (string | number)[]) => void'
  }
]

const document = { attributes, slots, exposes }

module.exports = document
