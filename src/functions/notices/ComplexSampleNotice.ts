import { MarkdownView } from "obsidian";
import { editingMarkdownNotice } from "src/registers/SimpleNotices";
import { notEditingMarkdownNotice } from "src/registers/SimpleNotices";

export function complexSampleNotice() {
    const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (markdownView){
        editingMarkdownNotice();
    } else {
        notEditingMarkdownNotice();
    }
}