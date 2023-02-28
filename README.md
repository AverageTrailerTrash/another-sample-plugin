# Modular Sample Plugin

This is an alternative sample plugin for [Obsidian MD](https://obsidian.md). 

It is based on [the official sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin), with a few notable differences:

* The code is restructured and spread across multiple files. A modular layout better reflects the way plugin developers are actually setting up their code bases and makes the content less overwhelming to navigate.

* The code uses more descriptive names and additional examples to help clarify what can and can't be customized and in what way.

* In the future, the setup tutorial will be geared towards new developers who may not know how to use the terminal, have the required dependencies, nor have appropriate software for getting started. Though basic coding knowledge is assumed.

I am a new plugin developer myself and am making this because it feels like there is a gap in the available resources, not necessarily because I'm the best person to produce it. 

So if you have any advice about best practices that won't make the development process more overwhelming, or recommendations about file structure etc., feel free to open an Issue or Discussion. Let's chat about it.

**Status**:

Code is ~70% done? 

* Original code is broken down to a useful enough degree that the plugins I'm working on are based off this.

* But there is still a bit more to breakdown, some cleanup needed. 

* I'd like to add more comments and console.debugs() to help beginners notice when things are firing.

Documentation (not in this repo) is more like 25%. 

* I have a general tutorial that's almost done that can be followed with either the original repo or this version.

* However, I don't have any documentation that is specific to this repository.
  
* A video breaking down the code structure and explaining why things work how they do might be nice.

**Notes**: 

* This project uses Typescript to provide type checking and documentation.

* The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

* The Obsidian API is still in early alpha and is subject to change at any time!

## First time developing plugins?

Quick starting guide for new plugin devs, from the original repo:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code. 
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
