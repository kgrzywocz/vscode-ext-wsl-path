import * as assert from 'assert'; // documentation on https://mochajs.org/

import * as vscode from 'vscode';
import * as fs from 'fs';


suite("Extension Tests", function () {

    test("Check paths in Tasks", function (done) {
        this.timeout(10000);

        vscode.tasks.onDidEndTaskProcess(function (event: vscode.TaskProcessEndEvent) {
            assert.equal(event.exitCode,0,"Some commands are not returning proper values");
            done();
        }); 

        vscode.tasks.fetchTasks().then((tasks) => {
            vscode.tasks.executeTask(tasks[0]);
        });
    });
});