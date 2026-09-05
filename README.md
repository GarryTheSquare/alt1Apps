# Alt1 Apps

A small collection of [Alt1 Toolkit](https://runeapps.org/alt1) tools for
RuneScape 3, hosted free at **<https://garrythesquare.github.io/alt1Apps/>**.

Alt1 is a companion overlay for RS3; an Alt1 app is just a webpage it loads and
grants screen-reading rights to. These are hosted on GitHub Pages, so there is
nothing to download — install one and it stays up to date.

## The apps

| App | What it does | |
| --- | --- | --- |
| **[Archaeology Tracker](https://garrythesquare.github.io/alt1Apps/archaeology/)** | Archaeology training guide, artefact tracker, restoration materials and collection overview. | [Add to Alt1](alt1://addapp/https://garrythesquare.github.io/alt1Apps/archaeology/appconfig.json) |
| **[Metronome](https://garrythesquare.github.io/alt1Apps/metronome/)** | A visual metronome to overlay your game window to help with tick manips and npc timings. Based on OSRS Visual metronome plugin | [Add to Alt1](alt1://addapp/https://garrythesquare.github.io/alt1Apps/metronome/appconfig.json) |
| **[Nemi Forest](https://garrythesquare.github.io/alt1Apps/nemiforest/)** | Shows the image from the newest r/NemiForest post. It does currently not check if the status is live though, but this rarely happens for me | [Add to Alt1](alt1://addapp/https://garrythesquare.github.io/alt1Apps/nemiforest/appconfig.json) |
| **[Ritual Materials](https://garrythesquare.github.io/alt1Apps/ritualcalc/)** | Necromancy ritual material calculator — inks, candles, focus objects and sub rituals if making everything from basic mats. | [Add to Alt1](alt1://addapp/https://garrythesquare.github.io/alt1Apps/ritualcalc/appconfig.json) |
| **[Thieving Tables](https://garrythesquare.github.io/alt1Apps/thieving/)** | Searchable list of everything thieving chests, stalls and pickpocketing can get you. | [Add to Alt1](alt1://addapp/https://garrythesquare.github.io/alt1Apps/thieving/appconfig.json) |

## Installing

1. Install [Alt1 Toolkit](https://runeapps.org/alt1) if you haven't.
2. Open <https://garrythesquare.github.io/alt1Apps/> and click **Add to Alt1** next to a tool.
3. Alt1 opens and asks to add the app — accept, and it appears in your app list.

Each app also works as a plain webpage in a browser, minus anything that needs
screen capture.

Your data (checklists, tracked artefacts, settings) is stored in your browser's
local storage. Nothing is uploaded anywhere — there is no server here beyond
static file hosting.

## About this repository

This repo *is* the website: every file is the built output of a private
workspace, committed as-is and served straight off the `main` branch by GitHub
Pages. There is no build step here, and no CI — a new version arrives as a
commit replacing the built files. The bundles are unminified, so the code is
readable as published.

## Credits and licence

The code is MIT licensed (see [LICENSE](LICENSE)).

Game data — drop tables, artefact and material lists, ritual costs — is derived
from the [RuneScape Wiki](https://runescape.wiki/), used under
[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/), and
remains under that licence.

Not affiliated with or endorsed by Jagex, or by RuneApps (who make Alt1).
RuneScape is a trademark of Jagex Ltd.
