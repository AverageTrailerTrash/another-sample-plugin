import { Plugin } from "obsidian"

export function registerAllStatusBarIcons(myPlugin: Plugin) {

    // This adds a status bar item to the bottom of the app. Does not work on mobile apps.
    // You can set a default text now, or later modify them by using
    // yourPluginObject.yourStatusBarIcon.setText("new text here");
    // You may want to drop complex functions for handling these in functions/status_bar.
    const coolStatusBarItem = myPlugin.addStatusBarItem();
    coolStatusBarItem.setText("Cool Status Bar Text");

}