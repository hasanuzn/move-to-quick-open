const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('extension.moveToQuickOpen', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.document.getText(editor.selection);

    // Kopyalanan metindeki \\ karakterlerini \ ile değiştir
    const modifiedSelection = selection.replace(/\\\\/g, '\\');

    // Quick Open penceresine metni doğrudan gönder
    vscode.env.clipboard.writeText(modifiedSelection);
    vscode.commands.executeCommand("workbench.action.quickOpen");
    vscode.commands.executeCommand("editor.action.clipboardPasteAction");
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
