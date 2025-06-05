const attributes = [
  {
    name: 'src',
    description: '图片源，同原生',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'fit',
    description:
      '确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)',
    type: 'string',
    value: 'fill/contain/cover/none/scale-down',
    default: '-'
  },
  {
    name: 'hide-on-click-modal',
    description: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'loading',
    description: '浏览器加载图像的策略，和 浏览器原生能力一致',
    type: 'string',
    value: 'eager/lazy',
    default: 'false'
  },
  {
    name: 'lazy',
    description: '是否开启懒加载',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'scroll-container',
    description: '开启懒加载后，监听 scroll 事件的容器',
    type: 'string/HTMLElement',
    value: '—',
    default: '最近一个 overflow 值为 auto 或 scroll 的父元素'
  },
  {
    name: 'alt',
    description: '原生 alt',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'referrer-policy',
    description: '原生 referrerPolicy',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'crossorigin',
    description: '原生属性 crossorigin',
    type: 'string',
    value: 'anonymous/use-credentials',
    default: '-'
  },
  {
    name: 'preview-src-list',
    description: '开启图片预览功能',
    type: 'Array',
    value: '—',
    default: '-'
  },
  {
    name: 'z-index',
    description: '设置图片预览的 z-index',
    type: 'Number',
    value: '—',
    default: '2000'
  },
  {
    name: 'initial-index',
    description: '初始预览图像索引，小于 url-list 的长度',
    type: 'Number',
    value: '—',
    default: '0'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Image Viewer',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'preview-teleported',
    description:
      'image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'infinite',
    description: '是否可以无限循环预览',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'zoom-rate',
    description: '图像查看器缩放事件的缩放速率。',
    type: 'Number',
    value: '—',
    default: '1.2'
  },
  {
    name: 'min-scale',
    description: '图像查看器缩放事件的最小缩放比例',
    type: 'Number',
    value: '—',
    default: '0.2'
  },
  {
    name: 'max-scale',
    description: '图像查看器缩放事件的最大缩放比例',
    type: 'Number',
    value: '—',
    default: '7'
  },
  {
    name: 'show-progress',
    description: '是否在预览图片时显示进度条',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

const events = [
  { name: 'load', description: '图片加载成功触发', parameter: '(e: Event) => void' },
  { name: 'error', description: '图片加载失败触发', parameter: '(e: Event) => void' },
  { name: 'switch', description: '切换图像时触发', parameter: '(index: number) => void' },
  {
    name: 'close',
    description: '当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发',
    parameter: '() => void'
  },
  { name: 'show', description: '当 Viewer 显示时触发', parameter: '() => void' }
]

const slots = [
  { name: 'placeholder', description: '图片未加载的占位内容' },
  { name: 'error', description: '加载失败的内容' },
  { name: 'viewer', description: '当图像预览时自定义内容' },
  {
    name: 'progress',
    description:
      '图片预览时自定义进度条内容 （优先级高于 show-progress 属性）{ activeIndex: number, total: number }'
  },
  { name: 'toolbar', description: '当图像预览时，自定义工具栏内容' }
]

const exposes = [
  {
    name: 'showPreview',
    description: '手动打开大图预览',
    parameter: '() => void'
  }
]
const document = { attributes, events, slots, exposes }

module.exports = document
