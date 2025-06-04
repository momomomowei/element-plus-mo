// 由于JavaScript不支持TypeScript的类型定义，这里我们只导出必要的常量和工具函数

// MapValue类型的简单实现
const createMapValue = (value, mapValue) => ({
  value,
  mapValue
});

module.exports = {
  createMapValue
}; 