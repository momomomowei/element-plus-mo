module.exports = {
  height: {
    type: ['`string`', '`number`'],
    values: [],
    description: '滚动条高度',
    default: ''
  },
  'max-height': {
    type: ['`string`', '`number`'],
    values: [],
    description: '滚动条最大高度',
    default: ''
  },
  native: {
    type: '`boolean`',
    values: [],
    description: '是否使用原生滚动条样式',
    default: false
  },
  'wrap-style': {
    type: ['`string`', '`CSSSProperties | CSSSProperties[] | string[]`'],
    values: [],
    description: '包裹容器的自定义样式',
    default: ''
  },
  'wrap-class': {
    type: '`string`',
    values: [],
    description: '包裹容器的自定义类名',
    default: ''
  },
  'view-style': {
    type: ['`string`', '`CSSSProperties | CSSSProperties[] | string[]`'],
    values: [],
    description: '视图的自定义样式',
    default: ''
  },
  'view-class': {
    type: '`string`',
    values: [],
    description: '视图的自定义类名',
    default: ''
  },
  noresize: {
    type: '`boolean`',
    values: [],
    description: '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
    default: false
  },
  tag: {
    type: '`string`',
    values: [],
    description: '视图的元素标签',
    default: 'div'
  },
  always: {
    type: '`boolean`',
    values: [],
    description: '滚动条总是显示',
    default: false
  },
  'min-size': {
    type: '`number`',
    values: [],
    description: '滚动条最小尺寸',
    default: 20
  },
  id: {
    type: '`string`',
    values: [],
    description: '视图ID',
    default: ''
  },
  role: {
    type: '`string`',
    values: [],
    description: '视图的角色',
    default: ''
  },
  'aria-label': {
    type: '`string`',
    values: [],
    description: '视图的 aria-label',
    default: ''
  },
  'aria-orientation': {
    type: '`enum`',
    values: [],
    description: '视图的 aria-orientation',
    default: ''
  },
  tabindex: {
    type: ['`number`', '`string`'],
    values: [],
    description: '容器的tabindex',
    default: ''
  },
  __doc: {
    url: 'https://cn.element-plus.org/zh-CN/component/scrollbar.html',
    slots: [
      {
        name: 'default',
        description: '自定义默认内容'
      }
    ],
    events: [
      {
        name: 'scroll',
        description: '当触发滚动事件时，返回滚动的距离',
        type: '`Function: ({ scrollLeft: number, scrollTop: number }) => void`'
      }
    ],
    exposes: [
      {
        name: 'handleScroll',
        description: '触发滚动事件',
        type: '`Function: () => void`'
      },
      {
        name: 'scrollTo',
        description: '滚动到一组特定坐标',
        type: '`Function: (options: ScrollToOptions | number, yCoord?: number) => void`'
      },
      {
        name: 'setScrollTop',
        description: '设置滚动条到顶部的距离',
        type: '`Function: (scrollTop: number) => void`'
      },
      {
        name: 'setScrollLeft',
        description: '设置滚动条到左边的距离',
        type: '`Function: (scrollLeft: number) => void`'
      },
      {
        name: 'update',
        description: '手动更新滚动条状态',
        type: '`Function: () => void`'
      },
      {
        name: 'wrapRef',
        description: '滚动条包裹的 ref 对象',
        type: '`object: Ref<HTMLDivElement>`'
      }
    ]
  }
}
