// Exercise 2: User Preferences
// You have an object representing user settings. Some values may be null or undefined. Use ?? to provide default values.

const userSettings = {
  theme: null,
  fontSize: undefined,
  language: "English",
};

const theme = userSettings.theme ?? "Dark";
const fontSize = userSettings.fontSize ?? 16;
const language = userSettings.language ?? "French";

console.log(`Theme: ${theme}, Font Size: ${fontSize}, Language: ${language}`);
