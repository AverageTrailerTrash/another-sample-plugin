import { Plugin } from "obsidian";

// including all the registrar functions
import { registerAllCommands } from "./registrars/CommandRegistrar"
import { registerAllRibbonIcons } from "./registrars/RibbonIconRegistrar";
import { registerAllSettingTabs as registerAllSettingTabs } from "./registrars/SettingTabRegistrar";
import { registerAllStatusBarIcons } from "./registrars/StatusBarIconRegistrar";
import { registerAllDomEvents } from "./registrars/DomEventRegistrar";
import { registerAllIntervals}  from "./registrars/IntervalRegistrar";

// including all the plugin settings
import { YourPluginSettingTypes } from "./registers/AllSettings";
import { YourPluginSettingDefaults } from "./registers/AllSettings";

// Remember to rename the classes and interfaces to match your plugin 
// and what they are specifically referring to.

export default class ModularSamplePlugin extends Plugin {
	YourPluginSettings: YourPluginSettingTypes;

	async onload() {
		await this.loadSettings();

		// This adds all the plugin's ribbon icons to the plugin object.
		registerAllRibbonIcons(this);

		// This adds all the plugin's status bar icons to the plugin object.
		registerAllStatusBarIcons(this);

		// this adds the plugin's commands to the plugin object
		registerAllCommands(this);

		// This adds a settings tab so the user can configure various aspects of the plugin
		registerAllSettingTabs(this);

		// This adds all the plugin's DOM events to the plugin object.
		registerAllDomEvents(this);
		
		// This adds all the plugin's interval events to the plugin object.
		registerAllIntervals(this);
		
	}

	onunload() {

	}

	async loadSettings() {
		// This loads your defaults into the plugin settings 
		// and replaces any values that were previously set / changed by the user.
		this.YourPluginSettings = Object.assign({}, YourPluginSettingDefaults, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.YourPluginSettings);
	}
}
