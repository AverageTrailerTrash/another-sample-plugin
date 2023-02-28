import { Editor, MarkdownView } from "obsidian";

export function sampleEditorCommand(editor: Editor, view: MarkdownView){
    console.log(editor.getSelection());
    editor.replaceSelection('Sample Editor Command');
}