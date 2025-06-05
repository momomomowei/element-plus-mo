const attributes = [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'large/default/small',
    default: '—'
  },
  // {
  //   name: 'small',
  //   description: '是否使用小型分页样式',
  //   type: 'boolean',
  //   value: '—',
  //   default: 'false'
  // },
  {
    name: 'background',
    description: '是否为分页按钮添加背景色',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'page-size/v-model:page-size',
    description: '每页显示条目个数',
    type: 'number',
    value: '—',
    default: '10'
  },
  {
    name: 'default-page-size',
    description: '	每页默认的条目个数，不设置时默认为10',
    type: 'number',
    value: '—',
    default: '10'
  },
  {
    name: 'total',
    description: '总条目数',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'page-count',
    description:
      '总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
    type: 'Number',
    value: '—',
    default: '—'
  },
  {
    name: 'pager-count',
    description: '设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠',
    type: 'number',
    value: '大于等于 5 且小于等于 21 的奇数',
    default: '7'
  },
  {
    name: 'current-page/v-model:current-page',
    description: '当前页数，支持 .sync 修饰符',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'default-current-page',
    description: '当前页数的默认初始值，不设置时默认为 1',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'layout',
    description: '组件布局，子组件名用逗号分隔',
    type: 'String',
    value: '`sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot`',
    default: "'prev, pager, next, jumper, ->, total'"
  },
  {
    name: 'page-sizes',
    description: '每页显示个数选择器的选项设置',
    type: 'number[]',
    value: '—',
    default: '[10, 20, 30, 40, 50, 100]'
  },
  {
    name: 'append-size-to',
    description: '下拉框挂载到哪个 DOM 元素',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'popper-class',
    description: '每页显示个数选择器的下拉框类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'prev-text',
    description: '替代图标显示的上一页文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'prev-icon',
    description: '上一页的图标， 比 prev-text 优先级更高',
    type: 'string/Component',
    value: '—',
    default: 'ArrowLeft'
  },
  {
    name: 'next-text',
    description: '替代图标显示的下一页文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'next-icon',
    description: '下一页的图标， 比 next-text 优先级更低',
    type: 'string/Component',
    value: '—',
    default: 'ArrowRight'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'teleported',
    description: '	是否将下拉菜单teleport至 body',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'hide-on-single-page',
    description: '只有一页时是否隐藏',
    type: 'boolean',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'size-change',
    description: 'pageSize 改变时会触发',
    parameter: '(value: number) => void'
  },
  {
    name: 'current-change',
    description: 'currentPage 改变时会触发',
    parameter: '(value: number) => void'
  },
  {
    name: 'change',
    description: 'current-page 或 page-size 更改时触发',
    parameter: '(currentPage: number, pageSize: number) => void'
  },
  {
    name: 'prev-click',
    description: '用户点击上一页按钮改变当前页后触发',
    parameter: '(value: number) => void'
  },
  {
    name: 'next-click',
    description: '用户点击下一页按钮改变当前页后触发',
    parameter: '(value: number) => void'
  }
]

const slots = [{ name: '—', description: '自定义内容，需要在 `layout` 中列出 `slot`' }]

const document = { attributes, events, slots }

module.exports = document
