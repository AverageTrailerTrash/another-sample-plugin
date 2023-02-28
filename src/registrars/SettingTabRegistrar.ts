import { SampleSettingTab } from "../objects/settings_tabs/SampleSettingTab";
import ModularSamplePlugin from "../main";

export function registerAllSettingTabs(myPlugin: ModularSamplePlugin) {
    myPlugin.addSettingTab(new SampleSettingTab(app, myPlugin));
}