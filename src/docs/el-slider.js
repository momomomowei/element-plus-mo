const attributes = [
  {
    name: 'v-model',
    description: '选中项绑定值',
    type: 'number/number[]',
    value: '—',
    default: '0'
  },
  {
    name: 'model-value',
    description: '选中项绑定值',
    type: 'number/number[]',
    value: '—',
    default: '0'
  },
  {
    name: 'min',
    description: '最小值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'max',
    description: '最大值',
    type: 'number',
    value: '—',
    default: '100'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'step',
    description: '步长',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'show-input',
    description: '是否显示输入框，仅在非范围选择时有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-input-controls',
    description: '在显示输入框的情况下，是否显示输入框的控制按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description: 'slider 包装器的大小，垂直模式下该属性不可用',
    type: 'string',
    value: 'large/default/small',
    default: 'default'
  },
  {
    name: 'input-size',
    description: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
    type: 'string',
    value: 'large/default/small',
    default: 'default'
  },
  {
    name: 'show-stops',
    description: '是否显示间断点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-tooltip',
    description: '是否显示 tooltip',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'format-tooltip',
    description: '格式化 tooltip message',
    type: 'Function',
    value: '`(value: number) => number \\| string`',
    default: '—'
  },
  {
    name: 'format-value-text',
    description: '显示屏幕阅读器的 aria-valuenow 属性的格式',
    type: 'Function',
    value: '`(value: number) => number \\| string`',
    default: '—'
  },
  {
    name: 'range',
    description: '是否为范围选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'vertical',
    description: '是否竖向模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'height',
    description: '滑块高度，垂直模式必填',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'aria-label',
    description: '原生 aria-label属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '原生 aria-label属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'range-start-label',
    description: '当 range 为true时，屏幕阅读器标签开始的标记',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'range-end-label',
    description: '当 range 为true时，屏幕阅读器标签结尾的标记',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'debounce',
    description: '输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'tooltip-class',
    description: 'tooltip 的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'placement',
    description: 'Tooltip 出现的位置',
    type: 'string',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: '—'
  },
  {
    name: 'marks',
    description:
      '标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'persistent',
    description:
      '当 slider 的 tooltip 处于非活动状态且 persistent 为 false 时，Popconfirm 将被销毁。 当 show-tooltip 为 false 时，persistent 将始终为 false。',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'change',
    description: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
    parameter: '`(value: Arrayable<number>) => boolean`'
  },
  {
    name: 'input',
    description: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
    parameter: '`(value: Arrayable<number>) => boolean`'
  }
]

const document = { attributes, events }

module.exports = document
