const attributes = [
  {
    name: 'v-model',
    description: '绑定值',
    type: 'boolean/string/number/array/object',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '绑定值',
    type: 'boolean/string/number/array/object',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: '是否多选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value-key',
    description: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可以清空选项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'collapse-tags',
    description: '多选时是否将选中值按文字的形式展示',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'collapse-tags-tooltip',
    description:
      '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'multiple-limit',
    description:
      'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'name',
    description: 'Select 输入框的原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'autocomplete',
    description: 'Select 输入框的原生 autocomplete 属性',
    type: 'string',
    value: '—',
    default: 'off'
  },
  {
    name: 'placeholder',
    description: '占位符，默认为“Select”',
    type: 'string',
    value: '—',
    default: '请选择'
  },
  {
    name: 'filterable',
    description: '是否可搜索',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-create',
    description: '是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'filter-method',
    description: '自定义搜索方法',
    type: 'function',
    value: '() => void',
    default: '—'
  },
  {
    name: 'remote',
    description: '其中的选项是否从服务器远程加载',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'remote-method',
    description: '自定义远程搜索方法',
    type: 'function',
    value: '() => void',
    default: '—'
  },
  {
    name: 'remote-show-suffix',
    description: '远程搜索方法显示后缀图标',
    type: 'function',
    value: '() => void',
    default: '—'
  },
  {
    name: 'loading',
    description: '是否正在从远程获取数据',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading-text',
    description: '从服务器加载数据时显示的文本，默认为“Loading”',
    type: 'string',
    value: '—',
    default: '加载中'
  },
  {
    name: 'no-match-text',
    description: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data',
    type: 'string',
    value: '—',
    default: '无匹配数据'
  },
  {
    name: 'no-data-text',
    description:
      '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”,也可以使用`slot="empty"`设置',
    type: 'string',
    value: '—',
    default: '无数据'
  },
  {
    name: 'popper-class',
    description: 'Select 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'reserve-keyword',
    description:
      '当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-first-option',
    description: '是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'teleported',
    description: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'append-to',
    description: '下拉框挂载到哪个 DOM 元素',
    type: 'CSSSelector/HTMLElement',
    value: '-',
    default: '-'
  },
  {
    name: 'persistent',
    description: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除。',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'automatic-dropdown',
    description: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'clear-icon',
    description: '自定义清除图标',
    type: 'string/Component',
    value: '-',
    default: 'CircleClose'
  },
  {
    name: 'suffix-icon',
    description: '自定义后缀图标组件',
    type: 'string/Component',
    value: '-',
    default: 'CircleClose'
  },
  {
    name: 'tag-type',
    description: '	标签类型',
    type: 'string',
    value: 'success/info/warning/danger',
    default: 'info'
  },
  {
    name: 'tag-effect',
    description: '标签效果',
    type: 'string',
    value: 'light/dark/plain',
    default: 'light'
  },
  {
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'offset',
    description: '下拉面板偏移量',
    type: 'number',
    value: '-',
    default: '12'
  },
  {
    name: 'show-arrow',
    description: '下拉菜单的内容是否有箭头',
    type: 'boolean',
    value: '-',
    default: 'true'
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
    name: 'fallback-placements',
    description: 'dropdown 可用的 positions 请查看popper.js 文档',
    type: 'array',
    value: '-',
    default: `['bottom-start', 'top-start', 'right', 'left']`
  },
  {
    name: 'max-collapse-tags',
    description: '需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。',
    type: 'number',
    value: '-',
    default: `1`
  },
  {
    name: 'popper-options',
    description: 'popper.js 参数',
    type: 'object',
    value: '-',
    default: `{}`
  },
  {
    name: 'aria-label',
    description: '等价于原生 input aria-label 属性',
    type: 'string',
    value: '-',
    default: `-`
  },
  {
    name: 'empty-values',
    description: '组件的空值配置 参考config-provider',
    type: 'array',
    value: '-',
    default: `-`
  },
  {
    name: 'value-on-clear',
    description: '清空选项的值 参考 config-provider',
    type: 'string/number/boolean/function',
    value: '-',
    default: `-`
  },
  {
    name: 'tabindex',
    description: 'input 的 tabindex',
    type: 'string/number',
    value: '-',
    default: `-`
  }
]

const events = [
  {
    name: 'change',
    description: '选中值发生变化时触发',
    parameter: '`(value: any) => void`'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '`(visible: boolean) => void`'
  },
  {
    name: 'remove-tag',
    description: '多选模式下移除tag时触发',
    parameter: '`(tagValue: any) => void`'
  },
  {
    name: 'clear',
    description: '可清空的单选模式下用户点击清空按钮时触发',
    parameter: '`() => void`'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '`(event: FocusEvent) => void`'
  },
  {
    name: 'popup-scroll',
    description: '下拉滚动时触发',
    parameter: '`(data:{scrollTop: number, scrollLeft: number}) => void`'
  }
]

const slots = [
  { name: 'default', description: 'option 组件列表，子标签OptionGroup/Option' },
  { name: 'header', description: '下拉列表顶部的内容' },
  { name: 'footer', description: '下拉列表底部的内容' },
  { name: 'prefix', description: 'Select 组件头部内容' },
  { name: 'empty', description: '无选项时的列表' },
  { name: 'tag', description: 'select 组件自定义标签内容' },
  { name: 'loading', description: 'select 组件自定义 loading内容' },
  { name: 'label', description: 'select 组件自定义标签内容' }
]

const exposes = [
  { name: 'focus', description: '使选择器的输入框获取焦点', parameter: '`() => void`' },
  {
    name: 'blur',
    description: '使选择器的输入框失去焦点，并隐藏下拉框',
    parameter: '`() => void`'
  },
  {
    name: 'selectedLabel',
    description: '获取当前选中的标签',
    parameter: '`ComputedRef<string \\| string[]>`'
  }
]

const document = { attributes, exposes, events, slots }

module.exports = document
