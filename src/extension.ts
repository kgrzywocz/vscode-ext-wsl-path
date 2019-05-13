
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('wsl-path.getRelativePath', function (uri) {

		if (vscode.window.activeTextEditor) {
			uri = vscode.window.activeTextEditor.document.uri;
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path (no file is opened?)');
			return;
		}
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		return path;
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
