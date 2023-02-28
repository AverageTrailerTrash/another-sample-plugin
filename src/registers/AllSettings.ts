
// These are the allowed types for each setting in your plugin.
export interface YourPluginSettingTypes {
    myCoolNameSetting: string;
	myRancidNameSetting: any;
	isRadical: boolean;
	funnySecret: string;
	lastOpenedFilePath: string;
}

// These are the default values for each setting for new users.
export const YourPluginSettingDefaults: YourPluginSettingTypes = {
    myCoolNameSetting: "Dr. Stay Rad",
	myRancidNameSetting: "Dr. Stay Mad",
	isRadical: false,
	funnySecret: "",
	lastOpenedFilePath: ""
}