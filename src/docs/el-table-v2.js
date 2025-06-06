const attributes = [
  {
    name: 'cache',
    description: '为了更好的渲染效果预先多加载的行数',
    type: 'number',
    value: '—',
    default: '2'
  },
  {
    name: 'estimated-row-height',
    description: '渲染动态的单元格的预估高度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'header-class',
    description: 'header 部分的自定义 class 名',
    type: 'string/Function<HeaderClassGetter>',
    value: '—',
    default: '-'
  },
  {
    name: 'header-props',
    description: 'header 部分的自定义 props 名',
    type: 'object/Function<HeaderPropsGetter>',
    value: '—',
    default: '-'
  },
  {
    name: 'header-cell-props',
    description: 'header cell 部分的自定义 props 名',
    type: 'object/Function<HeaderCellPropsGetter>',
    value: '—',
    default: '-'
  },
  {
    name: 'header-height',
    description: 'Header 的高度由height设置。 如果传入数组，它会使 header row 等于数组长度',
    type: 'number/number[]',
    value: '—',
    default: '50'
  },
  {
    name: 'footer-height',
    description: 'Footer 部分的高度，当传入值时，这部分将被计算入 table 的高度里',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'row-class',
    description: 'row wrapper 部分的自定义 class 名',
    type: 'string/Function<RowClassGetter>',
    value: '—',
    default: '—'
  },
  {
    name: 'row-key',
    description: '每行的 key 值，如果不提供，将使用索引 index 代替',
    type: 'string/Symbol/number',
    value: '—',
    default: 'id'
  },
  {
    name: 'row-props',
    description: 'row component 部分的自定义 class 名',
    type: 'object/Function<RowPropsGetter>',
    value: '—',
    default: '-'
  },
  {
    name: 'row-height',
    description: '每行的高度, 用于计算表的总高度',
    type: 'number/number[]',
    value: '—',
    default: '50'
  },
  {
    name: 'row-event-handlers',
    description: '当每行添加了一系列事件处理器时触发',
    type: 'object<RowEventHandlers>',
    value: '—',
    default: '-'
  },
  {
    name: 'cell-props',
    description: '每个单元格 cell 的自定义 props (除了 header cell 以外)',
    type: 'object/Function<CellPropsGetter>',
    value: '—',
    default: '-'
  },
  {
    name: 'columns',
    description: '列 column 的配置数组，配置见下',
    type: 'Column[]',
    value: '—',
    default: '-'
  },
  {
    name: 'data',
    description: '要在表中渲染的数据数组',
    type: 'Data[]',
    value: '—',
    default: '-'
  },
  {
    name: 'data-getter',
    description: '一个自定义方法从数据源获取数据',
    type: 'Function<DataGetter<T>>',
    value: '—',
    default: '-'
  },
  {
    name: 'fixed-data',
    description: '渲染行在表格主内容上方和 header 下方区域的数据',
    type: 'object<Data>',
    value: '—',
    default: '-'
  },
  {
    name: 'expand-column-key',
    description: '列的 key 来标记哪个行可以被展开',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'expanded-row-keys',
    description: '存放行展开状态的 key 的数组，可以和 v-model 搭配使用',
    type: 'KeyType[]',
    value: '—',
    default: '-'
  },
  {
    name: 'default-expanded-row-keys',
    description: '默认展开的行的 key 的数组, 这个数据不是响应式的',
    type: 'KeyType[]',
    value: '—',
    default: '-'
  },
  {
    name: 'class',
    description: '表格的类名称，将应用于表格的全部的三个部分 (左、右、主)',
    type: 'string/array/object',
    value: '—',
    default: '-'
  },
  {
    name: 'fixed',
    description: '单元格宽度是自适应还是固定',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'width',
    description: '表格的宽度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'height',
    description: '表格的高度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'max-height',
    description: '表格的最大高度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'indent-size',
    description: '树形表的水平缩进',
    type: 'number',
    value: '—',
    default: '12'
  },
  {
    name: 'h-scrollbar-size',
    description: '配置表格的水平滚动条大小，防止水平和垂直滚动条重叠',
    type: 'number',
    value: '—',
    default: '6'
  },
  {
    name: 'v-scrollbar-size',
    description: '配置表格的垂直滚动条大小，防止水平和垂直滚动条重叠',
    type: 'number',
    value: '—',
    default: '6'
  },
  {
    name: 'scrollbar-always-on',
    description: '如果开启，滚动条将一直显示，反之只会在鼠标经过时显示',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'sort-by',
    description: '排序方式',
    type: 'object<SortBy>',
    value: '—',
    default: '{}'
  },
  {
    name: 'sort-state',
    description: '多个排序',
    type: 'object<SortState>',
    value: '—',
    default: 'undefined'
  }
]

