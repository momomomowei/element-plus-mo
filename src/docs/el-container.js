const attributes = [
  {
    name: 'direction',
    description: '子元素的排列方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: '子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal'
  }
]

const slots = [
  {
    name: 'default',
    description: '自定义默认内容，子标签：Container/Header/Aside/Main/Footer'
  }
]

const document = { attributes, slots }

module.exports = document
