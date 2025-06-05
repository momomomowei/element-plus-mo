const attributes = [
  {
    name: 'model-value/v-model',
    description: '选中项绑定值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'show-alpha',
    description: '是否支持透明度选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'color-format',
    description: '写入 v-model 的颜色的格式',
    type: 'string',
    value: 'hsl/hsv/hex/rgb',
    default: 'hex（show-alpha 为 false）/ rgb（show-alpha 为 true）'
  },
  {
    name: 'popper-class',
    description: 'ColorPicker 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'predefine',
    description: '预定义颜色',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'tabindex',
    description: 'ColorPicker 的 tabindex',
    type: 'string/number',
    value: '—',
    default: '0'
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
    description: '原生 aria-label属性(deprecated)',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'id',
    description: 'ColorPicker 的 id',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'teleported',
    description: '是否将 popover 的下拉列表渲染至 body 下',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  { name: 'change', description: '当绑定值变化时触发', parameter: '(value: string) => void' },
  {
    name: 'active-change',
    description: '面板中当前显示的颜色发生改变时触发',
    parameter: '(value: string) => void'
  },
  {
    name: 'focus',
    description: '当获得焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'blur',
    description: '当失去焦点时触发',
    parameter: '(event: FocusEvent) => void'
  }
]

const exposes = [
  {
    name: 'color',
    description: '当前色彩对象',
    parameter: 'Color'
  },
  {
    name: 'show',
    description: '手动显示颜色选择器',
    parameter: '() => void'
  },
  {
    name: 'hide',
    description: '手动隐藏颜色选择器',
    parameter: '() => void'
  },
  {
    name: 'focus',
    description: '使 picker 获得焦点',
    parameter: '() => void'
  },
  {
    name: 'blur',
    description: '使 picker 失去焦点',
    parameter: '() => void'
  }
]

const document = { attributes, events, exposes }

module.exports = document
