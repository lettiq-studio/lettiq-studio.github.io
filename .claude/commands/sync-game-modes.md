---
description: Sync game modes from the lettiq Unity project (../lettiq/Src) into the website. Copies new icons, adds missing modes to GAME_MODE_ICONS, and updates gameModes arrays in both i18n files to match the current translations. Use when new modes are added to the app or when en.json / pl.json descriptions change.
---

You are syncing the Lettiq website's game mode data with the Unity source project.

## Source paths (Unity project)

- Icons: `D:/Projects/lettiq/Src/Assets/_Project/Sprites/GameModes/`
- English translations: `D:/Projects/lettiq/Src/Assets/_Project/Resources/Localization/en.json`
- Polish translations: `D:/Projects/lettiq/Src/Assets/_Project/Resources/Localization/pl.json`

## Target paths (website)

- Icons: `D:/Projects/lettiq-studio.github.io/assets/game-modes/`
- Icon registry: `D:/Projects/lettiq-studio.github.io/index.html` — object `GAME_MODE_ICONS`
- English modes: `D:/Projects/lettiq-studio.github.io/i18n/index.en.js` — array `gameModes`
- Polish modes: `D:/Projects/lettiq-studio.github.io/i18n/index.pl.js` — array `gameModes`

## ID mapping rules

Unity translation keys use `modes.{camelCaseId}.name` / `modes.{camelCaseId}.description`.
Website mode IDs are camelCase (same convention), with one exception:

| Unity key prefix | Website id |
|------------------|-----------|
| `modes.languageLearn.*` | `lingua` |
| all others | same camelCase |

Icon filenames follow `{snake_case}_noBg.png` in Unity and are copied as-is to the website.

## Step 1 — Read sources

1. List all `*_noBg.png` files in the Unity icons directory.
2. Read `en.json` — extract all entries whose key matches `modes.*.name` or `modes.*.description`. Build a map: `{ camelCaseId → { name, description } }`.
3. Read `pl.json` — same extraction.

## Step 2 — Read current website state

1. Read `index.html` — extract all keys present in `GAME_MODE_ICONS`.
2. Read `i18n/index.en.js` — extract all `{ id, title, desc }` entries from `gameModes`.
3. Read `i18n/index.pl.js` — same.

## Step 3 — Diff

Compare source vs website for:

- **New modes**: present in Unity translations but missing from website `gameModes`.
- **Changed descriptions**: `modes.X.description` in en.json / pl.json differs from `desc` on the site.
- **Changed titles**: `modes.X.name` differs from `title` on the site.
- **Missing icons**: icon file exists in Unity sprites but not in `assets/game-modes/` or not registered in `GAME_MODE_ICONS`.

Report the diff to the user before making any changes.

## Step 4 — Apply changes

### Icons

For each icon present in Unity but missing from the website assets directory:
```bash
cp "D:/Projects/lettiq/Src/Assets/_Project/Sprites/GameModes/{filename}" \
   "D:/Projects/lettiq-studio.github.io/assets/game-modes/{filename}"
```

### GAME_MODE_ICONS (index.html)

Add missing entries after the last existing entry:
```js
newModeId: 'assets/game-modes/{icon_filename}',
```

### gameModes arrays (i18n files)

For **new modes**: append to the end of the `gameModes` array:
```js
{ id: '{websiteId}', title: '{name from json}', desc: '{description from json}' },
```

For **changed titles or descriptions**: update the existing entry in place.

Preserve all existing formatting and indentation.

## Step 5 — Summary

Report what changed:
- Icons copied (list filenames)
- Entries added to GAME_MODE_ICONS (list ids)
- New modes added to EN gameModes (list ids)
- New modes added to PL gameModes (list ids)
- Descriptions/titles updated (list ids + which language)
- Nothing changed (if fully in sync)
