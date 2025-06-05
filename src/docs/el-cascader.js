const attributes = [
  {
    name: 'model-value / v-model',
    description: '选中项绑定值',
    type: 'string/number/object(string[] | number[] | any)',
    value: '—',
    default: '—'
  },
  {
    name: 'options',
    description: '选项的数据源， value 和 label 可以通过 Props 自定义.',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'props',
    description: '配置选项, 请参阅 CascaderProps',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large / default / small',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'clearable',
    description: '是否支持清空选项',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'show-all-levels',
    description: '输入框中是否显示选中值的完整路径',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'collapse-tags',
    description: '多选模式下是否折叠Tag',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'collapse-tags-tooltip',
    description:
      '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'separator',
    description: '选项分隔符',
    type: 'string',
    value: '—',
    default: "斜杠' / '"
  },
  {
    name: 'filterable',
    description: '该选项是否可以被搜索',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'filter-method',
    description:
      '自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中',
    type: '(node: CascaderNode, keyword: string) => boolean',
    value: '-',
    default: '-'
  },
  {
    name: 'debounce',
    description: '搜索关键词输入的去抖延迟，毫秒',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'before-filter',
    description:
      '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
    type: '(value: string) => boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'popper-class',
    description: '自定义浮层类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'teleported',
    description: '弹层是否使用 teleport',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'tag-type',
    description: '标签类型',
    type: 'string',
    value: 'success/warning/danger/info',
    default: 'info'
  },
  {
    name: 'tag-effect',
    description: 'tag显示效果',
    type: 'string',
    value: 'light/dark/plain',
    default: 'light'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'max-collapse-tags',
    description: '需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'empty-values',
    description: '组件的空值配置 参考config-provider',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'value-on-clear',
    description: '清空选项的值 参考 config-provider',
    type: 'string/number/boolean/Function',
    value: '—',
    default: '-'
  },
  {
    name: 'persistent',
    description: '当下拉框未被激活并且persistent设置为false，下拉框容器会被删除。',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'fallback-placements',
    description: 'Tooltip 可用的 positions 请查看popper.js 文档',
    type: 'array',
    value: '—',
    default: '-'
  },
  {
    name: 'placement',
    description: '下拉框出现的位置',
    type: 'string',
    value:
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom-start'
  },
  {
    name: 'popper-append-to-body',
    description:
      '是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

const events = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
    parameter: '(value: CascaderValue) => void'
  },
  {
    name: 'expand-change',
    description: '当展开节点发生变化时触发',
    parameter: '(value: CascaderValue) => void'
  },
  {
    name: 'blur',
    description: '当失去焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'focus',
    description: '当获得焦点时触发',
    parameter: '(event: FocusEvent) => void'
  },
  {
    name: 'clear',
    description: '可清空的单选模式下用户点击清空按钮时触发',
    parameter: '() => void'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '(value: boolean) => void'
  },
  {
    name: 'remove-tag',
    description: '在多选模式下，移除Tag时触发',
    parameter: "(value: CascaderNode['valueByOption']) => void"
  }
]

const slots = [
  {
    name: 'default',
    description:
      '自定义备选项的节点内容，参数为 { node: any, data: any }，分别为当前节点的 Node 对象和数据'
  },
  { name: 'empty', description: '无匹配选项时的内容' },
  { name: 'prefix', description: '输入框头部内容' },
  { name: 'suggestion-item', description: '搜索时自定义建议项内容：{ item: CascaderNode }' }
]

const exposes = [
  {
    name: 'getCheckedNodes',
    description: '获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false',
    parameter: '(leafOnly: boolean) => CascaderNode[] | undefined'
  },
  {
    name: 'cascaderPanelRef',
    description: 'cascader 面板的 ref',
    parameter: 'ComputedRef<any>'
  },
  {
    name: 'togglePopperVisible',
    description: '切换 popper 可见状态',
    parameter: '(visible?: boolean) => void'
  },
  {
    name: 'contentRef',
    description: 'cascader 内容的 ref',
    parameter: 'ComputedRef<any>'
  },
  {
    name: 'presentText',
    description: '选中的内容文本',
    parameter: 'ComputedRef<string>'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '(value: boolean) => void'
  },
  {
    name: 'remove-tag',
    description: '在多选模式下，移除Tag时触发',
    parameter: "(value: CascaderNode['valueByOption']) => void"
  }
]

const document = { attributes, events, slots, exposes }

module.exports = document
