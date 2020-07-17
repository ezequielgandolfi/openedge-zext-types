import * as vscode from 'vscode';

export namespace AblSchema {
    export const languageId = 'abl';
    export const documentFilter: vscode.DocumentFilter = { language: languageId, scheme: 'file' };
}