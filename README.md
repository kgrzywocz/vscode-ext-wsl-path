# wsl-path

Provides commands to have unix-like paths (with slashes instead of backslashes) in vscode scripts (like `tasks.json`).

## Commands to provide paths (e.g.: `tasks.json`)

`${command:wsl-path.getRelativePath}` return unix-like path to currently open file relative to workspace (like: src/filename.cc).

Example `tasks.json` file:
```
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile current file",
            "type": "shell",
            "command": "gcc ${command:wsl-path.getRelativePath}"
        }
    ]
}
```
