import { Plugin } from "obsidian"

export function registerAllDomEvents(myPlugin: Plugin){
    // If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
    // Using this function will automatically remove the event listener when this plugin is disabled.
    
    myPlugin.registerDomEvent(document, "click", (evt: MouseEvent) => {
        console.log("click", evt);
    });

}