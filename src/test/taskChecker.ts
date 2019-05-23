import * as assert from 'assert';
import * as vscode from 'vscode';
import { removeListener } from 'cluster';


export function assertTaskRunSuccessful(taskLabel: string, done: MochaDone) {

    let endTaskDisposables: vscode.Disposable[] = [];
    let validateTaskExitSuccess = (event: vscode.TaskProcessEndEvent) => {
        assert.equal(event.exitCode, 0,
            taskLabel + " is not returning proper values");
        endTaskDisposables[0].dispose();
        done();
    };
    vscode.tasks.onDidEndTaskProcess(validateTaskExitSuccess,
        undefined,
        endTaskDisposables
    );

    vscode.tasks.fetchTasks().then((tasks) => {
        tasks = tasks.filter((task) => { return (task.name === taskLabel); });
        assert.equal(tasks.length, 1,
            "Task: '" + taskLabel + "' is missing or ambiguous");
        vscode.tasks.executeTask(tasks[0]);
    });
}
