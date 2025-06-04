const { ExtensionLanguage } = require('../');

const CnDocument = require('./zh-CN');
const EnDocument = require('./en-US');

// 统一导出文档
const localDocument = {
  [ExtensionLanguage.en]: EnDocument,
  [ExtensionLanguage.cn]: CnDocument
};

module.exports = {
  localDocument
}; 