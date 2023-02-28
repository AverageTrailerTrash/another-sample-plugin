import { Plugin } from "obsidian";
import { intervalLog } from "src/functions/intervals/LoggingTest";

// importing functions used by our intervals


// Intervals allow you to execute code at a specified frequency.
export function registerAllIntervals(myPlugin: Plugin) {
    // When registering intervals, this function will automatically clear the interval when the plugin is disabled.

    // logging "I set an interval!" to the console.
    myPlugin.registerInterval(window.setInterval(() => intervalLog(), 5 * 60 * 1000));
}