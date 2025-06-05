const attributes = [
  {
    name: 'model-value / v-model',
    description: '选中项绑定值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可清空',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '自动补全组件是否被禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value-key',
    description: '输入建议对象中用于显示的键名',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'debounce',
    description: '获取输入建议的防抖延时，单位为毫秒',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end',
    default: 'bottom-start'
  },
  {
    name: 'fetch-suggestions',
    description:
      '获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它',
    type: 'Array/Function((queryString: string, callback: callbackfn) => void)',
    value: '—',
    default: '—'
  },
  {
    name: 'trigger-on-focus',
    description: '是否在输入框 focus 时显示建议列表',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'select-when-unmatched',
    description: '在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件',
    type: 'boolean',
    value: '—',
    default: 'true'
  },

  {
    name: 'name',
    description: '等价于原生 input name 属性',
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
    name: 'hide-loading',
    description: '是否隐藏远程加载时的加载图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popper-class',
    description: 'Autocomplete 下拉列表的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'teleported',
    description: '是否将下拉列表元素插入 append-to 指向的元素下',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'append-to',
    description: '下拉框挂载到哪个 DOM 元素',
    type: 'CSSSelector/HTMLElement',
    value: '—',
    default: '-'
  },
  {
    name: 'highlight-first-item',
    description: '是否默认高亮远程搜索结果的第一项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'fit-input-width',
    description: '下拉框的宽度是否与输入框相同',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popper-append-to-body',
    description:
      '是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const events = [
  {
    name: 'blur',
    description: '当选择器的输入框失去焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'focus',
    description: '当选择器的输入框获得焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'input',
    description: '在 Input 值改变时触发',
    parameter: '(value: string | number) => void'
  },
  {
    name: 'clear',
    description: '在点击由 clearable 属性生成的清空按钮时触发',
    parameter: '() => void'
  },
  {
    name: 'select',
    description: '点击选中建议项时触发',
    parameter: '(item: typeof modelValue | any) => void'
  },
  {
    name: 'change',
    description: '在 Input 值改变时触发',
    parameter: '(value: string | number) => void'
  }
]

const slots = [
  { name: 'default', description: '自定义输入建议的内容。' },
  { name: 'prefix', description: '输入框头部内容' },
  { name: 'suffix', description: '输入框尾部内容' },
  { name: 'prepend', description: '输入框前置内容，在 prefix 之前' },
  { name: 'append', description: '输入框后置内容，在 suffix 之后' },
  { name: 'loading ', description: '修改加载区域内容' }
]

const document = { attributes, events, slots }

module.exports = document
