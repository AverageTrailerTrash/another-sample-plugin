import { Notice } from "obsidian";

// This imports any functions you want to be called along with a notice.
import { complexSampleNotice } from "../functions/notices/ComplexSampleNotice"
import { complexSampleNoticeV2 } from "../functions/notices/ComplexSampleNoticeV2"

// Since notices are often short, you can keep most of them directly in this file,
// without having to worry too much about visual clutter.
// But you may want to make a separate file for complex notices with conditionals,
// and instead just call that export function from here.

// The reason you might want to keep notices as modular functions
// is that you can call the same notice from different areas of the code,
// and only have to edit it in one place if you decide it needs some changes.

export function showCoolNotice(){
    new Notice("This is my cool notice! 8)");
}

export function showRancidNotice(){
    new Notice("This is my rancid notice! >(");
}

export function editingMarkdownNotice(){
    new Notice ("You're editing markdown!");
}

export function notEditingMarkdownNotice() {
    new Notice ("You're not editing markdown...");
}

// These examples will show a different notice depending on if the user is focused in a markdown file they 
// are editing or in other parts of the UI.

// This version calls simpler notices. It's best if you may reuse the individual notices in other contexts.    
export function showComplexNotice(){
    complexSampleNotice();
}

// This version returns the resulting text. It's best if you know the text will never be reused individually.
export function showComplexNoticeV2(){
    new Notice (complexSampleNoticeV2());
}