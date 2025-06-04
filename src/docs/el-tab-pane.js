const attributes = [
  {
    name: 'label',
    description: '选项卡标题',
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
    name: 'name',
    description: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
    type: 'string',
    value: '—',
    default: "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
  },
  {
    name: 'closable',
    description: '标签是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'lazy',
    description: '标签是否延迟渲染',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const document = { attributes }

module.exports = document
