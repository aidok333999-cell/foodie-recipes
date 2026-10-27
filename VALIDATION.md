# Validation record

Validated on 27 October 2026.

- Dependency installation completed successfully (727 packages).
- Expo SDK 54 dependency versions matched `expo/bundledNativeModules.json`.
- `node --test tests/*.test.js`: 4 tests passed, 0 failed.
- `expo export --platform web`: successful production build, 221 modules.
- Browser check of the actual exported React Native Web app: 12 sample recipe cards, horizontal categories, Pasta filter (1 matching recipe), heart toggle, Favorites, full recipe details, Back, required-field error, photo upload, save, edit, My Food and My Recipes.
- Created a recipe through the form using a real uploaded PNG; verified ingredients, steps and all numeric fields in its detail page.
- Edited its name, reloaded the browser, and verified that the edited recipe, uploaded image and existing favorite survived.
- Favorited and deleted the custom recipe using the confirmation dialog; verified My Recipes returned to 0 recipes.
- Native Android/iOS execution and native photo permission dialogs were not tested on physical devices. Android hardware Back is implemented but requires a device check.

The GitHub repository was created as Public in the connected account. Imported successfully through Snack's **Import git repository** command with SDK 54; the Web preview rendered the complete Foodie feed. A `.cjs` test extension initially caused Snack to treat the file as an unsupported asset; using `.js` resolved the import error.

Repository: https://github.com/aidok333999-cell/foodie-recipes

Snack: https://snack.expo.dev/@git/github.com/aidok333999-cell/foodie-recipes
