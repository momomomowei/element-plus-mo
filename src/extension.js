const vscode = require('vscode')
const htmlLanguageService = require('vscode-html-languageservice')
const findTagResult = require('./utils/findTagResult')

const { ElementHoverProvider } = require('./utils/element-hover-provider')
const { ElementCompletionItemProvider } = require('./utils/element-completion-item-provider')

function activate(context) {
  console.log('插件启用成功！！！')

  const languageServiceHtml = htmlLanguageService.getLanguageService()

  // 注册 completion（代码补全） 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new ElementCompletionItemProvider(),
      '',
      ' ',
      ':',
      '<',
      '""',
      '=',
      "'",
      '/',
      '@',
      '(',
      '-'
    )
  )

  // 注册 hover（悬停提示） 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new ElementHoverProvider()
    )
  )

  // 注册 文档链接
  context.subscriptions.push(
    vscode.languages.registerDocumentLinkProvider(
      {
        scheme: 'file',
        pattern: '**/*.vue'
      },
      {
        provideDocumentLinks(document) {
          const htmlDocument = languageServiceHtml.parseHTMLDocument(document)
          return findTagResult(htmlDocument.roots, [], document, /^el-/)
        }
      }
    )
  )
}

function deactivate() {
  console.log('插件被禁用了...')
}

module.exports = {
  activate,
  deactivate
}
