module.exports = {
  span: {
    type: '`number`',
    values: [],
    description: '栅格占据的列数',
    default: 24
  },
  offset: {
    type: '`number`',
    values: [],
    description: '栅格左侧的间隔格数',
    default: 0
  },
  push: {
    type: '`number`',
    values: [],
    description: '栅格向右移动格数',
    default: 0
  },
  pull: {
    type: '`number`',
    values: [],
    description: '栅格向左移动格数',
    default: 0
  },
  xs: {
    type: '`number`',
    values: [],
    description: '`<768px` 响应式栅格数或者栅格属性对象',
    default: ''
  },
  sm: {
    type: '`number`',
    values: ['number', `{span?: number, offset?: number, pull?: number, push?: number}`],
    description: '`≥768px` 响应式栅格数或者栅格属性对象',
    default: ''
  },
  md: {
    type: '`number`',
    values: ['number', `{span?: number, offset?: number, pull?: number, push?: number}`],
    description: '`≥992px` 响应式栅格数或者栅格属性对象',
    default: ''
  },
  lg: {
    type: '`number`',
    values: ['number', `{span?: number, offset?: number, pull?: number, push?: number}`],
    description: '`≥1200px` 响应式栅格数或者栅格属性对象',
    default: ''
  },
  xl: {
    type: '`number`',
    values: ['number', `{span?: number, offset?: number, pull?: number, push?: number}`],
    description: '`≥1920px` 响应式栅格数或者栅格属性对象',
    default: ''
  },
  tag: {
    type: '`string`',
    values: ['number', `{span?: number, offset?: number, pull?: number, push?: number}`],
    description: '自定义元素标签',
    default: 'div'
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/layout.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      }
    ]
  }
}
