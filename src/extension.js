const vscode = require('vscode')
const ElementProvider = require('./providers/elementProvider')

function activate(context) {
  const provider = new ElementProvider()

  // 注册补全提供者
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      'vue',
      provider,
      ' ', // 触发字符：空格
      ':', // 触发字符：冒号（用于v-bind简写）
      '"', // 触发字符：双引号（用于属性值补全）
      "''" // 触发字符：单引号（用于属性值补全）
    )
  )

  // 注册悬停提供者
  context.subscriptions.push(vscode.languages.registerHoverProvider('vue', provider))
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
}
