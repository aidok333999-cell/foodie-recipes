# Foodie

A complete React Native / Expo recipe app for Android, iOS and web. No API key or backend is required.

Public repository: https://github.com/aidok333999-cell/foodie-recipes

## Run locally

Install Node.js 20.19+ and run inside this folder:

```sh
npm install
npm run web
```

For a phone, run `npm start` and open the QR code using an Expo Go build compatible with SDK 54. Android builds are available at https://expo.dev/go. An SDK mismatch requires the matching Expo Go build or upgrading with `npx expo install --fix` after changing the Expo SDK. See https://docs.expo.dev/troubleshooting/expo-go-version-mismatch/.

## Publish to GitHub without a terminal

1. Sign into GitHub and open https://github.com/new.
2. Enter `foodie-recipes`, select **Public**, enable **Add a README file**, and create the repository.
3. Choose **Add file → Upload files**. Upload the CONTENTS of this project folder so `App.js`, `package.json`, `app.json`, `data.js` and `model.js` are at the repository root. Include `tests` and the documentation. Do not upload `node_modules`, `dist` or `.expo`.
4. Commit the upload. Copy the actual repository URL from the browser; this is the public link to submit.

Or, with GitHub CLI installed and signed in, run from this folder:

```sh
git init
git add .
git commit -m "Build Foodie recipe app"
gh repo create foodie-recipes --public --source=. --remote=origin --push
```

If that name already exists, choose another name rather than overwriting an existing project.

## Import into Expo Snack

1. Open https://snack.expo.dev and choose **Import Git Repository** from its menu.
2. Paste the actual public GitHub URL created above and import the root folder.
3. Select SDK 54 if needed. Check that `expo-image-picker`, `@react-native-async-storage/async-storage`, `react-native-safe-area-context` and `expo-status-bar` appear in Dependencies with the versions in `package.json`.
4. Run the Web preview, or open on a compatible Expo Go build. Save the Snack to your own Expo account if you also want a persistent Snack share link.

App.js is the Snack entry point. Supporting modules use standard JavaScript; no environment variables or custom native code are required. A live Snack import must be checked after publishing; a local build does not prove that import succeeded.

## Rubric walkthrough

| Task | Where to check |
| --- | --- |
| 1. GitHub import | Follow the Snack import steps above after publishing. |
| 2. Horizontal categories | Explore has All, 12 food categories, and My Food. Swipe the row horizontally. |
| 3. Six recipe detail fields | Open any card: ingredients, instructions, preparation time, servings, calories, difficulty. |
| 4. Category filtering | Select Pasta, Vegan, etc.; each category has a matching seed recipe. |
| 5. Favorite toggle | Tap ♡ on a card or detail screen; tap ♥ to remove it. |
| 6. Favorites | Favorite a recipe, then open Favorites in the bottom bar. |
| 7. My Food / Add | Swipe categories to My Food, then tap Add New Recipe. |
| 8. Recipe form | Enter a name, upload an image, enter ingredients and instructions on separate lines, then Save Recipe. |
| 9. My Recipes | Save opens the full detail page; Back returns to My Recipes with the new card. |
| 10. View and edit | Open a custom recipe, choose Edit Recipe, change any field and save. |
| 11. Delete | Open a custom recipe and choose Delete Recipe; confirm in the dialog. Favorites are cleaned too. |
| 12. Back navigation | Back returns to the preceding view, including the original category/search; Android hardware Back works too. |

The original conversation only contained the rubric through the start of task 9. Tasks 9–12 here follow the requested features: personal recipes, details/edit/delete and navigation.

## Behavior and limitations

- Favorites and custom recipes persist locally through AsyncStorage. They are specific to the device/browser and are not synchronized to an account.
- Uploaded photos are stored as data URIs so they survive browser reloads. Choose a small photo (under about 2 MB); large files are rejected and storage failures are displayed.
- The form validates required fields and positive numbers. Ingredients and instructions use one item/step per line.
- Cancel/Back discards unsaved edits. Deletion requires confirmation. Built-in sample recipes cannot be edited or deleted.
- Sample photos load from Unsplash and need internet access; an image fallback appears if loading fails. Uploaded photos work offline. Nutrition is illustrative.
- Search, category selection, favorite toggles, create, edit and delete operate entirely on-device.

## Validation

```sh
npm test
npm run build:web
```

See `VALIDATION.md` for the checks actually performed for this delivery. Test a real phone's image permission flow separately before submitting screenshots.
