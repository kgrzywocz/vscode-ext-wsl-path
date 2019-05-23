import * as vscode from 'vscode';

function getActiveDocumentUri(): vscode.Uri | undefined {

	let uri;
	if (vscode.window.activeTextEditor) {
		uri = vscode.window.activeTextEditor.document.uri;
	}
	if (!uri) {
		vscode.window.showErrorMessage('Cannot get path (no file is opened?)');
		return;
	}
	return uri;
}

function registerTaskCommand(context: vscode.ExtensionContext, commandFunction: (uri: vscode.Uri) => string) {
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'wsl-path.' + commandFunction.name,
			function (uri) {
				uri = getActiveDocumentUri();
				if (!uri) { return; }
				return commandFunction(uri);
			}
		)
	);
}

function getRelativePath(uri: vscode.Uri): string {
	var path = vscode.workspace.asRelativePath(uri);
	path = path.replace(/\\/g, '/');
	return path;
}

export function activate(context: vscode.ExtensionContext) {
	registerTaskCommand(context, getRelativePath);
}

export function deactivate() { }
