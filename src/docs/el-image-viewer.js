const attributes = [
  {
    name: 'url-list',
    description: '用于预览的图片链接列表',
    type: 'string[]',
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
    name: 'hide-on-click-modal',
    description: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview',
    type: 'boolean',
    value: '-',
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
    name: 'hide-on-click-modal',
    description: '是否可以通过点击遮罩层关闭预览',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'teleported',
    description:
      'image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
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
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Image Viewer',
    type: 'boolean',
    value: '—',
    default: 'true'
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
  {
    name: 'close',
    description: '当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发',
    parameter: '`() => void`'
  },
  { name: 'switch', description: '切换图像时触发', parameter: '`(index: number) => void`' },
  { name: 'rotate', description: '旋转图像时触发', parameter: '`(deg: number) => void`' }
]

const exposes = [
  {
    name: 'setActiveItem',
    description: '手动切换图片',
    parameter: '`(index: number) => void`'
  }
]
const document = { attributes, events, exposes }

module.exports = document
