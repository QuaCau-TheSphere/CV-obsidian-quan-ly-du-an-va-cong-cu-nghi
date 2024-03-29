/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => StyleImport
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var FILE_LOCATION = `.obsidian/snippets/style-importer.css`;
var lastUpdated = new Date();
function formatDate(date) {
  return date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hour12: true }).replace(",", "");
}
var DEFAULT_SETTINGS = {
  styleUrl: "",
  updateOnLoad: true
};
var StyleImport = class extends import_obsidian.Plugin {
  // Primary functionality
  async runStyleImport() {
    if (this.settings.styleUrl) {
      let content;
      try {
        content = await (0, import_obsidian.requestUrl)(this.settings.styleUrl);
      } catch (err) {
        new import_obsidian.Notice(`Style Import: Failed to fetch style file "${this.settings.styleUrl}"`);
        return;
      }
      const text = await content.text;
      try {
        await this.app.vault.createFolder(".obsidian/snippets");
      } catch (e) {
      }
      await this.app.vault.adapter.write(FILE_LOCATION, text);
      lastUpdated = new Date();
    }
  }
  async onload() {
    await this.loadSettings();
    if (this.settings.updateOnLoad) {
      await this.runStyleImport();
    }
    this.addSettingTab(new StyleImportSettingTab(this.app, this));
  }
  async onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var StyleImportSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Style URL").setDesc("Enter the URL of the CSS file you want to import. Be sure to include http:// or https://. Example: https://example.com/style.css").addText((text) => text.setPlaceholder("URL").setValue(this.plugin.settings.styleUrl).onChange(async (value) => {
      this.plugin.settings.styleUrl = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Update on load").setDesc("Update the style when the plugin first loads").addToggle((toggle) => toggle.setValue(this.plugin.settings.updateOnLoad).onChange(async (value) => {
      this.plugin.settings.updateOnLoad = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Update style").setDesc(`Last updated: ${formatDate(lastUpdated)}`).addButton((button) => button.setButtonText("Reload").onClick(async () => {
      await this.plugin.runStyleImport();
    }));
  }
};