const props = [
  {
    name: 'align',
    description: '表格单元格内容对齐方式',
    type: 'string',
    value: 'center/right/left',
    default: 'left'
  },
  {
    name: 'class',
    description: '列的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'key',
    description: '唯一标志',
    type: 'string/number/symbol',
    value: '—',
    default: '—'
  },
  {
    name: 'dataKey',
    description: 'data 的唯一标志符',
    type: 'string/number/symbol',
    value: '—',
    default: '—'
  },
  {
    name: 'fixed',
    description: '固定列位置',
    type: 'boolean/left/right',
    value: '—',
    default: 'false'
  },
  {
    name: 'flexGrow',
    description: 'CSS 属性 flex grow, 仅当不是固定表时才生效',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'flexShrink',
    description: 'CSS 属性 flex shrink, 仅当不是固定表时才生效',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'headerClass',
    description: '自定义 header 头部类名',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'hidden',
    description: '此列是否不可见',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'style',
    description: '自定义列单元格的类名，将会与 gird 单元格合并',
    type: 'CSSProperties',
    value: '—',
    default: '-'
  },
  {
    name: 'sortable',
    description: '设置列是否可排序',
    type: 'boolean',
    value: '—',
    default: '-'
  },
  {
    name: 'title',
    description: 'Header 头部单元格中的默认文本',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'maxWidth',
    description: '列的最大宽度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'minWidth',
    description: '列的最小宽度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'width',
    description: '列宽度',
    type: 'number',
    value: '—',
    default: '-'
  },
  {
    name: 'cellRenderer',
    description: '自定义单元格渲染器',
    type: 'VueComponent/(props: CellRenderProps) => VNode',
    value: '—',
    default: '-'
  },
  {
    name: 'headerCellRenderer',
    description: '自定义头部渲染器',
    type: 'VueComponent/(props: HeaderRenderProps) => VNode',
    value: '—',
    default: '-'
  }
]

const events = [
  {
    name: 'column-sort',
    description: '列排序时调用',
    parameter: '`object<ColumnSortParam>`'
  },
  {
    name: 'expanded-rows-change',
    description: '行展开状态改变时触发',
    parameter: '`KeyType[]`'
  },
  {
    name: 'end-reached',
    description: '到达表格末尾时触发。 回调包含剩余距离，它通常是滚动条高度',
    parameter: '`(remainDistance: number) => void`'
  },
  {
    name: 'scroll',
    description: '表格被用户滚动后触发',
    parameter: '`object<ScrollParams>`'
  },
  {
    name: 'rows-rendered',
    description: '当行被渲染后触发',
    parameter: '`object<RowsRenderedParams>`'
  },
  {
    name: 'row-expand',
    description: '点击箭头图标展开/折叠树节点时触发',
    parameter: '`object<RowExpandParams>`'
  }
]

const slots = [
  { name: 'cell', description: '`cell内容，object<CellSlotProps>`' },
  { name: 'header', description: '`header内容，object<HeaderSlotProps>`' },
  { name: 'header-cell', description: '`header-cell内容，object<HeaderCellSlotProps>`' },
  { name: 'row', description: '`row内容，object<RowSlotProps>`' },
  { name: 'footer', description: 'footer内容' },
  { name: 'empty', description: 'empty内容' },
  { name: 'overlay', description: '-' }
]

const exposes = [
  {
    name: 'scrollTo',
    description: '滚动到给定位置',
    parameter: '`(param: {scrollLeft?: number, scrollTop?: number}) => void`'
  },
  {
    name: 'scrollToLeft',
    description: '滚动到给定的水平位置',
    parameter: '`(scrollLeft: number) => void`'
  },
  {
    name: 'scrollToTop',
    description: '滚动到给定的垂直位置',
    parameter: '`(scrollTop: number) => void`'
  },
  {
    name: 'scrollToRow',
    description: '使用给定的滚动策略滚动至指定行',
    parameter: "`(row: number, strategy?: 'center' \\| 'end' \\| 'start' \\| 'smart') => void`"
  }
]

const document = { attributes, props, events, exposes, slots }

module.exports = document
