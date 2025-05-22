const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    'extension.moveToQuickOpen',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) { return; }

      // Seçili metni al ve \\ → \ dönüştür
      const text = editor.document.getText(editor.selection).replace(/\\\\/g, '\\');

      // Quick Open’i önceden doldurulmuş metinle aç
      vscode.commands.executeCommand('workbench.action.quickOpen', text);
    }
  );

  context.subscriptions.push(disposable);
}

exports.activate   = activate;
exports.deactivate = () => {};
