const attributes = [
  {
    name: 'v-model',
    description: '选中项绑定值',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'model-value',
    description: '选中项绑定值',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'options',
    description: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义.',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'props',
    description: '配置选项, 请参阅 CascaderProps 表',
    type: 'object',
    value: '—',
    default: '—'
  }
]

const events = [
  {
    name: 'change',
    description: '当选中节点变化时触发',
    parameter: '`(value: CascaderValue) => void`'
  },
  {
    name: 'expand-change',
    description: '当展开节点发生变化时触发',
    parameter: '`(value: CascaderNodePathValue) => void`'
  },
  {
    name: 'close',
    description: '面板的关闭事件，提供给 Cascader 以便做更好的判断。',
    parameter: '`() => void`'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
  },
  {
    name: 'empty',
    description: '没有数据时面板的内容。'
  }
]

const exposes = [
  {
    name: 'getCheckedNodes',
    description: '获取选中的节点数组',
    parameter: '`(leafOnly: boolean) => CascaderNode[]`'
  },
  { name: 'clearCheckedNodes', description: '清空选中的节点', parameter: '`() => void`' }
]

const props = [
  {
    name: 'expandTrigger',
    description: '次级菜单的展开方式',
    type: 'string',
    value: 'click / hover',
    default: "'click'"
  },
  {
    name: 'multiple',
    description: '是否多选',
    type: 'boolean',
    value: '-',
    default: false
  },
  {
    name: 'checkStrictly',
    description: '是否严格的遵守父子节点不互相关联',
    type: 'boolean',
    value: '-',
    default: false
  },
  {
    name: 'emitPath',
    description:
      '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
    type: 'boolean',
    value: '-',
    default: true
  },
  {
    name: 'lazy',
    description: '是否动态加载子节点，需与 lazyLoad 方法结合使用',
    type: 'boolean',
    value: '-',
    default: false
  },
  {
    name: 'lazyLoad',
    description: '加载动态数据的方法，仅在 lazy 为 true 时有效',
    type: 'function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
    value: '-',
    default: '-'
  },
  {
    name: 'value',
    description: '指定选项的值为选项对象的某个属性值',
    type: 'string',
    value: '—',
    default: "'value'"
  },
  {
    name: 'label',
    description: '指定选项标签为选项对象的某个属性值',
    type: 'string',
    value: '—',
    default: "'label'"
  },
  {
    name: 'children',
    description: '指定选项的子选项为选项对象的某个属性值',
    type: 'string',
    value: '—',
    default: "'children'"
  },
  {
    name: 'disabled',
    description: '指定选项的禁用为选项对象的某个属性值',
    type: 'string',
    value: '—',
    default: "'disabled'"
  },
  {
    name: 'leaf',
    description: '指定选项的叶子节点的标志位为选项对象的某个属性值',
    type: 'string',
    value: '—',
    default: "'leaf'"
  },
  {
    name: 'hoverThreshold',
    description: 'hover 时展开菜单的灵敏度阈值',
    type: 'number',
    value: '—',
    default: '500'
  }
]

const document = { attributes, events, slots, exposes, props }

module.exports = document
