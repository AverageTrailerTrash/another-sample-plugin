import { MarkdownView } from "obsidian";

export function complexSampleNoticeV2() {
    const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (markdownView){
        return "You're editing markdown!";
    } else {
        return "You're not editing markdown...";
    }
}