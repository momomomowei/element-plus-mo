const attributes = [
  {
    name: 'data',
    description: '展示数据',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'empty-text',
    description: '内容为空的时候展示的文本',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'props',
    description: '配置选项，具体看下表',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'highlight-current',
    description: '是否高亮当前选中节点，默认值是 false。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-on-click-node',
    description:
      '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'check-on-click-node',
    description: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'check-on-click-leaf',
    description: '点击叶节点(最后一个子节点)时是否检查或取消节点',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'default-expanded-keys',
    description: '默认展开的节点的 key 的数组',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'show-checkbox',
    description: '节点是否可被选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'check-strictly',
    description: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-checked-keys',
    description: '默认勾选的节点的 key 的数组',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'current-node-key',
    description: '当前选中的节点',
    type: 'string, number',
    value: '—',
    default: '—'
  },
  {
    name: 'filter-method',
    description:
      '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
    type: 'Function(value, data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'indent',
    description: '相邻级节点间的水平缩进，单位为像素',
    type: 'number',
    value: '—',
    default: '16'
  },
  {
    name: 'icon',
    description: '自定义树节点的图标',
    type: 'string/Component',
    value: '-',
    default: '-'
  },
  {
    name: 'item-size',
    description: '自定义树节点的高度',
    type: 'number',
    value: '—',
    default: '26'
  }
]

const props = [
  {
    name: 'value',
    description: '每个树节点用来作为唯一标识的属性，在整棵树中应该是唯一的',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '指定节点标签为节点对象的某个属性值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'children',
    description: '指定子树为节点对象的某个属性值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '指定节点选择框是否禁用为节点对象的某个属性值',
    type: 'boolean, function(data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'class',
    description: '自定义节点类名',
    type: 'boolean/function(data, node) => string',
    value: '—',
    default: '—'
  }
]

const exposes = [
  {
    name: 'filter',
    description: '对树节点进行筛选操作',
    parameter: '`(query: string)`'
  },
  {
    name: 'getCheckedNodes',
    description:
      '若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组',
    parameter: '`(leafOnly: boolean)`'
  },
  {
    name: 'getCheckedKeys',
    description:
      '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组',
    parameter: '`(leafOnly: boolean)`'
  },
  {
    name: 'setCheckedKeys',
    description: '	通过 keys 设置目前勾选的节点',
    parameter: '`(keys: TreeKey[])`'
  },
  {
    name: 'setChecked',
    description: '通过 key 设置某个节点的勾选状态',
    parameter: '`(key: TreeKey, checked: boolean)`'
  },
  {
    name: 'setExpandedKeys',
    description: '设置当前展开的节点',
    parameter: '`(keys: TreeKey[])`'
  },
  {
    name: 'getHalfCheckedNodes',
    description:'	如果节点可用被选中 (show-checkbox 为 true), 它将返回当前半选中的节点组成的数组',
    parameter: '-'
  },
  {
    name: 'getHalfCheckedKeys',
    description:'若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组',
    parameter: '-'
  },
  {
    name: 'getCurrentKey',
    description:'	获取当前被选中节点的 key，若没有节点被选中则返回 undefined',
    parameter: '—'
  },
  {
    name: 'getCurrentNode',
    description: '获取当前被选中节点的 data，若没有节点被选中则返回 undefined',
    parameter: '—'
  },
  {
    name: 'setCurrentKey',
    description: '通过 key 设置某个节点的当前选中状态',
    parameter: '`(key: TreeKey)`'
  },
  {
    name: 'getNode',
    description: '通过 key 或 data 获取节点',
    parameter: '`(data: TreeKey \\| TreeNodeData)`'
  },
  {
    name: 'expandNode',
    description: '展开指定节点',
    parameter: '`(node: TreeNode)`'
  },
  {
    name: 'collapseNode',
    description: '折叠指定节点',
    parameter: '`(node: TreeNode)`'
  },
  {
    name: 'setData',
    description: '当数据量非常庞大的时候，总是使用响应式数据将导致性能表现不佳，所以我们提供一种显式设置的方式来避免此种情况',
    parameter: '`(data: TreeData)`'
  },
  {
    name: 'scrollTo',
    description: '滚动到给定位置',
    parameter: '`(offset: number)`'
  },
  {
    name: 'scrollToNode',
    description: '使用给定的滚动策略滚动至指定位置',
    parameter: '`(key: TreeKey, strategy?: auto \\| smart \\| center \\| start \\| end)`'
  }
]

const events = [
  {
    name: 'node-click',
    description: '当节点被点击的时候触发',
    parameter: '`(data: TreeNodeData, node: TreeNode, e: MouseEvent)`'
  },
  {
    name: 'node-drop',
    description: '拖放到节点时触发器',
    parameter: "`(data: TreeNodeData, node: TreeNode, e: DragEvent)`"
  },
  {
    name: 'node-contextmenu',
    description: '当某一节点被鼠标右键点击时会触发该事件',
    parameter: "`(e: Event, data: TreeNodeData, node: TreeNode)`"
  },
  {
    name: 'check-change',
    description: '节点选中状态发生变化时的回调',
    parameter: "`(data: TreeNodeData, checked: boolean)`"
  },
  {
    name: 'check',
    description: '当复选框被点击的时候触发',
    parameter: "`(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})`"
  },
  {
    name: 'current-change',
    description: '当前选中节点变化时触发的事件',
    parameter: '`(data: TreeNodeData, node: TreeNode)`'
  },
  {
    name: 'node-expand',
    description: '节点被展开时触发的事件',
    parameter: "`(data: TreeNodeData, node: TreeNode)`"
  },
  {
    name: 'node-collapse',
    description: '节点被关闭时触发的事件',
    parameter: "`(data: TreeNodeData, node: TreeNode)`"
  }
]

const slots = [
  { name: 'default', description: '自定义树节点的内容。 作用域参数为 { node: TreeNode, data: TreeNodeData }' },
  { name: 'empty', description: '当数据为空时自定义的内容' }
]

const document = { attributes, events, slots, exposes, props }

module.exports = document
