import * as vscode from 'vscode';

export function getRelativePath(uri: vscode.Uri): string {
	var path = vscode.workspace.asRelativePath(uri);
	path = path.replace(/\\/g, '/');
	return path;
}