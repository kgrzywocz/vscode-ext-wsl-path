# wsl-path README

 Linux/Unix/WSL paths for Windows: provide copy paths and variables with slashes instead of backslashes

## Features

### Commands to provide paths in for example `tasks.json`

`${command:wsl-path.getRelativePath}` Provides unix-like path to currently open file relative to workspace. Example `tasks.json` file:
```
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Compile current file",
            "type": "shell",
            "command": "gcc ${command:wsl-path.getRelativePath}
        }
    ]
}
```
## Release Notes

### 1.0.0

Initial release
