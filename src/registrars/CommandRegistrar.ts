import { Plugin, Editor, MarkdownView } from "obsidian"

// This imports the command functions.
// Remember to import any new ones you add.
import { openSampleModal } from "../functions/commands/OpenSampleModal";
import { sampleEditorCommand } from "../functions/commands/SampleEditorCommand";

// This adds all of the commands we need to register to one function.
export function registerAllCommands(myPlugin: Plugin) {
    
    // This adds a simple command that can be triggered anywhere
    this.addCommand({
        id: "open-sample-modal-simple",
        name: "Open Sample Modal (Simple)",
        callback: () => {
            openSampleModal();
        }
    });

    // This adds a complex command that can check whether the current state of the app allows the execution of the command.
    this.addCommand({
        id: "open-sample-modal-complex",
        name: "Open Sample Modal (Complex)",
        checkCallback: (checking: boolean) => {
            // Conditions to check
            const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (markdownView) {
                // If checking is true, we're simply "checking" if the command can be run,
                // which occurs when the command palette is opened to determine if this command should be shown.

                // If checking is false, then we want to actually perform the operation, i.e. the user has called the command.
                if (!checking) {
                    openSampleModal();
                }
                
                // This command will only show up in Command Palette when the check function returns true
                return true;
            }
        }
    });
    
    // This adds an editor command that can perform operations on the current editor instance.
    this.addCommand({
        id: "sample-editor-command",
        name: "Sample Editor Command",
        editorCallback: (editor: Editor, view: MarkdownView) => {
            sampleEditorCommand(editor, view);
        }
    });
}