const attributes = [
  {
    name: 'v-model',
    description: '选中项绑定值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '选中项绑定值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'data',
    description: 'Transfer 的数据源',
    type: 'array[{ key, label, disabled }]',
    value: '—',
    default: '[ ]'
  },
  {
    name: 'filterable',
    description: '是否可搜索',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'filter-placeholder',
    description: '搜索框占位符',
    type: 'string',
    value: '—',
    default: '请输入搜索内容'
  },
  {
    name: 'filter-method',
    description: '自定义搜索方法',
    type: 'function',
    value: '—',
    default: '—'
  },
  {
    name: 'target-order',
    description:
      '右侧列表元素的排序策略：若为 `original`，则保持与数据源相同的顺序；若为 `push`，则新加入的元素排在最后；若为 `unshift`，则新加入的元素排在最前',
    type: 'string',
    value: 'original / push / unshift',
    default: 'original'
  },
  {
    name: 'titles',
    description: '自定义列表标题',
    type: 'array',
    value: '—',
    default: "['列表 1', '列表 2']"
  },
  {
    name: 'button-texts',
    description: '自定义按钮文案',
    type: 'array',
    value: '—',
    default: '[ ]'
  },
  {
    name: 'render-content',
    description: '自定义数据项渲染函数',
    type: 'function(h, option)',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: '列表顶部勾选状态文案',
    type: 'object{noChecked, hasChecked}',
    value: '—',
    default: "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
  },
  {
    name: 'props',
    description: '数据源的字段别名',
    type: 'object{key, label, disabled}',
    value: '—',
    default: '—'
  },
  {
    name: 'left-default-checked',
    description: '初始状态下左侧列表的已勾选项的 key 数组',
    type: 'array',
    value: '—',
    default: '[ ]'
  },
  {
    name: 'right-default-checked',
    description: '初始状态下右侧列表的已勾选项的 key 数组',
    type: 'array',
    value: '—',
    default: '[ ]'
  },
  {
    name: 'validate-event',
    description: '是否触发表单验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  }
]

const events = [
  {
    name: 'change',
    description: '右侧列表元素变化时触发',
    parameter:
      '`(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void`'
  },
  {
    name: 'left-check-change',
    description: '左侧列表元素被用户选中 / 取消选中时触发',
    parameter: '`(value: TransferKey[], movedKeys?: TransferKey[]) => void`'
  },
  {
    name: 'right-check-change',
    description: '右侧列表元素被用户选中 / 取消选中时触发',
    parameter: '`(value: TransferKey[], movedKeys?: TransferKey[]) => void`'
  }
]

const slots = [
  { name: 'default', description: '自定义数据项的内容， 参数为 { option }' },
  { name: 'left-footer', description: '左侧列表底部的内容' },
  { name: 'right-footer', description: '右侧列表底部的内容' },
  { name: 'left-empty', description: '左侧面板为空或没有数据符合筛选条件时的内容' },
  { name: 'right-empty', description: '右侧面板为空或没有数据符合筛选条件时的内容' }
]

const exposes = [
  {
    name: 'clearQuery',
    description: '清空某个面板的搜索关键词',
    parameter: '`(which: TransferDirection) => void`'
  },
  {
    name: 'leftPanel',
    description: '左侧面板 ref',
    parameter: '`Ref<TransferPanelInstance>`'
  },
  {
    name: 'rightPanel',
    description: '右侧面板 ref',
    parameter: '`Ref<TransferPanelInstance>`'
  }
]

const document = {
  attributes,
  events,
  slots,
  exposes
}

module.exports = document
