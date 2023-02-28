import { PluginSettingTab, Setting } from "obsidian";
import ModularSamplePlugin from "../../main";

export class SampleSettingTab extends PluginSettingTab {
	myPlugin: ModularSamplePlugin;

	constructor(app: any, myPlugin: ModularSamplePlugin) {
		super(app, myPlugin);
		this.myPlugin = myPlugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl("h2", {text: "Modular Sample Plugin Settings"});
		
		// TODO:
		// FIX THIS SECTION / MAKE IT MODULAR.
		// BUILD, MAKE SURE SETTINGS WORK.

		// This is not the setting itself, but rather the visual display of one.
		// Because it's what the user interacts with, this is where you'll see most settings updated from.
		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It\'s a secret, find it in this plugin\'s data.json.")
			.addText(text => text
				.setPlaceholder("Enter your funniest secret.")
				.setValue(this.myPlugin.YourPluginSettings.funnySecret)
				.onChange(async (value) => {
					console.log("funnySecret: " + value);
					// this updates the plugin object with your new value
					this.myPlugin.YourPluginSettings.funnySecret = value;
					// this saves that value to data.json so other parts of the code can access it
					await this.myPlugin.saveSettings();
				}));
	}
}