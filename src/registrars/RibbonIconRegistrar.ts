import { Plugin } from "obsidian";

// This imports any functions you want to be called in the ribbon.
import { showCoolNotice } from "../registers/SimpleNotices";
import { showRancidNotice } from "../registers/SimpleNotices";
import { showComplexNotice } from "../registers/SimpleNotices";

export function registerAllRibbonIcons(myPlugin: Plugin) {
    
    // This creates an icon in the left ribbon.
    const ribbonIconCoolEl = myPlugin.addRibbonIcon("dice", "Show cool notice!", (evt: MouseEvent) => {
        // Called when the user clicks the icon.
        showCoolNotice();
        // another function, adds a class to the plugin. idk where or why.
        this.addClass("my-plugin-ribbon-class");
    });

    // This creates an icon in the left ribbon.
    const ribbonIconRancidEl = myPlugin.addRibbonIcon("dice", "Show rancid notice, ew.", (evt: MouseEvent) => {
        // Called when the user clicks the icon.
        showRancidNotice();
    });

    // This creates an icon in the left ribbon.
    const ribbonIconComplexEl = myPlugin.addRibbonIcon("dice", "Show complex~ notice!", (evt: MouseEvent) => {
        // Called when the user clicks the icon.
        showComplexNotice();
        this.addClass("my-plugin-ribbon-class");
    });
    
}