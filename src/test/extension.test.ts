import * as assert from 'assert'; // documentation on https://mochajs.org/
import * as vscode from 'vscode';
import { assertTaskRunSuccessful } from './taskChecker';

suite("Extension Tests: getting paths in tasks.json", function () {
    this.timeout(10000);

    test("Relative Path", function (done) {
        assertTaskRunSuccessful("getRelativePath", done);
    });
});