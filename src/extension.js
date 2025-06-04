const vscode = require('vscode');
const htmlLanguageService = require('vscode-html-languageservice');
const findTagResult = require('./utils/findTagResult');

const { ElementHoverProvier } = require('./hover-tips/element-hover-provider');
const { ElementCompletionItemProvider } = require('./completion/element-completion-item-povider');

function activate(context) {
	console.log('Congratulations, your extension "elementv-snippet" is now active!');

	const languageServiceHtml = htmlLanguageService.getLanguageService();

	vscode.languages.registerDocumentLinkProvider({
		scheme: 'file',
		pattern: '**/*.vue',
	}, {
		provideDocumentLinks(document) {
			const htmlDocument = languageServiceHtml.parseHTMLDocument(document);
			return findTagResult(htmlDocument.roots, [], document, /^el-/);
		}
	});

	// 注册 completion 提示
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
  );

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new ElementHoverProvier()
    )
  );
}

function deactivate() {
	console.log('elementv-snippet is now deactivate~');
}

module.exports = {
  activate,
  deactivate
}; 