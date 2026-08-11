(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["sharp", "canvas", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["thieving"] = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["thieving"] = factory(root["sharp"], root["canvas"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./thieving/data.ts"
/*!**************************!*\
  !*** ./thieving/data.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENTRIES: () => (/* binding */ ENTRIES),
/* harmony export */   SOURCE_DATE: () => (/* binding */ SOURCE_DATE)
/* harmony export */ });
// GENERATED FILE — do not edit by hand.
// Regenerate with: python3 apps/thieving/tools/build-data.py
// Source: runescape.wiki (Thieving, and each entity's own page),
// available under CC BY-NC-SA 3.0.
const SOURCE_DATE = "2026-08-04";
const ENTRIES = [
    {
        "page": "Rogue",
        "name": "Rogue",
        "category": "wilderness",
        "level": "32",
        "xp": "12",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "20",
                        "rarity": "Common",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "40",
                        "rarity": "Rare",
                        "img": "/images/Coins_25.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Adrenaline crystal",
                        "qty": "5–15 (noted)",
                        "rarity": "Very rare",
                        "img": "/images/Adrenaline_crystal.png"
                    },
                    {
                        "item": "Bloodweed seed",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Bloodweed_seed_5.png"
                    },
                    {
                        "item": "Wilderness hilt",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Wilderness_hilt.png"
                    },
                    {
                        "item": "Preserved meat",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Preserved_meat.png"
                    },
                    {
                        "item": "Fremennik equipment patch",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Fremennik_equipment_patch.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (rogue)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28rogue%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Rogue Enforcer",
        "name": "Rogue Enforcer",
        "category": "wilderness",
        "level": "62",
        "xp": "35",
        "stun": "5 ticks (3s)",
        "damage": "200 + 3% of base life points",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "40",
                        "rarity": "Common",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "80",
                        "rarity": "Rare",
                        "img": "/images/Coins_25.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Adrenaline crystal",
                        "qty": "5–15 (noted)",
                        "rarity": "Very rare",
                        "img": "/images/Adrenaline_crystal.png"
                    },
                    {
                        "item": "Bloodweed seed",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Bloodweed_seed_5.png"
                    },
                    {
                        "item": "Wilderness hilt",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Wilderness_hilt.png"
                    },
                    {
                        "item": "Preserved meat",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Preserved_meat.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Rogue Captain",
        "name": "Rogue Captain",
        "category": "wilderness",
        "level": "92",
        "xp": "125",
        "stun": "5 ticks (3s)",
        "damage": "1000 + 3% of base life points",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "60",
                        "rarity": "Common",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "120",
                        "rarity": "Uncommon",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Seeds",
                "drops": [
                    {
                        "item": "Bloodweed seed",
                        "qty": "1",
                        "rarity": "1/500",
                        "img": "/images/Bloodweed_seed_5.png"
                    },
                    {
                        "item": "Dragonfruit seed",
                        "qty": "1–2",
                        "rarity": "1/5,000",
                        "img": "/images/Dragonfruit_seed_5.png"
                    },
                    {
                        "item": "Mango seed",
                        "qty": "1–3",
                        "rarity": "1/1,000",
                        "img": "/images/Mango_seed_5.png"
                    },
                    {
                        "item": "Stinkshroom spore",
                        "qty": "1–3",
                        "rarity": "1/800",
                        "img": "/images/Stinkshroom_spore_5.png"
                    },
                    {
                        "item": "Ciku seed",
                        "qty": "1",
                        "rarity": "1/4,000",
                        "img": "/images/Ciku_seed_5.png"
                    }
                ]
            },
            {
                "group": "",
                "drops": [
                    {
                        "item": "Preserved meat",
                        "qty": "1",
                        "rarity": "1/1,923",
                        "img": "/images/Preserved_meat.png"
                    },
                    {
                        "item": "Fremennik equipment patch",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Fremennik_equipment_patch.png"
                    },
                    {
                        "item": "Ancient warriors' equipment patch",
                        "qty": "1",
                        "rarity": "1/50,000",
                        "img": "/images/Ancient_warriors%27_equipment_patch.png"
                    },
                    {
                        "item": "Adrenaline crystal",
                        "qty": "5–15 (noted)",
                        "rarity": "1/12,500",
                        "img": "/images/Adrenaline_crystal.png"
                    },
                    {
                        "item": "Bloodweed seed",
                        "qty": "1–3",
                        "rarity": "1/12,500",
                        "img": "/images/Bloodweed_seed_5.png"
                    },
                    {
                        "item": "Wilderness hilt",
                        "qty": "1",
                        "rarity": "1/25,000",
                        "img": "/images/Wilderness_hilt.png"
                    },
                    {
                        "item": "Revenant drop enhancer",
                        "qty": "1",
                        "rarity": "1/25,000",
                        "img": "/images/Revenant_drop_enhancer.png"
                    },
                    {
                        "item": "Brawling gloves (Agility)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Agility%29.png"
                    },
                    {
                        "item": "Brawling gloves (Cooking)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Cooking%29.png"
                    },
                    {
                        "item": "Brawling gloves (Fishing)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Fishing%29.png"
                    },
                    {
                        "item": "Brawling gloves (Firemaking)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Firemaking%29.png"
                    },
                    {
                        "item": "Brawling gloves (Hunter)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Hunter%29.png"
                    },
                    {
                        "item": "Brawling gloves (Magic)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Magic%29.png"
                    },
                    {
                        "item": "Brawling gloves (Melee)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Melee%29.png"
                    },
                    {
                        "item": "Brawling gloves (Mining)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Mining%29.png"
                    },
                    {
                        "item": "Brawling gloves (Prayer)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Prayer%29.png"
                    },
                    {
                        "item": "Brawling gloves (Ranged)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Ranged%29.png"
                    },
                    {
                        "item": "Brawling gloves (Smithing)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Smithing%29.png"
                    },
                    {
                        "item": "Brawling gloves (Thieving)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Thieving%29.png"
                    },
                    {
                        "item": "Brawling gloves (Woodcutting)",
                        "qty": "1",
                        "rarity": "1/650,000",
                        "img": "/images/Brawling_gloves_%28Woodcutting%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Waiko islander",
        "name": "Waiko islander",
        "category": "arc",
        "level": "86",
        "xp": "40.5",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Chimes",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Chimes_1.png"
                    },
                    {
                        "item": "Bamboo",
                        "qty": "1 (noted)",
                        "rarity": "1/150",
                        "img": "/images/Bamboo.png"
                    },
                    {
                        "item": "Raw tarpon",
                        "qty": "1 (noted)",
                        "rarity": "1/130",
                        "img": "/images/Raw_tarpon.png"
                    },
                    {
                        "item": "Shell chippings",
                        "qty": "1",
                        "rarity": "1/140",
                        "img": "/images/Shell_chippings.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "~1/4,500",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "~1/4,500",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "~1/4,500",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Cyclops (Cyclosis)",
        "name": "Cyclops (Cyclosis)",
        "category": "arc",
        "level": "88",
        "xp": "42.5",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Chimes",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Chimes_100.png"
                    },
                    {
                        "item": "Positive energy",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Positive_energy.png"
                    },
                    {
                        "item": "Negative energy",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Negative_energy.png"
                    },
                    {
                        "item": "Sea salt",
                        "qty": "1",
                        "rarity": "1/550",
                        "img": "/images/Sea_salt.png"
                    },
                    {
                        "item": "Rumberry seed",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Rumberry_seed.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Trahaearn worker",
        "name": "Trahaearn worker",
        "category": "prifddinas",
        "level": "95",
        "xp": "145",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Trahaearn symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Trahaearn_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Corrupted ore",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Corrupted_ore.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coal stone spirit",
                        "qty": "1",
                        "rarity": "20/128",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "1",
                        "rarity": "10/128",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Adamantite stone spirit",
                        "qty": "1",
                        "rarity": "6/128",
                        "img": "/images/Adamantite_stone_spirit.png"
                    },
                    {
                        "item": "Dwarven stout (m)",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Dwarven_stout_%28m%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "18/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crwys worker",
        "name": "Crwys worker",
        "category": "prifddinas",
        "level": "97",
        "xp": "155",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Crwys symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Crwys_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Maple sapling",
                        "qty": "1",
                        "rarity": "1/8,000",
                        "img": "/images/Maple_sapling.png"
                    },
                    {
                        "item": "Pineapple sapling",
                        "qty": "1",
                        "rarity": "1/8,000",
                        "img": "/images/Pineapple_sapling.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Flax",
                        "qty": "1 (noted)",
                        "rarity": "14/128",
                        "img": "/images/Flax.png"
                    },
                    {
                        "item": "Yew logs",
                        "qty": "1 (noted)",
                        "rarity": "12/128",
                        "img": "/images/Yew_logs.png"
                    },
                    {
                        "item": "Magic logs",
                        "qty": "1",
                        "rarity": "4/128",
                        "img": "/images/Magic_logs.png"
                    },
                    {
                        "item": "Supercompost",
                        "qty": "1 (noted)",
                        "rarity": "8/128",
                        "img": "/images/Supercompost.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "18/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Cadarn worker",
        "name": "Cadarn worker",
        "category": "prifddinas",
        "level": "93",
        "xp": "135",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Cadarn symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Cadarn_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Bowstring",
                        "qty": "1 (noted)",
                        "rarity": "14/128",
                        "img": "/images/Bowstring.png"
                    },
                    {
                        "item": "Unpowered orb",
                        "qty": "1 (noted)",
                        "rarity": "8/128",
                        "img": "/images/Unpowered_orb.png"
                    },
                    {
                        "item": "Super magic potion (1)",
                        "qty": "1 (noted)",
                        "rarity": "6/128",
                        "img": "/images/Super_magic_potion_%281%29.png"
                    },
                    {
                        "item": "Super ranging potion (1)",
                        "qty": "1 (noted)",
                        "rarity": "6/128",
                        "img": "/images/Super_ranging_potion_%281%29.png"
                    },
                    {
                        "item": "Shark",
                        "qty": "1",
                        "rarity": "4/128",
                        "img": "/images/Shark.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "18/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Iorwerth worker",
        "name": "Iorwerth worker",
        "category": "prifddinas",
        "level": "91",
        "xp": "125",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Iorwerth symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Iorwerth_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Adamantite stone spirit",
                        "qty": "1",
                        "rarity": "6/128",
                        "img": "/images/Adamantite_stone_spirit.png"
                    },
                    {
                        "item": "Super attack (1)",
                        "qty": "1 (noted)",
                        "rarity": "10/128",
                        "img": "/images/Super_attack_%281%29.png"
                    },
                    {
                        "item": "Super strength (1)",
                        "qty": "1 (noted)",
                        "rarity": "10/128",
                        "img": "/images/Super_strength_%281%29.png"
                    },
                    {
                        "item": "Super defence (1)",
                        "qty": "1 (noted)",
                        "rarity": "8/128",
                        "img": "/images/Super_defence_%281%29.png"
                    },
                    {
                        "item": "Shark",
                        "qty": "1",
                        "rarity": "4/128",
                        "img": "/images/Shark.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "18/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Hefin worker",
        "name": "Hefin worker",
        "category": "prifddinas",
        "level": "96",
        "xp": "150",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Hefin symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Hefin_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Cleansing crystal",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Cleansing_crystal.png"
                    },
                    {
                        "item": "Hefin course multiplier",
                        "qty": "1",
                        "rarity": "1/512",
                        "img": "/images/Hefin_course_multiplier.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Accursed ashes",
                        "qty": "1 (noted)",
                        "rarity": "12/128",
                        "img": "/images/Accursed_ashes.png"
                    },
                    {
                        "item": "Agility potion (1)",
                        "qty": "1 (noted)",
                        "rarity": "8/128",
                        "img": "/images/Agility_potion_%281%29.png"
                    },
                    {
                        "item": "Super energy (1)",
                        "qty": "1 (noted)",
                        "rarity": "6/128",
                        "img": "/images/Super_energy_%281%29.png"
                    },
                    {
                        "item": "Summer pie",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Summer_pie.png"
                    },
                    {
                        "item": "Dragon bones",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Dragon_bones.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "26/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Amlodd worker",
        "name": "Amlodd worker",
        "category": "prifddinas",
        "level": "94",
        "xp": "140",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Amlodd symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Amlodd_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Truthful shadow core",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Truthful_shadow_core.png"
                    },
                    {
                        "item": "Blissful shadow core",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Blissful_shadow_core.png"
                    },
                    {
                        "item": "Manifest shadow core",
                        "qty": "1",
                        "rarity": "1/6,000",
                        "img": "/images/Manifest_shadow_core.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Gold charm",
                        "qty": "1",
                        "rarity": "6/512",
                        "img": "/images/Gold_charm.png"
                    },
                    {
                        "item": "Green charm",
                        "qty": "1",
                        "rarity": "6/512",
                        "img": "/images/Green_charm.png"
                    },
                    {
                        "item": "Crimson charm",
                        "qty": "1",
                        "rarity": "6/512",
                        "img": "/images/Crimson_charm.png"
                    },
                    {
                        "item": "Blue charm",
                        "qty": "1",
                        "rarity": "6/512",
                        "img": "/images/Blue_charm.png"
                    },
                    {
                        "item": "Radiant energy",
                        "qty": "2–8",
                        "rarity": "12/128",
                        "img": "/images/Radiant_energy_1000.png"
                    },
                    {
                        "item": "Luminous energy",
                        "qty": "2–8",
                        "rarity": "8/128",
                        "img": "/images/Luminous_energy_1000.png"
                    },
                    {
                        "item": "Incandescent energy",
                        "qty": "2–8",
                        "rarity": "6/128",
                        "img": "/images/Incandescent_energy_1000.png"
                    },
                    {
                        "item": "Portent of restoration VIII",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Portent_of_restoration_VIII.png"
                    },
                    {
                        "item": "Portent of restoration IX",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Portent_of_restoration_IX.png"
                    },
                    {
                        "item": "Sign of the porter IV",
                        "qty": "1",
                        "rarity": "4/128",
                        "img": "/images/Sign_of_the_porter_IV.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "16/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Ithell worker",
        "name": "Ithell worker",
        "category": "prifddinas",
        "level": "92",
        "xp": "130",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Ithell symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Ithell_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Crystal weapon seed",
                        "qty": "1",
                        "rarity": "1/6,000",
                        "img": "/images/Crystal_weapon_seed.png"
                    },
                    {
                        "item": "Crystal armour seed",
                        "qty": "1",
                        "rarity": "1/6,000",
                        "img": "/images/Crystal_armour_seed.png"
                    },
                    {
                        "item": "Crystal tool seed",
                        "qty": "1",
                        "rarity": "1/6,000",
                        "img": "/images/Crystal_tool_seed.png"
                    },
                    {
                        "item": "Harmonic dust",
                        "qty": "10",
                        "rarity": "1/1,000",
                        "img": "/images/Harmonic_dust.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Oak plank",
                        "qty": "1 (noted)",
                        "rarity": "10/128",
                        "img": "/images/Oak_plank.png"
                    },
                    {
                        "item": "Soft clay",
                        "qty": "1",
                        "rarity": "12/128",
                        "img": "/images/Soft_clay.png"
                    },
                    {
                        "item": "Soda ash",
                        "qty": "1 (noted)",
                        "rarity": "8/128",
                        "img": "/images/Soda_ash.png"
                    },
                    {
                        "item": "Teak plank",
                        "qty": "1 (noted)",
                        "rarity": "4/128",
                        "img": "/images/Teak_plank.png"
                    },
                    {
                        "item": "Harmonic dust",
                        "qty": "1–5",
                        "rarity": "4/128",
                        "img": "/images/Harmonic_dust.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "18/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Meilyr worker",
        "name": "Meilyr worker",
        "category": "prifddinas",
        "level": "98",
        "xp": "170",
        "loot": [
            {
                "group": "100%",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "135–185",
                        "rarity": "Always",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Meilyr symbol piece",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Meilyr_symbol_piece.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "1/150,000",
                        "img": "/images/Crystal_acorn_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    },
                    {
                        "item": "Prifddinian musician's robe top",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_top.png"
                    },
                    {
                        "item": "Prifddinian musician's robe bottom",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_robe_bottom.png"
                    },
                    {
                        "item": "Prifddinian musician's gloves",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_gloves.png"
                    },
                    {
                        "item": "Prifddinian musician's boots",
                        "qty": "1",
                        "rarity": "1/12,000",
                        "img": "/images/Prifddinian_musician%27s_boots.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/640",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "99/128,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "1/128,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    },
                    {
                        "item": "Dungeoneering token",
                        "qty": "100",
                        "rarity": "1/512",
                        "img": "/images/Dungeoneering_token.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Snape grass",
                        "qty": "1 (noted)",
                        "rarity": "14/128",
                        "img": "/images/Snape_grass.png"
                    },
                    {
                        "item": "Dragon scale dust",
                        "qty": "1",
                        "rarity": "10/128",
                        "img": "/images/Dragon_scale_dust.png"
                    },
                    {
                        "item": "Dungeoneering token",
                        "qty": "10",
                        "rarity": "8/128",
                        "img": "/images/Dungeoneering_token.png"
                    },
                    {
                        "item": "Harmony moss seed",
                        "qty": "1–2",
                        "rarity": "1/128",
                        "img": "/images/Harmony_moss_seed_5.png"
                    },
                    {
                        "item": "Crushed nest",
                        "qty": "1 (noted)",
                        "rarity": "4/128",
                        "img": "/images/Crushed_nest.png"
                    },
                    {
                        "item": "Zamorak's favour (1)",
                        "qty": "1 (noted)",
                        "rarity": "2/128",
                        "img": "/images/Zamorak%27s_favour_%281%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "90–110",
                        "rarity": "44/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "135–165",
                        "rarity": "28/128",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "45–55",
                        "rarity": "17/128",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Man",
        "name": "Man",
        "category": "standard",
        "level": "1",
        "xp": "8.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "11 1",
            "21 11",
            "31 21"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "3; 20",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            },
            {
                "group": "Quest related",
                "drops": [
                    {
                        "item": "Dodgy flyer",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Dodgy_flyer.png"
                    },
                    {
                        "item": "Flame fragment (citizen)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28citizen%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "Man (Lumbridge Market)",
            "Man (East Ardougne)"
        ]
    },
    {
        "page": "Woman",
        "name": "Woman",
        "category": "standard",
        "level": "1",
        "xp": "8.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "11 1",
            "21 11",
            "31 21"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "3; 20",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Dodgy flyer",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Dodgy_flyer.png"
                    },
                    {
                        "item": "Flame fragment (citizen)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28citizen%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "Anja",
            "Drunken man",
            "Hengel",
            "Cuffs",
            "Rusty",
            "Jeff",
            "Foppish Pierre",
            "Pompous merchant",
            "Woman (Lumbridge Market)",
            "Woman (East Ardougne)"
        ]
    },
    {
        "page": "Master Farmer",
        "name": "Master Farmer",
        "category": "standard",
        "level": "38",
        "xp": "43.0",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "48 38",
            "58 48",
            "68 58"
        ],
        "loot": [
            {
                "group": "Coins",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "50–100",
                        "rarity": "695/1,000",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Allotments",
                "drops": [
                    {
                        "item": "Watermelon seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Watermelon_seed_5.png"
                    }
                ]
            },
            {
                "group": "Bushes",
                "drops": [
                    {
                        "item": "Dwellberry seed",
                        "qty": "1",
                        "rarity": "45/1,000",
                        "img": "/images/Dwellberry_seed_5.png"
                    },
                    {
                        "item": "Jangerberry seed",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Jangerberry_seed_5.png"
                    },
                    {
                        "item": "Whiteberry seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Whiteberry_seed_5.png"
                    },
                    {
                        "item": "Poison ivy seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Poison_ivy_seed_5.png"
                    }
                ]
            },
            {
                "group": "Flowers",
                "drops": [
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    }
                ]
            },
            {
                "group": "Fruit trees",
                "drops": [
                    {
                        "item": "Banana tree seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Banana_tree_seed_5.png"
                    },
                    {
                        "item": "Orange tree seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Orange_tree_seed_5.png"
                    },
                    {
                        "item": "Curry tree seed",
                        "qty": "1",
                        "rarity": "6/1,000",
                        "img": "/images/Curry_tree_seed_5.png"
                    },
                    {
                        "item": "Pineapple seed",
                        "qty": "1",
                        "rarity": "4/1,000",
                        "img": "/images/Pineapple_seed_5.png"
                    },
                    {
                        "item": "Papaya tree seed",
                        "qty": "1",
                        "rarity": "4/1,000",
                        "img": "/images/Papaya_tree_seed_5.png"
                    },
                    {
                        "item": "Palm tree seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Palm_tree_seed_5.png"
                    }
                ]
            },
            {
                "group": "Herbs",
                "drops": [
                    {
                        "item": "Ranarr seed",
                        "qty": "1",
                        "rarity": "25/1,000",
                        "img": "/images/Ranarr_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "25/1,000",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Toadflax seed",
                        "qty": "1",
                        "rarity": "15/1,000",
                        "img": "/images/Toadflax_seed_5.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Irit_seed_5.png"
                    },
                    {
                        "item": "Wergali seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Wergali_seed_5.png"
                    },
                    {
                        "item": "Avantoe seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Avantoe_seed_5.png"
                    },
                    {
                        "item": "Kwuarm seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Kwuarm_seed_5.png"
                    },
                    {
                        "item": "Snapdragon seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Snapdragon_seed_5.png"
                    },
                    {
                        "item": "Cadantine seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Cadantine_seed_5.png"
                    }
                ]
            },
            {
                "group": "Hops",
                "drops": [
                    {
                        "item": "Grapevine seed",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Grapevine_seed_2.png"
                    }
                ]
            },
            {
                "group": "Trees",
                "drops": [
                    {
                        "item": "Maple seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Maple_seed_5.png"
                    },
                    {
                        "item": "Yew seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Yew_seed_5.png"
                    }
                ]
            },
            {
                "group": "Special",
                "drops": [
                    {
                        "item": "Bittercap mushroom spore",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Bittercap_mushroom_spore_5.png"
                    },
                    {
                        "item": "Evil turnip seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Evil_turnip_seed_5.png"
                    },
                    {
                        "item": "Cactus seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Cactus_seed_5.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (Master Farmer)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28Master_Farmer%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "Martin the Master Gardener",
            "Master Farmer Lilah",
            "Master Farmer David"
        ]
    },
    {
        "page": "Warrior woman",
        "name": "Warrior woman",
        "category": "standard",
        "level": "25",
        "xp": "26.0",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "multi": [
            "35 25",
            "45 35",
            "55 45"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "18",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "12–48",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (warrior)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28warrior%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Knight of Ardougne",
        "name": "Knight of Ardougne",
        "category": "standard",
        "level": "55",
        "xp": "84.3",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "65 55",
            "75 65",
            "85 75"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "50",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Court_summons.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Paladin",
        "name": "Paladin",
        "category": "standard",
        "level": "70",
        "xp": "106.2",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "80 70",
            "90 80",
            "100 90"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "80",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Chaos rune",
                        "qty": "2",
                        "rarity": "Always",
                        "img": "/images/Chaos_rune.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Court_summons.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Farmer",
        "name": "Farmer",
        "category": "standard",
        "level": "10",
        "xp": "14.5",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "20 10",
            "30 20",
            "40 30"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "20",
                        "rarity": "209/418",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Potato seed",
                        "qty": "1–3",
                        "rarity": "15/418",
                        "img": "/images/Potato_seed_5.png"
                    },
                    {
                        "item": "Onion seed",
                        "qty": "1–3",
                        "rarity": "13/418",
                        "img": "/images/Onion_seed_5.png"
                    },
                    {
                        "item": "Cabbage seed",
                        "qty": "1–3",
                        "rarity": "12/418",
                        "img": "/images/Cabbage_seed_5.png"
                    },
                    {
                        "item": "Tomato seed",
                        "qty": "1–3",
                        "rarity": "9/418",
                        "img": "/images/Tomato_seed_5.png"
                    },
                    {
                        "item": "Sweetcorn seed",
                        "qty": "1–3",
                        "rarity": "7/418",
                        "img": "/images/Sweetcorn_seed_5.png"
                    },
                    {
                        "item": "Strawberry seed",
                        "qty": "1–3",
                        "rarity": "6/418",
                        "img": "/images/Strawberry_seed_5.png"
                    },
                    {
                        "item": "Redberry seed",
                        "qty": "1",
                        "rarity": "5/418",
                        "img": "/images/Redberry_seed_5.png"
                    },
                    {
                        "item": "Cadavaberry seed",
                        "qty": "1",
                        "rarity": "4/418",
                        "img": "/images/Cadavaberry_seed_5.png"
                    },
                    {
                        "item": "Dwellberry seed",
                        "qty": "1",
                        "rarity": "2/418",
                        "img": "/images/Dwellberry_seed_5.png"
                    },
                    {
                        "item": "Marigold seed",
                        "qty": "1",
                        "rarity": "7/418",
                        "img": "/images/Marigold_seed_5.png"
                    },
                    {
                        "item": "Rosemary seed",
                        "qty": "1",
                        "rarity": "5/418",
                        "img": "/images/Rosemary_seed_5.png"
                    },
                    {
                        "item": "Nasturtium seed",
                        "qty": "1",
                        "rarity": "4/418",
                        "img": "/images/Nasturtium_seed_5.png"
                    },
                    {
                        "item": "Woad seed",
                        "qty": "1",
                        "rarity": "4/418",
                        "img": "/images/Woad_seed_5.png"
                    },
                    {
                        "item": "Limpwurt seed",
                        "qty": "1",
                        "rarity": "3/418",
                        "img": "/images/Limpwurt_seed_5.png"
                    },
                    {
                        "item": "Apple tree seed",
                        "qty": "1",
                        "rarity": "3/418",
                        "img": "/images/Apple_tree_seed_5.png"
                    },
                    {
                        "item": "Banana tree seed",
                        "qty": "1",
                        "rarity": "2/418",
                        "img": "/images/Banana_tree_seed_5.png"
                    },
                    {
                        "item": "Orange tree seed",
                        "qty": "1",
                        "rarity": "1/418",
                        "img": "/images/Orange_tree_seed_5.png"
                    },
                    {
                        "item": "Guam seed",
                        "qty": "1",
                        "rarity": "6/418",
                        "img": "/images/Guam_seed_5.png"
                    },
                    {
                        "item": "Marrentill seed",
                        "qty": "1",
                        "rarity": "5/418",
                        "img": "/images/Marrentill_seed_5.png"
                    },
                    {
                        "item": "Tarromin seed",
                        "qty": "1",
                        "rarity": "5/418",
                        "img": "/images/Tarromin_seed_5.png"
                    },
                    {
                        "item": "Harralander seed",
                        "qty": "1",
                        "rarity": "3/418",
                        "img": "/images/Harralander_seed_5.png"
                    },
                    {
                        "item": "Ranarr seed",
                        "qty": "1",
                        "rarity": "2/418",
                        "img": "/images/Ranarr_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "1/418",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Toadflax seed",
                        "qty": "1",
                        "rarity": "1/418",
                        "img": "/images/Toadflax_seed_5.png"
                    },
                    {
                        "item": "Barley seed",
                        "qty": "1–4",
                        "rarity": "17/418",
                        "img": "/images/Barley_seed_5.png"
                    },
                    {
                        "item": "Hammerstone seed",
                        "qty": "1–4",
                        "rarity": "16/418",
                        "img": "/images/Hammerstone_seed_5.png"
                    },
                    {
                        "item": "Asgarnian seed",
                        "qty": "1–4",
                        "rarity": "13/418",
                        "img": "/images/Asgarnian_seed_5.png"
                    },
                    {
                        "item": "Jute seed",
                        "qty": "1–3",
                        "rarity": "9/418",
                        "img": "/images/Jute_seed_5.png"
                    },
                    {
                        "item": "Yanillian seed",
                        "qty": "1–4",
                        "rarity": "10/418",
                        "img": "/images/Yanillian_seed_5.png"
                    },
                    {
                        "item": "Krandorian seed",
                        "qty": "1–4",
                        "rarity": "7/418",
                        "img": "/images/Krandorian_seed_5.png"
                    },
                    {
                        "item": "Wildblood seed",
                        "qty": "1–4",
                        "rarity": "5/418",
                        "img": "/images/Wildblood_seed_5.png"
                    },
                    {
                        "item": "Acorn",
                        "qty": "1",
                        "rarity": "4/418",
                        "img": "/images/Acorn_5.png"
                    },
                    {
                        "item": "Willow seed",
                        "qty": "1",
                        "rarity": "3/418",
                        "img": "/images/Willow_seed_5.png"
                    },
                    {
                        "item": "Wendlewick seed",
                        "qty": "1–2",
                        "rarity": "Unknown",
                        "img": "/images/Wendlewick_seed_5.png"
                    },
                    {
                        "item": "Flame fragment (farmer)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28farmer%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "Farmer (Marigold Farm)",
            "Farmer Sharon",
            "Farmer Rachel"
        ]
    },
    {
        "page": "Hero",
        "name": "Hero",
        "category": "standard",
        "level": "80",
        "xp": "191.3",
        "stun": "5 ticks (3s)",
        "damage": "40 + 3% of base life points",
        "multi": [
            "90 80",
            "100 90",
            "110 100"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "200; 300",
                        "rarity": "105/128",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "2",
                        "rarity": "8/128",
                        "img": "/images/Death_rune.png"
                    },
                    {
                        "item": "Blood rune",
                        "qty": "1",
                        "rarity": "5/128",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Jug of wine",
                        "qty": "1",
                        "rarity": "6/128",
                        "img": "/images/Jug_of_wine.png"
                    },
                    {
                        "item": "Fire orb",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Fire_orb.png"
                    },
                    {
                        "item": "Diamond",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Diamond.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Court_summons.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Menaphite Thug",
        "name": "Menaphite Thug",
        "category": "standard",
        "level": "65",
        "xp": "96.2",
        "stun": "5 ticks (3s)",
        "damage": "50 + 3% of base life points",
        "multi": [
            "75 65",
            "85 75",
            "95 85"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "60",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Narf",
        "name": "Narf",
        "category": "standard",
        "level": "1",
        "xp": "8.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "11 1",
            "21 11",
            "31 21"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "3; 20",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            },
            {
                "group": "Quest item",
                "drops": [
                    {
                        "item": "Dodgy flyer",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Dodgy_flyer.png"
                    },
                    {
                        "item": "Flame fragment (citizen)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28citizen%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Watchman",
        "name": "Watchman",
        "category": "standard",
        "level": "65",
        "xp": "96.2",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "75 65",
            "85 75",
            "95 85"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "60",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Bread",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Bread.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Brigand",
        "name": "Brigand",
        "category": "standard",
        "level": "45",
        "xp": "65.0",
        "stun": "5 ticks (3s)",
        "damage": "50 + 3% of base life points",
        "multi": [
            "55 45",
            "65 55",
            "75 65"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "40",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ],
        "aka": [
            "Lanzig",
            "Agnar",
            "Sassilik",
            "Borrokar",
            "Inga",
            "Freidir",
            "Jennella",
            "Lensa (Rellekka)",
            "Freygerd (Rellekka)",
            "Pontak"
        ]
    },
    {
        "page": "Trader",
        "name": "Trader",
        "category": "standard",
        "level": "90",
        "xp": "389.5",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "100 90",
            "110 100",
            "N/A"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Copper stone spirit",
                        "qty": "1",
                        "rarity": "41/240",
                        "img": "/images/Copper_stone_spirit.png"
                    },
                    {
                        "item": "Tin stone spirit",
                        "qty": "1",
                        "rarity": "16/240",
                        "img": "/images/Tin_stone_spirit.png"
                    },
                    {
                        "item": "Iron stone spirit",
                        "qty": "1",
                        "rarity": "41/240",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Coal stone spirit",
                        "qty": "1",
                        "rarity": "12/240",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Mithril stone spirit",
                        "qty": "1",
                        "rarity": "14/240",
                        "img": "/images/Mithril_stone_spirit.png"
                    },
                    {
                        "item": "Adamantite stone spirit",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Adamantite_stone_spirit.png"
                    },
                    {
                        "item": "Runite stone spirit",
                        "qty": "1",
                        "rarity": "1/240",
                        "img": "/images/Runite_stone_spirit.png"
                    },
                    {
                        "item": "Barberry seed",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Barberry_seed_5.png"
                    },
                    {
                        "item": "Butterfly flower seed",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Butterfly_flower_seed_5.png"
                    },
                    {
                        "item": "Fly trap seed",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Fly_trap_seed_5.png"
                    },
                    {
                        "item": "Prickly pear seed",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Prickly_pear_seed_5.png"
                    },
                    {
                        "item": "Sunchoke seed",
                        "qty": "1",
                        "rarity": "5/240",
                        "img": "/images/Sunchoke_seed_5.png"
                    },
                    {
                        "item": "Potato cactus seed",
                        "qty": "1",
                        "rarity": "4/240",
                        "img": "/images/Potato_cactus_seed_5.png"
                    },
                    {
                        "item": "Reed seed",
                        "qty": "1",
                        "rarity": "6/240",
                        "img": "/images/Reed_seed_5.png"
                    },
                    {
                        "item": "Godly grapevine seed",
                        "qty": "1",
                        "rarity": "2/240",
                        "img": "/images/Godly_grapevine_seed_5.png"
                    },
                    {
                        "item": "Snape grass seed",
                        "qty": "1",
                        "rarity": "3/240",
                        "img": "/images/Snape_grass_seed_5.png"
                    },
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "2/240",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "43/240",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "400",
                        "rarity": "25/240",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "1/480",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Court_summons.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Desert Phoenix",
        "name": "Desert Phoenix",
        "category": "standard",
        "level": "25",
        "xp": "26.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Phoenix feather",
                        "qty": "1; 2",
                        "rarity": "Always",
                        "img": "/images/Phoenix_feather.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Arvel",
        "name": "Arvel",
        "category": "standard",
        "level": "85",
        "xp": "247.3",
        "stun": "5 ticks (3s)",
        "damage": "50 + 3% of base life points",
        "multi": [
            "95 85",
            "105 95",
            "115 105"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "280; 350",
                        "rarity": "82/128",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Nature rune",
                        "qty": "3",
                        "rarity": "5/128",
                        "img": "/images/Nature_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "2",
                        "rarity": "8/128",
                        "img": "/images/Death_rune.png"
                    },
                    {
                        "item": "Jug of wine",
                        "qty": "1",
                        "rarity": "6/128",
                        "img": "/images/Jug_of_wine.png"
                    },
                    {
                        "item": "Fire orb",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Fire_orb.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Diamond",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Diamond.png"
                    },
                    {
                        "item": "Prickly pear seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Prickly_pear_seed_5.png"
                    },
                    {
                        "item": "Sunchoke seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Sunchoke_seed_5.png"
                    },
                    {
                        "item": "Fly trap seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Fly_trap_seed_5.png"
                    },
                    {
                        "item": "Butterfly flower seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Butterfly_flower_seed_5.png"
                    },
                    {
                        "item": "Barberry seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Barberry_seed_5.png"
                    },
                    {
                        "item": "Snape grass seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Snape_grass_seed_5.png"
                    },
                    {
                        "item": "Potato cactus seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Potato_cactus_seed_5.png"
                    },
                    {
                        "item": "Reed seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Reed_seed_5.png"
                    },
                    {
                        "item": "Godly grapevine seed",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Godly_grapevine_seed_5.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 1 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_1.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 2 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_2.png"
                    },
                    {
                        "item": "Crystal triskelion fragment 3 (m)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Crystal_triskelion_fragment_3.png"
                    }
                ]
            }
        ],
        "aka": [
            "Goreu",
            "Lady Ithell",
            "Mawrth",
            "Ysgawyn",
            "Bronwyn"
        ]
    },
    {
        "page": "Gnome",
        "name": "Gnome",
        "category": "standard",
        "level": "75",
        "xp": "138.8",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "85 75",
            "95 85",
            "105 95"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "300",
                        "rarity": "31/128",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Earth rune",
                        "qty": "1",
                        "rarity": "5/128",
                        "img": "/images/Earth_rune.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "1",
                        "rarity": "8/128",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    },
                    {
                        "item": "Sunchoke seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Sunchoke_seed_5.png"
                    },
                    {
                        "item": "Barberry seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Barberry_seed_5.png"
                    },
                    {
                        "item": "Prickly pear seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Prickly_pear_seed_5.png"
                    },
                    {
                        "item": "Butterfly flower seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Butterfly_flower_seed_5.png"
                    },
                    {
                        "item": "Fly trap seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Fly_trap_seed_5.png"
                    },
                    {
                        "item": "Snape grass seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Snape_grass_seed_5.png"
                    },
                    {
                        "item": "Swamp toad",
                        "qty": "1",
                        "rarity": "28/128",
                        "img": "/images/Swamp_toad.png"
                    },
                    {
                        "item": "King worm",
                        "qty": "1",
                        "rarity": "30/128",
                        "img": "/images/King_worm.png"
                    },
                    {
                        "item": "Reed seed",
                        "qty": "1",
                        "rarity": "3/128",
                        "img": "/images/Reed_seed_5.png"
                    },
                    {
                        "item": "Potato cactus seed",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Potato_cactus_seed_5.png"
                    },
                    {
                        "item": "Fire orb",
                        "qty": "1",
                        "rarity": "2/128",
                        "img": "/images/Fire_orb.png"
                    },
                    {
                        "item": "Godly grapevine seed",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Godly_grapevine_seed_5.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Court_summons.png"
                    }
                ]
            }
        ],
        "aka": [
            "Gnome child",
            "Gnome woman"
        ]
    },
    {
        "page": "Ikis Krum",
        "name": "Ikis Krum",
        "category": "standard",
        "level": "1",
        "xp": "8.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "11 1",
            "21 11",
            "31 21"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "3; 20",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Bandit (Pollnivneach)",
        "name": "Bandit (Pollnivneach)",
        "category": "standard",
        "level": "55",
        "xp": "84.3",
        "stun": "5 ticks (3s)",
        "damage": "50 + 3% of base life points",
        "multi": [
            "65 55",
            "75 65",
            "85 75"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "50",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Bandit (Kharidian Desert Bandit Camp)",
        "name": "Bandit (Kharidian Desert Bandit Camp)",
        "category": "standard",
        "level": "53",
        "xp": "79.4",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "63 53",
            "73 63",
            "83 73"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "30",
                        "rarity": "5/7",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Antipoison (1)",
                        "qty": "1",
                        "rarity": "1/7",
                        "img": "/images/Antipoison_%281%29.png"
                    },
                    {
                        "item": "Lockpick",
                        "qty": "1",
                        "rarity": "1/7",
                        "img": "/images/Lockpick.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Court_summons.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "H.A.M. Member (male)",
        "name": "H.A.M. Member",
        "category": "standard",
        "level": "15",
        "xp": "22.2",
        "stun": "5 ticks (3s)",
        "damage": "10-30 life points",
        "multi": [
            "25 15",
            "35 25",
            "45 35"
        ],
        "loot": [
            {
                "group": "H.A.M. robes",
                "drops": [
                    {
                        "item": "H.A.M. hood",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._hood.png"
                    },
                    {
                        "item": "H.A.M. cloak",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._cloak.png"
                    },
                    {
                        "item": "H.A.M. shirt",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._shirt.png"
                    },
                    {
                        "item": "H.A.M. gloves",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._gloves.png"
                    },
                    {
                        "item": "H.A.M. robe",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._robe.png"
                    },
                    {
                        "item": "H.A.M. boots",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._boots.png"
                    },
                    {
                        "item": "H.A.M. logo",
                        "qty": "1",
                        "rarity": "1/63.6",
                        "img": "/images/H.A.M._logo.png"
                    }
                ]
            },
            {
                "group": "Herbs",
                "drops": [
                    {
                        "item": "Grimy guam",
                        "qty": "1",
                        "rarity": "1/31.7",
                        "img": "/images/Grimy_guam.png"
                    },
                    {
                        "item": "Grimy marrentill",
                        "qty": "1",
                        "rarity": "1/76.9",
                        "img": "/images/Grimy_marrentill.png"
                    },
                    {
                        "item": "Grimy tarromin",
                        "qty": "1",
                        "rarity": "1/182",
                        "img": "/images/Grimy_tarromin.png"
                    }
                ]
            },
            {
                "group": "Spirits",
                "drops": [
                    {
                        "item": "Iron stone spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Iron stone spirit",
                        "qty": "1–5",
                        "rarity": "5/100",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Coal stone spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Coal stone spirit",
                        "qty": "1–5",
                        "rarity": "5/100",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Wood spirit",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Wood_spirit.png"
                    },
                    {
                        "item": "Oak wood spirit",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Oak_wood_spirit.png"
                    }
                ]
            },
            {
                "group": "Weapons",
                "drops": [
                    {
                        "item": "Bronze dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Bronze_dagger.png"
                    },
                    {
                        "item": "Bronze off hand dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Bronze_off_hand_dagger.png"
                    },
                    {
                        "item": "Bronze pickaxe",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Bronze_pickaxe.png"
                    },
                    {
                        "item": "Bronze hatchet",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Bronze_hatchet.png"
                    },
                    {
                        "item": "Iron dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Iron_dagger.png"
                    },
                    {
                        "item": "Iron off hand dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Iron_off_hand_dagger.png"
                    },
                    {
                        "item": "Iron pickaxe",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Iron_pickaxe.png"
                    },
                    {
                        "item": "Iron hatchet",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Iron_hatchet.png"
                    },
                    {
                        "item": "Steel dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Steel_dagger.png"
                    },
                    {
                        "item": "Steel off hand dagger",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Steel_off_hand_dagger.png"
                    },
                    {
                        "item": "Steel pickaxe",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Steel_pickaxe.png"
                    },
                    {
                        "item": "Steel hatchet",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Steel_hatchet.png"
                    }
                ]
            },
            {
                "group": "Other",
                "drops": [
                    {
                        "item": "Steel studs",
                        "qty": "1",
                        "rarity": "20/100",
                        "img": "/images/Steel_studs.png"
                    },
                    {
                        "item": "Leather body",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Leather_body.png"
                    },
                    {
                        "item": "Slayer's staff",
                        "qty": "1",
                        "rarity": "1/100",
                        "img": "/images/Slayer%27s_staff.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "2–21",
                        "rarity": "Common",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Anchovies",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Anchovies.png"
                    },
                    {
                        "item": "Raw chicken",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Raw_chicken.png"
                    },
                    {
                        "item": "Logs",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Logs.png"
                    },
                    {
                        "item": "Uncut opal",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Uncut_opal.png"
                    },
                    {
                        "item": "Uncut jade",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Uncut_jade.png"
                    },
                    {
                        "item": "Rusty sword",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Rusty_sword.png"
                    },
                    {
                        "item": "Damaged armour",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Damaged_armour.png"
                    },
                    {
                        "item": "Sealed clue scroll (easy)",
                        "qty": "1",
                        "rarity": "2/100",
                        "img": "/images/Sealed_clue_scroll_%28easy%29.png"
                    },
                    {
                        "item": "Buttons",
                        "qty": "1",
                        "rarity": "5/100",
                        "img": "/images/Buttons.png"
                    },
                    {
                        "item": "Cowhide",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Cowhide.png"
                    },
                    {
                        "item": "Knife",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Knife.png"
                    },
                    {
                        "item": "Needle",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Needle.png"
                    },
                    {
                        "item": "Tinderbox",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Tinderbox.png"
                    },
                    {
                        "item": "Thread",
                        "qty": "1–10",
                        "rarity": "Unknown",
                        "img": "/images/Thread.png"
                    },
                    {
                        "item": "Bronze arrow",
                        "qty": "1–12",
                        "rarity": "Unknown",
                        "img": "/images/Bronze_arrow_5.png"
                    },
                    {
                        "item": "Steel arrow",
                        "qty": "1–13",
                        "rarity": "Unknown",
                        "img": "/images/Steel_arrow_5.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (H.A.M. Member)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28H.A.M._Member%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "H.A.M. Member (female)"
        ]
    },
    {
        "page": "Guard (Varrock)",
        "name": "Guard",
        "category": "standard",
        "level": "40",
        "xp": "46.8",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "multi": [
            "50 40",
            "60 50",
            "70 60"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "30–34",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "30–60",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (guard)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28guard%29.png"
                    }
                ]
            }
        ],
        "aka": [
            "Port Sarim guard",
            "Guard (Edgeville)",
            "Guard (Ardougne)",
            "Guard (Falador)"
        ]
    },
    {
        "page": "Menaphite marketeer",
        "name": "Menaphite marketeer",
        "category": "standard",
        "level": "46",
        "xp": "66.6",
        "stun": "5 ticks (3s)",
        "damage": "40 + 3% of base life points",
        "multi": [
            "56 46",
            "66 56",
            "76 66"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "30",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Menaphite gift offering (small)",
                        "qty": "1",
                        "rarity": "1/300",
                        "img": "/images/Menaphite_gift_offering_%28small%29.png"
                    },
                    {
                        "item": "Kalphite wanderer in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Kalphite_wanderer_in_amber.png"
                    },
                    {
                        "item": "Hornless unicornfly in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Hornless_unicornfly_in_amber.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Gullible tourist",
        "name": "Gullible tourist",
        "category": "standard",
        "level": "1",
        "xp": "29.5",
        "stun": "5 ticks (3s)",
        "damage": "40 + 3% of base life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "30",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Menaphite gift offering (small)",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Menaphite_gift_offering_%28small%29.png"
                    },
                    {
                        "item": "Waikonite",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Waikonite.png"
                    },
                    {
                        "item": "Kalphite wanderer in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Kalphite_wanderer_in_amber.png"
                    },
                    {
                        "item": "Hornless unicornfly in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Hornless_unicornfly_in_amber.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Guard (H.A.M.)",
        "name": "Guard (H.A.M.)",
        "category": "standard",
        "level": "20",
        "xp": "22.2",
        "stun": "5 ticks (3s)",
        "damage": "10-30 life points",
        "multi": [
            "30 20",
            "40 30",
            "50 40"
        ],
        "loot": [
            {
                "group": "H.A.M. robes",
                "drops": [
                    {
                        "item": "H.A.M. hood",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._hood.png"
                    },
                    {
                        "item": "H.A.M. cloak",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._cloak.png"
                    },
                    {
                        "item": "H.A.M. shirt",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._shirt.png"
                    },
                    {
                        "item": "H.A.M. gloves",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._gloves.png"
                    },
                    {
                        "item": "H.A.M. robe",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._robe.png"
                    },
                    {
                        "item": "H.A.M. boots",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._boots.png"
                    },
                    {
                        "item": "H.A.M. logo",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/H.A.M._logo.png"
                    }
                ]
            },
            {
                "group": "Keys",
                "drops": [
                    {
                        "item": "Bronze key (H.A.M.)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_key_%28H.A.M.%29.png"
                    },
                    {
                        "item": "Iron key (H.A.M.)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Iron_key_%28H.A.M.%29.png"
                    },
                    {
                        "item": "Steel key (H.A.M.)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Steel_key_%28H.A.M.%29.png"
                    },
                    {
                        "item": "Silver key (H.A.M.)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Silver_key_%28H.A.M.%29.png"
                    }
                ]
            },
            {
                "group": "Herbs",
                "drops": [
                    {
                        "item": "Grimy guam",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Grimy_guam.png"
                    },
                    {
                        "item": "Grimy marrentill",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Grimy_marrentill.png"
                    },
                    {
                        "item": "Grimy tarromin",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Grimy_tarromin.png"
                    }
                ]
            },
            {
                "group": "Spirits",
                "drops": [
                    {
                        "item": "Iron stone spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Iron stone spirit",
                        "qty": "1–5",
                        "rarity": "Uncommon",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Coal stone spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Coal stone spirit",
                        "qty": "1–5",
                        "rarity": "Uncommon",
                        "img": "/images/Coal_stone_spirit.png"
                    },
                    {
                        "item": "Wood spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Wood_spirit.png"
                    },
                    {
                        "item": "Oak wood spirit",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Oak_wood_spirit.png"
                    }
                ]
            },
            {
                "group": "Weapons",
                "drops": [
                    {
                        "item": "Bronze hatchet",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_hatchet.png"
                    },
                    {
                        "item": "Bronze dagger",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_dagger.png"
                    },
                    {
                        "item": "Bronze off hand dagger",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_off_hand_dagger.png"
                    },
                    {
                        "item": "Bronze pickaxe",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_pickaxe.png"
                    },
                    {
                        "item": "Iron hatchet",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Iron_hatchet.png"
                    },
                    {
                        "item": "Iron dagger",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Iron_dagger.png"
                    },
                    {
                        "item": "Iron off hand dagger",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Iron_off_hand_dagger.png"
                    },
                    {
                        "item": "Iron pickaxe",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Iron_pickaxe.png"
                    },
                    {
                        "item": "Steel hatchet",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Steel_hatchet.png"
                    },
                    {
                        "item": "Steel dagger",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Steel_dagger.png"
                    },
                    {
                        "item": "Steel off hand dagger",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Steel_off_hand_dagger.png"
                    },
                    {
                        "item": "Steel pickaxe",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Steel_pickaxe.png"
                    }
                ]
            },
            {
                "group": "Other",
                "drops": [
                    {
                        "item": "Steel studs",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Steel_studs.png"
                    },
                    {
                        "item": "Leather body",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Leather_body.png"
                    },
                    {
                        "item": "Slayer's staff",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Slayer%27s_staff.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "2–21",
                        "rarity": "Common",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "18–30",
                        "rarity": "Common",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Anchovies",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Anchovies.png"
                    },
                    {
                        "item": "Raw chicken",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Raw_chicken.png"
                    },
                    {
                        "item": "Logs",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Logs.png"
                    },
                    {
                        "item": "Rusty sword",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Rusty_sword.png"
                    },
                    {
                        "item": "Damaged armour",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Damaged_armour.png"
                    },
                    {
                        "item": "Sealed clue scroll (easy)",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Sealed_clue_scroll_%28easy%29.png"
                    },
                    {
                        "item": "Uncut opal",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Uncut_opal.png"
                    },
                    {
                        "item": "Uncut jade",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Uncut_jade.png"
                    },
                    {
                        "item": "Buttons",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Buttons.png"
                    },
                    {
                        "item": "Cowhide",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Cowhide.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Al Kharid warrior",
        "name": "Al Kharid warrior",
        "category": "standard",
        "level": "25",
        "xp": "26.0",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "18",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "12–48",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Court summons",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Court_summons.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (warrior)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28warrior%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Archaeology professor",
        "name": "Archaeology professor",
        "category": "standard",
        "level": "108",
        "xp": "493.5",
        "stun": "5 ticks (3s)",
        "damage": "100 + 3% of base life points",
        "loot": [
            {
                "group": "Common",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "350",
                        "rarity": "736/1,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Chronotes",
                        "qty": "3",
                        "rarity": "175/1,000",
                        "img": "/images/Chronotes.png"
                    },
                    {
                        "item": "Binding contract",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Binding_contract.png"
                    },
                    {
                        "item": "Tetracompass piece (left)",
                        "qty": "1",
                        "rarity": "1/1,000",
                        "img": "/images/Tetracompass_piece_%28left%29.png"
                    },
                    {
                        "item": "Tetracompass piece (right)",
                        "qty": "1",
                        "rarity": "1/1,000",
                        "img": "/images/Tetracompass_piece_%28right%29.png"
                    },
                    {
                        "item": "Tetracompass piece (dial)",
                        "qty": "1",
                        "rarity": "1/1,000",
                        "img": "/images/Tetracompass_piece_%28dial%29.png"
                    },
                    {
                        "item": "Tetracompass piece (needle)",
                        "qty": "1",
                        "rarity": "1/1,000",
                        "img": "/images/Tetracompass_piece_%28needle%29.png"
                    }
                ]
            },
            {
                "group": "Consumable",
                "drops": [
                    {
                        "item": "Hi-spec monocle",
                        "qty": "1",
                        "rarity": "2/4,000",
                        "img": "/images/Hi-spec_monocle.png"
                    },
                    {
                        "item": "Archaeologist's tea",
                        "qty": "1",
                        "rarity": "2/4,000",
                        "img": "/images/Archaeologist%27s_tea.png"
                    },
                    {
                        "item": "Tarpaulin sheet",
                        "qty": "1",
                        "rarity": "2/4,000",
                        "img": "/images/Tarpaulin_sheet.png"
                    },
                    {
                        "item": "Material manual",
                        "qty": "1",
                        "rarity": "2/4,000",
                        "img": "/images/Material_manual.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "75/10,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Cadmium red",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Cadmium_red.png"
                    },
                    {
                        "item": "Chaotic brimstone",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Chaotic_brimstone.png"
                    },
                    {
                        "item": "Demonhide",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Demonhide.png"
                    },
                    {
                        "item": "Eye of Dagon",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Eye_of_Dagon.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Hellfire metal",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Hellfire_metal.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Cobalt blue",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Cobalt_blue.png"
                    },
                    {
                        "item": "Everlight silvthril",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Everlight_silvthril.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Keramos",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Keramos.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Star of Saradomin",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Star_of_Saradomin.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White marble",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/White_marble.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/12,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "75/11,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Aetherium alloy",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Aetherium_alloy.png"
                    },
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Armadylean yellow",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Armadylean_yellow.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Quintessence",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Quintessence.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Stormguard steel",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Stormguard_steel.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Wings of War",
                        "qty": "1",
                        "rarity": "75/14,000",
                        "img": "/images/Wings_of_War.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Malachite green",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Malachite_green.png"
                    },
                    {
                        "item": "Mark of the Kyzaj",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Mark_of_the_Kyzaj.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vulcanised rubber",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Vulcanised_rubber.png"
                    },
                    {
                        "item": "Warforged bronze",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Warforged_bronze.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Yu'biusk clay",
                        "qty": "1",
                        "rarity": "75/13,000",
                        "img": "/images/Yu%27biusk_clay.png"
                    }
                ]
            },
            {
                "group": "Material table",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "75/8,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Nothing",
                        "qty": "N/A",
                        "rarity": "2/2,000",
                        "img": "/images/Nothing.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Venator dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Venator_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Venator light crossbow (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Venator_light_crossbow_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary gladius (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Legionary_gladius_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary square shield (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Legionary_square_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Primis Elementis standard (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Primis_Elementis_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Zaros effigy (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Zaros_effigy_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian training dummy (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Zarosian_training_dummy_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Legatus_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Solem in Umbra' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Solem_in_Umbra%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient timepiece (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Ancient_timepiece_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus pendant (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Legatus_pendant_%28damaged%29.png"
                    },
                    {
                        "item": "'Incite Fear' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Incite_Fear%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex signet ring (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Pontifex_signet_ring_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial mace (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Ceremonial_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Pontifex_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Consensus ad Idem' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Consensus_ad_Idem%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex censer (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Pontifex_censer_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex crozier (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Pontifex_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex mitre (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Pontifex_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "'Exsanguinate' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Exsanguinate%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Necromantic focus (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Necromantic_focus_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian ewer (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Zarosian_ewer_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian stein (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Zarosian_stein_%28damaged%29.png"
                    },
                    {
                        "item": "'Smoke Cloud' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Smoke_Cloud%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Vigorem vial (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Vigorem_vial_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient magic tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Ancient_magic_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "'Animate Dead' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Animate_Dead%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Portable phylactery (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Portable_phylactery_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian hood (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Praetorian_hood_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian robes (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Praetorian_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian staff (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Praetorian_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient globe (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Ancient_globe_%28damaged%29.png"
                    },
                    {
                        "item": "Battle plans (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/Battle_plans_%28damaged%29.png"
                    },
                    {
                        "item": "'Prima Legio' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/34,000",
                        "img": "/images/%27Prima_Legio%27_painting_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Hookah pipe (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Hookah_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Opulent wine goblet (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Opulent_wine_goblet_%28damaged%29.png"
                    },
                    {
                        "item": "Crest of Dagon (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Crest_of_Dagon_%28damaged%29.png"
                    },
                    {
                        "item": "'Disorder' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Disorder%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Imp mask (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Imp_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Lesser demon mask (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Lesser_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Greater demon mask (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Greater_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Order of Dis robes (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Order_of_Dis_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Ritual_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Branding iron (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Branding_iron_%28damaged%29.png"
                    },
                    {
                        "item": "Manacles (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Manacles_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lake of Fire' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27The_Lake_of_Fire%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'Lust' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Lust%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos star (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Chaos_star_%28damaged%29.png"
                    },
                    {
                        "item": "Spiked dog collar (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Spiked_dog_collar_%28damaged%29.png"
                    },
                    {
                        "item": "Larupia trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Larupia_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Lion trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Lion_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "She-wolf trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/She-wolf_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "'Torment' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Torment%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "'Pandemonium' tapestry (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Pandemonium%27_tapestry_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire haladie (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Hellfire_haladie_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire katar (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Hellfire_katar_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire zaghnal (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Hellfire_zaghnal_%28damaged%29.png"
                    },
                    {
                        "item": "'Possession' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Possession%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Trishula (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Trishula_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth piercing (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Tsutsaroth_piercing_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos Elemental trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Chaos_Elemental_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Virius trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Virius_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth helm (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Tsutsaroth_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth pauldron (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Tsutsaroth_pauldron_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth urumi (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Tsutsaroth_urumi_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "'Frying pan' (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Frying_pan%27_%28damaged%29.png"
                    },
                    {
                        "item": "Hallowed lantern (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Hallowed_lantern_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn ornament (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Ceremonial_unicorn_ornament_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn saddle (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Ceremonial_unicorn_saddle_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight harp (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Everlight_harp_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight trumpet (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Everlight_trumpet_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight violin (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Everlight_violin_%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (female)(damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Folded-arm_figurine_%28female%29%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (male)(damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Folded-arm_figurine_%28male%29%28damaged%29.png"
                    },
                    {
                        "item": "Dominion discus (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Dominion_discus_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion javelin (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Dominion_javelin_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion pelte shield (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Dominion_pelte_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Bronze Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Bronze_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Silver Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Silver_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion torch (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Dominion_torch_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative vase (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Decorative_vase_%28damaged%29.png"
                    },
                    {
                        "item": "Kantharos cup (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Kantharos_cup_%28damaged%29.png"
                    },
                    {
                        "item": "Patera bowl (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Patera_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Dominarian device (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Dominarian_device_%28damaged%29.png"
                    },
                    {
                        "item": "Fishing trident (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Fishing_trident_%28damaged%29.png"
                    },
                    {
                        "item": "Amphora (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Rod of Asclepius (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Rod_of_Asclepius_%28damaged%29.png"
                    },
                    {
                        "item": "Kopis dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Kopis_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Xiphos short sword (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Xiphos_short_sword_%28damaged%29.png"
                    },
                    {
                        "item": "'Hallowed Be the Everlight' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27Hallowed_Be_the_Everlight%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lord of Light' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27The_Lord_of_Light%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Pride of Padosan' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27The_Pride_of_Padosan%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Enlightened Soul' scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27The_Enlightened_Soul%27_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "'The Eudoxian Elements' tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/%27The_Eudoxian_Elements%27_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Doru spear (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Doru_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Kontos lance (damaged)",
                        "qty": "1",
                        "rarity": "1/31,000",
                        "img": "/images/Kontos_lance_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Apex cap (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Apex_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Curse tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Curse_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of shadow (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Funerary_urn_of_shadow_%28damaged%29.png"
                    },
                    {
                        "item": "Infula robes (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Infula_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of smoke (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Funerary_urn_of_smoke_%28damaged%29.png"
                    },
                    {
                        "item": "Hand of the Ancients (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Hand_of_the_Ancients_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative amphora (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Decorative_amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of ice (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Funerary_urn_of_ice_%28damaged%29.png"
                    },
                    {
                        "item": "Loarnab rod (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Loarnab_rod_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial armour (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Inquisitor%27s_ceremonial_armour_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial mask (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Inquisitor%27s_ceremonial_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's seal (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Inquisitor%27s_seal_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator helmet (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Gladiator_helmet_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator sword (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Gladiator_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of blood (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Funerary_urn_of_blood_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of miasma (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Funerary_urn_of_miasma_%28damaged%29.png"
                    },
                    {
                        "item": "Model chariot (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/Model_chariot_%28damaged%29.png"
                    },
                    {
                        "item": "'The Serpent's Fall' carving (damaged)",
                        "qty": "1",
                        "rarity": "1/18,000",
                        "img": "/images/%27The_Serpent%27s_Fall%27_carving_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Ikovian gerege (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ikovian_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Toy glider (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Toy_glider_%28damaged%29.png"
                    },
                    {
                        "item": "Toy war golem (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Toy_war_golem_%28damaged%29.png"
                    },
                    {
                        "item": "Avian song-egg player (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Avian_song-egg_player_%28damaged%29.png"
                    },
                    {
                        "item": "Keshik drum (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Keshik_drum_%28damaged%29.png"
                    },
                    {
                        "item": "Morin khuur (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Morin_khuur_%28damaged%29.png"
                    },
                    {
                        "item": "Aviansie dreamcoat (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Aviansie_dreamcoat_%28damaged%29.png"
                    },
                    {
                        "item": "Peacocking parasol (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Peacocking_parasol_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial plume (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ceremonial_plume_%28damaged%29.png"
                    },
                    {
                        "item": "Hawkeye lens multi-vision scope (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Hawkeye_lens_multi-vision_scope_%28damaged%29.png"
                    },
                    {
                        "item": "Talon-3 razor wing (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Talon-3_razor_wing_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype gravimeter (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Prototype_gravimeter_%28damaged%29.png"
                    },
                    {
                        "item": "Songbird recorder (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Songbird_recorder_%28damaged%29.png"
                    },
                    {
                        "item": "Dayguard shield (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Dayguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Stormguard gerege (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Stormguard_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Golem heart (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Golem_heart_%28damaged%29.png"
                    },
                    {
                        "item": "Golem instruction (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Golem_instruction_%28damaged%29.png"
                    },
                    {
                        "item": "Blackfire lance (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Blackfire_lance_%28damaged%29.png"
                    },
                    {
                        "item": "Nightguard shield (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Nightguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Flat cap (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Flat_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Night owl flight goggles (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Night_owl_flight_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godbow (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Prototype_godbow_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godstaff (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Prototype_godstaff_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godsword (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Prototype_godsword_%28damaged%29.png"
                    },
                    {
                        "item": "Chuluu stone (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Chuluu_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Quintessence counter (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Quintessence_counter_%28damaged%29.png"
                    },
                    {
                        "item": "Spherical astrolabe (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Spherical_astrolabe_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Castle gatestone (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Castle_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Engraved ring of kinship (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Engraved_ring_of_kinship_%28damaged%29.png"
                    },
                    {
                        "item": "Exploratory totem (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Exploratory_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Excavator portal mine (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Excavator_portal_mine_%28damaged%29.png"
                    },
                    {
                        "item": "Storage totem (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Storage_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Plant seed satchel (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Plant_seed_satchel_%28damaged%29.png"
                    },
                    {
                        "item": "Snuff box (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Snuff_box_%28damaged%29.png"
                    },
                    {
                        "item": "Spent summoning charm (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Spent_summoning_charm_%28damaged%29.png"
                    },
                    {
                        "item": "'Friendship bracelet' (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/%27Friendship_bracelet%27_%28damaged%29.png"
                    },
                    {
                        "item": "Homely totem (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Homely_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Projection attuner (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Projection_attuner_%28damaged%29.png"
                    },
                    {
                        "item": "Golden projection 'needle' (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Golden_projection_%27needle%27_%28damaged%29.png"
                    },
                    {
                        "item": "Comfort gatestone (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Comfort_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Halak's cube (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Halak%27s_cube_%28damaged%29.png"
                    },
                    {
                        "item": "Portable portal generator (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Portable_portal_generator_%28damaged%29.png"
                    },
                    {
                        "item": "Warped trinket (damaged)",
                        "qty": "1",
                        "rarity": "1/16,000",
                        "img": "/images/Warped_trinket_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Ekeleshuun blinder mask (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ekeleshuun_blinder_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Narogoshuun 'Hob-da-Gob' ball (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Narogoshuun_%27Hob-da-Gob%27_ball_%28damaged%29.png"
                    },
                    {
                        "item": "Rekeshuun war tether (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Rekeshuun_war_tether_%28damaged%29.png"
                    },
                    {
                        "item": "Ogre Kyzaj axe (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ogre_Kyzaj_axe_%28damaged%29.png"
                    },
                    {
                        "item": "Ork cleaver sword (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ork_cleaver_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Thorobshuun battle standard (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Thorobshuun_battle_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Yurkolgokh stink grenade (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Yurkolgokh_stink_grenade_%28damaged%29.png"
                    },
                    {
                        "item": "High priest crozier (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/High_priest_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "High priest mitre (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/High_priest_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "High priest orb (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/High_priest_orb_%28damaged%29.png"
                    },
                    {
                        "item": "Beastkeeper helm (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Beastkeeper_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Idithuun horn ring (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Idithuun_horn_ring_%28damaged%29.png"
                    },
                    {
                        "item": "'Nosorog!' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/%27Nosorog%21%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg megahitter (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ourg_megahitter_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg tower/goblin cower shield (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Ourg_tower-goblin_cower_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Garagorshuun anchor (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Garagorshuun_anchor_%28damaged%29.png"
                    },
                    {
                        "item": "'Forged in War' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/%27Forged_in_War%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Dorgeshuun spear (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Dorgeshuun_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Huzamogaarb chaos crown (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Huzamogaarb_chaos_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Saragorgak star crown (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Saragorgak_star_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Drogokishuun hook sword (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Drogokishuun_hook_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Hobgoblin mansticker (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Hobgoblin_mansticker_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra chieftain crown (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Kal-i-kra_chieftain_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra mace (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Kal-i-kra_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra warhorn (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Kal-i-kra_warhorn_%28damaged%29.png"
                    },
                    {
                        "item": "'Da Boss Man' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/%27Da_Boss_Man%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Horogothgar cooking pot (damaged)",
                        "qty": "1",
                        "rarity": "1/27,000",
                        "img": "/images/Horogothgar_cooking_pot_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Pasaha (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Pasaha_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual bell (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Ritual_bell_%28damaged%29.png"
                    },
                    {
                        "item": "Kilaya (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Kilaya_%28damaged%29.png"
                    },
                    {
                        "item": "Vazara (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Vazara_%28damaged%29.png"
                    },
                    {
                        "item": "Death mask (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Death_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin calendar (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Dragonkin_calendar_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin staff (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Dragonkin_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon scalpel (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Dragon_scalpel_%28damaged%29.png"
                    },
                    {
                        "item": "Protective goggles (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Protective_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon burner (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Dragon_burner_%28damaged%29.png"
                    },
                    {
                        "item": "Orthenglass flask (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Orthenglass_flask_%28damaged%29.png"
                    },
                    {
                        "item": "Meditation pipe (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Meditation_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Personal totem (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Personal_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Singing bowl (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Singing_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Lingam stone (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Lingam_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Master control (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Master_control_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo hard hat (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Xolo_hard_hat_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo pickaxe (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Xolo_pickaxe_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo shield (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Xolo_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo spear (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Xolo_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Gold dish (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/Gold_dish_%28damaged%29.png"
                    },
                    {
                        "item": "'Raksha' idol (damaged)",
                        "qty": "1",
                        "rarity": "1/22,000",
                        "img": "/images/%27Raksha%27_idol_%28damaged%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Cave goblin (Dorgesh-Kaan)",
        "name": "Cave goblin (Dorgesh-Kaan)",
        "category": "standard",
        "level": "36",
        "xp": "40.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "46 36",
            "56 46",
            "66 56"
        ],
        "loot": [
            {
                "group": "Food",
                "drops": [
                    {
                        "item": "Bat shish",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Bat_shish.png"
                    },
                    {
                        "item": "Coated frogs' legs",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Coated_frogs%27_legs.png"
                    },
                    {
                        "item": "Fingers",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Fingers.png"
                    },
                    {
                        "item": "Frogburger",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Frogburger.png"
                    },
                    {
                        "item": "Frogspawn gumbo",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Frogspawn_gumbo.png"
                    },
                    {
                        "item": "Green gloop soup",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Green_gloop_soup.png"
                    }
                ]
            },
            {
                "group": "Other",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "10–50",
                        "rarity": "7/20",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Bullseye lantern (oil)",
                        "qty": "1",
                        "rarity": "2/20",
                        "img": "/images/Bullseye_lantern_%28oil%29.png"
                    },
                    {
                        "item": "Cave goblin wire",
                        "qty": "1",
                        "rarity": "2/20",
                        "img": "/images/Cave_goblin_wire.png"
                    },
                    {
                        "item": "Iron stone spirit",
                        "qty": "2–8",
                        "rarity": "1/20",
                        "img": "/images/Iron_stone_spirit.png"
                    },
                    {
                        "item": "Swamp tar",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Swamp_tar.png"
                    },
                    {
                        "item": "Tinderbox",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Tinderbox.png"
                    },
                    {
                        "item": "Oil lantern (oil)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Oil_lantern_%28oil%29.png"
                    },
                    {
                        "item": "Unlit torch",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Unlit_torch.png"
                    }
                ]
            },
            {
                "group": "Quest items",
                "drops": [
                    {
                        "item": "Flame fragment (cave goblin)",
                        "qty": "1",
                        "rarity": "32/128",
                        "img": "/images/Flame_fragment_%28cave_goblin%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Druid (Garden of Kharid)",
        "name": "Druid (Garden of Kharid)",
        "category": "standard",
        "level": "42",
        "xp": "58.0",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "multi": [
            "52 42",
            "62 52",
            "72 62"
        ],
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Crux Eqal hood",
                        "qty": "1",
                        "rarity": "1/3,333",
                        "img": "/images/Crux_Eqal_hood.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "40–60",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Elemental anima stone",
                        "qty": "4–6",
                        "rarity": "3,018/21,696",
                        "img": "/images/Elemental_anima_stone.png"
                    },
                    {
                        "item": "Catalytic anima stone",
                        "qty": "1–2",
                        "rarity": "1,427/21,696",
                        "img": "/images/Catalytic_anima_stone.png"
                    },
                    {
                        "item": "Sand seed",
                        "qty": "1",
                        "rarity": "100/21,696",
                        "img": "/images/Sand_seed.png"
                    },
                    {
                        "item": "Guam seed",
                        "qty": "1",
                        "rarity": "94/21,696",
                        "img": "/images/Guam_seed_5.png"
                    },
                    {
                        "item": "Marrentill seed",
                        "qty": "1",
                        "rarity": "96/21,696",
                        "img": "/images/Marrentill_seed_5.png"
                    },
                    {
                        "item": "Tarromin seed",
                        "qty": "1",
                        "rarity": "87/21,696",
                        "img": "/images/Tarromin_seed_5.png"
                    },
                    {
                        "item": "Harralander seed",
                        "qty": "1",
                        "rarity": "56/21,696",
                        "img": "/images/Harralander_seed_5.png"
                    },
                    {
                        "item": "Ranarr seed",
                        "qty": "1",
                        "rarity": "69/21,696",
                        "img": "/images/Ranarr_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "74/21,696",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Toadflax seed",
                        "qty": "1",
                        "rarity": "59/21,696",
                        "img": "/images/Toadflax_seed_5.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1",
                        "rarity": "66/21,696",
                        "img": "/images/Irit_seed_5.png"
                    },
                    {
                        "item": "Wergali seed",
                        "qty": "1",
                        "rarity": "59/21,696",
                        "img": "/images/Wergali_seed_5.png"
                    },
                    {
                        "item": "Avantoe seed",
                        "qty": "1",
                        "rarity": "56/21,696",
                        "img": "/images/Avantoe_seed_5.png"
                    },
                    {
                        "item": "Kwuarm seed",
                        "qty": "1",
                        "rarity": "60/21,696",
                        "img": "/images/Kwuarm_seed_5.png"
                    },
                    {
                        "item": "Snapdragon seed",
                        "qty": "1",
                        "rarity": "41/21,696",
                        "img": "/images/Snapdragon_seed_5.png"
                    },
                    {
                        "item": "Cadantine seed",
                        "qty": "1",
                        "rarity": "47/21,696",
                        "img": "/images/Cadantine_seed_5.png"
                    },
                    {
                        "item": "Lantadyme seed",
                        "qty": "1",
                        "rarity": "40/21,696",
                        "img": "/images/Lantadyme_seed_5.png"
                    },
                    {
                        "item": "Dwarf weed seed",
                        "qty": "1",
                        "rarity": "26/21,696",
                        "img": "/images/Dwarf_weed_seed_5.png"
                    },
                    {
                        "item": "Torstol seed",
                        "qty": "1",
                        "rarity": "21/21,696",
                        "img": "/images/Torstol_seed_5.png"
                    },
                    {
                        "item": "Fellstalk seed",
                        "qty": "1",
                        "rarity": "20/21,696",
                        "img": "/images/Fellstalk_seed_5.png"
                    },
                    {
                        "item": "Mystical sand seed",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Mystical_sand_seed.png"
                    },
                    {
                        "item": "Supreme growth potion (universal)",
                        "qty": "1",
                        "rarity": "6/21,696",
                        "img": "/images/Supreme_growth_potion_%28universal%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crux Eqal Knight",
        "name": "Crux Eqal Knight",
        "category": "standard",
        "level": "83",
        "xp": "194.2",
        "stun": "5 ticks (3s)",
        "damage": "80 + 3% of base life points",
        "multi": [
            "93 83",
            "103 93",
            "113 103"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "275–325",
                        "rarity": "4/5",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Catalytic anima stone",
                        "qty": "1–3",
                        "rarity": "3/80",
                        "img": "/images/Catalytic_anima_stone.png"
                    },
                    {
                        "item": "Elemental anima stone",
                        "qty": "1–10",
                        "rarity": "1/10",
                        "img": "/images/Elemental_anima_stone.png"
                    },
                    {
                        "item": "Guam seed",
                        "qty": "1",
                        "rarity": "70/16,929",
                        "img": "/images/Guam_seed_5.png"
                    },
                    {
                        "item": "Tarromin seed",
                        "qty": "1",
                        "rarity": "61/16,929",
                        "img": "/images/Tarromin_seed_5.png"
                    },
                    {
                        "item": "Marrentill seed",
                        "qty": "1",
                        "rarity": "92/16,929",
                        "img": "/images/Marrentill_seed_5.png"
                    },
                    {
                        "item": "Harralander seed",
                        "qty": "1",
                        "rarity": "68/16,929",
                        "img": "/images/Harralander_seed_5.png"
                    },
                    {
                        "item": "Ranarr seed",
                        "qty": "1",
                        "rarity": "68/16,929",
                        "img": "/images/Ranarr_seed_5.png"
                    },
                    {
                        "item": "Toadflax seed",
                        "qty": "1",
                        "rarity": "70/16,929",
                        "img": "/images/Toadflax_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "75/16,929",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1",
                        "rarity": "48/16,929",
                        "img": "/images/Irit_seed_5.png"
                    },
                    {
                        "item": "Wergali seed",
                        "qty": "1",
                        "rarity": "47/16,929",
                        "img": "/images/Wergali_seed_5.png"
                    },
                    {
                        "item": "Avantoe seed",
                        "qty": "1",
                        "rarity": "48/16,929",
                        "img": "/images/Avantoe_seed_5.png"
                    },
                    {
                        "item": "Kwuarm seed",
                        "qty": "1",
                        "rarity": "50/16,929",
                        "img": "/images/Kwuarm_seed_5.png"
                    },
                    {
                        "item": "Snapdragon seed",
                        "qty": "1",
                        "rarity": "41/16,929",
                        "img": "/images/Snapdragon_seed_5.png"
                    },
                    {
                        "item": "Cadantine seed",
                        "qty": "1",
                        "rarity": "39/16,929",
                        "img": "/images/Cadantine_seed_5.png"
                    },
                    {
                        "item": "Lantadyme seed",
                        "qty": "1",
                        "rarity": "35/16,929",
                        "img": "/images/Lantadyme_seed_5.png"
                    },
                    {
                        "item": "Dwarf weed seed",
                        "qty": "1",
                        "rarity": "13/16,929",
                        "img": "/images/Dwarf_weed_seed_5.png"
                    },
                    {
                        "item": "Torstol seed",
                        "qty": "1",
                        "rarity": "23/16,929",
                        "img": "/images/Torstol_seed_5.png"
                    },
                    {
                        "item": "Fellstalk seed",
                        "qty": "1",
                        "rarity": "13/16,929",
                        "img": "/images/Fellstalk_seed_5.png"
                    },
                    {
                        "item": "Supreme growth potion (universal)",
                        "qty": "1",
                        "rarity": "2/16,929",
                        "img": "/images/Supreme_growth_potion_%28universal%29.png"
                    },
                    {
                        "item": "Sand seed",
                        "qty": "1",
                        "rarity": "38/16,929",
                        "img": "/images/Sand_seed.png"
                    },
                    {
                        "item": "Mystical sand seed",
                        "qty": "1",
                        "rarity": "5/16,929",
                        "img": "/images/Mystical_sand_seed.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Ghotistix",
        "name": "Ghotistix",
        "category": "standard",
        "level": "42",
        "xp": "58.0",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "multi": [
            "52 42",
            "62 52",
            "72 62"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Raw shrimps",
                        "qty": "1",
                        "rarity": "1/4",
                        "img": "/images/Raw_shrimps.png"
                    },
                    {
                        "item": "Raw anchovies",
                        "qty": "1",
                        "rarity": "1/4",
                        "img": "/images/Raw_anchovies.png"
                    },
                    {
                        "item": "Raw herring",
                        "qty": "1",
                        "rarity": "1/4",
                        "img": "/images/Raw_herring.png"
                    },
                    {
                        "item": "Raw sardine",
                        "qty": "1",
                        "rarity": "1/4",
                        "img": "/images/Raw_sardine.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Goebie scavenger",
        "name": "Goebie scavenger",
        "category": "standard",
        "level": "102",
        "xp": "441.0",
        "stun": "0",
        "damage": "0",
        "multi": [
            "112 102",
            "N/A",
            "N/A"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "420",
                        "rarity": "740/2,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Cooked eeligator",
                        "qty": "1",
                        "rarity": "250/2,000",
                        "img": "/images/Cooked_eeligator.png"
                    },
                    {
                        "item": "Teci",
                        "qty": "1",
                        "rarity": "750/2,000",
                        "img": "/images/Teci.png"
                    },
                    {
                        "item": "Teci",
                        "qty": "2",
                        "rarity": "250/2,000",
                        "img": "/images/Teci.png"
                    },
                    {
                        "item": "Small goebie burial charm",
                        "qty": "1",
                        "rarity": "4/2,000",
                        "img": "/images/Small_goebie_burial_charm.png"
                    },
                    {
                        "item": "Goebie burial charm",
                        "qty": "1",
                        "rarity": "3/2,000",
                        "img": "/images/Goebie_burial_charm.png"
                    },
                    {
                        "item": "Large goebie burial charm",
                        "qty": "1",
                        "rarity": "2/2,000",
                        "img": "/images/Large_goebie_burial_charm.png"
                    },
                    {
                        "item": "Liberation of Mazcab reroll token",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Liberation_of_Mazcab_reroll_token.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Menaphos market guard",
        "name": "Menaphos market guard",
        "category": "standard",
        "level": "104",
        "xp": "462.0",
        "stun": "5 ticks (3s)",
        "damage": "200 + 3% of base life points",
        "multi": [
            "114 104",
            "N/A",
            "N/A"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "455",
                        "rarity": "758/1,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Acadia wood spirit",
                        "qty": "1",
                        "rarity": "50/1,000",
                        "img": "/images/Acadia_wood_spirit.png"
                    },
                    {
                        "item": "Waterskin (4)",
                        "qty": "1",
                        "rarity": "50/1,000",
                        "img": "/images/Waterskin_%284%29.png"
                    },
                    {
                        "item": "Potato cactus",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Potato_cactus.png"
                    },
                    {
                        "item": "Large bladed adamant salvage",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Large_bladed_adamant_salvage.png"
                    },
                    {
                        "item": "Extra fine sand",
                        "qty": "1",
                        "rarity": "100/1,000",
                        "img": "/images/Extra_fine_sand.png"
                    },
                    {
                        "item": "Vital spark",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Vital_spark.png"
                    },
                    {
                        "item": "Menaphite gift offering (small)",
                        "qty": "1",
                        "rarity": "4/1,000",
                        "img": "/images/Menaphite_gift_offering_%28small%29.png"
                    },
                    {
                        "item": "Menaphite gift offering (medium)",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Menaphite_gift_offering_%28medium%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "6/1,000",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "495/100,000",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Sealed clue scroll (master)",
                        "qty": "1",
                        "rarity": "5/100,000",
                        "img": "/images/Sealed_clue_scroll_%28master%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "TzHaar-Hur trader",
        "name": "TzHaar-Hur trader",
        "category": "standard",
        "level": "111",
        "xp": "504",
        "stun": "5 ticks (3s)",
        "damage": "150 + 3% of base life points",
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Jal-tok-yt",
                        "qty": "1",
                        "rarity": "1/20,000",
                        "img": "/images/Jal-tok-yt.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Tokkul",
                        "qty": "8–25",
                        "rarity": "2,339/3,000",
                        "img": "/images/Tokkul_25.png"
                    },
                    {
                        "item": "Uncut sapphire",
                        "qty": "1–3",
                        "rarity": "150/3,000",
                        "img": "/images/Uncut_sapphire.png"
                    },
                    {
                        "item": "Uncut emerald",
                        "qty": "1–3",
                        "rarity": "200/3,000",
                        "img": "/images/Uncut_emerald.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "1–3",
                        "rarity": "150/3,000",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Uncut diamond",
                        "qty": "1–3",
                        "rarity": "100/3,000",
                        "img": "/images/Uncut_diamond.png"
                    },
                    {
                        "item": "Uncut onyx",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Uncut_onyx.png"
                    },
                    {
                        "item": "Onyx bolt tips",
                        "qty": "4–8",
                        "rarity": "30/3,000",
                        "img": "/images/Onyx_bolt_tips_5.png"
                    },
                    {
                        "item": "Sealed clue scroll (medium)",
                        "qty": "1",
                        "rarity": "30/3,000",
                        "img": "/images/Sealed_clue_scroll_%28medium%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Wizards' Tower master mage",
        "name": "Wizards' Tower master mage",
        "category": "standard",
        "level": "106",
        "xp": "483",
        "stun": "5 ticks (3s)",
        "damage": "200 + 3% of base life points",
        "loot": [
            {
                "group": "Runes",
                "drops": [
                    {
                        "item": "Pure essence",
                        "qty": "15–30 (noted)",
                        "rarity": "225/3,000",
                        "img": "/images/Pure_essence.png"
                    },
                    {
                        "item": "Cosmic rune",
                        "qty": "2–3",
                        "rarity": "180/3,000",
                        "img": "/images/Cosmic_rune.png"
                    },
                    {
                        "item": "Soul rune",
                        "qty": "3–7",
                        "rarity": "150/3,000",
                        "img": "/images/Soul_rune.png"
                    },
                    {
                        "item": "Astral rune",
                        "qty": "2–4",
                        "rarity": "180/3,000",
                        "img": "/images/Astral_rune.png"
                    },
                    {
                        "item": "Law rune",
                        "qty": "2–4",
                        "rarity": "180/3,000",
                        "img": "/images/Law_rune.png"
                    },
                    {
                        "item": "Time rune",
                        "qty": "1–4",
                        "rarity": "75/3,000",
                        "img": "/images/Time_rune.png"
                    },
                    {
                        "item": "Dust rune",
                        "qty": "6–10",
                        "rarity": "225/3,000",
                        "img": "/images/Dust_rune.png"
                    },
                    {
                        "item": "Steam rune",
                        "qty": "6–9",
                        "rarity": "225/3,000",
                        "img": "/images/Steam_rune.png"
                    }
                ]
            },
            {
                "group": "Talismans",
                "drops": [
                    {
                        "item": "Blood talisman",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Blood_talisman.png"
                    },
                    {
                        "item": "Death talisman",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Death_talisman.png"
                    },
                    {
                        "item": "Soul talisman",
                        "qty": "1",
                        "rarity": "1/3,000",
                        "img": "/images/Soul_talisman.png"
                    }
                ]
            },
            {
                "group": "Other",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "560",
                        "rarity": "707/3,000",
                        "img": "/images/Coins_250.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Vyrewatch tither",
        "name": "Vyrewatch tither",
        "category": "standard",
        "level": "100",
        "xp": "422",
        "stun": "5 ticks (3s)",
        "damage": "150 + 3% of base life points",
        "multi": [
            "110 100",
            "N/A",
            "N/A"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "525",
                        "rarity": "730/1,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Blood rune",
                        "qty": "2–4",
                        "rarity": "65/1,000",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "2–4",
                        "rarity": "65/1,000",
                        "img": "/images/Death_rune.png"
                    },
                    {
                        "item": "Congealed blood",
                        "qty": "2–4",
                        "rarity": "75/1,000",
                        "img": "/images/Congealed_blood_1000.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "1",
                        "rarity": "33/1,000",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Elder wood spirit",
                        "qty": "1–3",
                        "rarity": "5/1,000",
                        "img": "/images/Elder_wood_spirit.png"
                    },
                    {
                        "item": "Inert adrenaline crystal",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Inert_adrenaline_crystal.png"
                    },
                    {
                        "item": "Tiny spiky rune salvage",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Tiny_spiky_rune_salvage.png"
                    },
                    {
                        "item": "Small bladed orikalkum salvage",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Small_bladed_orikalkum_salvage.png"
                    },
                    {
                        "item": "Shiny columbarium key",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Shiny_columbarium_key.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Wizards' Tower mage",
        "name": "Wizards' Tower mage",
        "category": "standard",
        "level": "64",
        "xp": "94.5",
        "stun": "5 ticks (3s)",
        "damage": "80 + 3% of base life points",
        "multi": [
            "74 64",
            "84 74",
            "94 84"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "70",
                        "rarity": "320/1,000",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Chaos rune",
                        "qty": "3",
                        "rarity": "125/1,000",
                        "img": "/images/Chaos_rune.png"
                    },
                    {
                        "item": "Nature rune",
                        "qty": "3",
                        "rarity": "125/1,000",
                        "img": "/images/Nature_rune.png"
                    },
                    {
                        "item": "Law rune",
                        "qty": "3",
                        "rarity": "125/1,000",
                        "img": "/images/Law_rune.png"
                    },
                    {
                        "item": "Pure essence",
                        "qty": "8–12; 15 (noted)",
                        "rarity": "150/1,000",
                        "img": "/images/Pure_essence.png"
                    },
                    {
                        "item": "Water talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Water_talisman.png"
                    },
                    {
                        "item": "Earth talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Earth_talisman.png"
                    },
                    {
                        "item": "Fire talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Fire_talisman.png"
                    },
                    {
                        "item": "Body talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Body_talisman.png"
                    },
                    {
                        "item": "Cosmic talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Cosmic_talisman.png"
                    },
                    {
                        "item": "Chaos talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Chaos_talisman.png"
                    },
                    {
                        "item": "Nature talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Nature_talisman.png"
                    },
                    {
                        "item": "Law talisman",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Law_talisman.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Trainee archaeologist",
        "name": "Trainee archaeologist",
        "category": "standard",
        "level": "50",
        "xp": "75",
        "stun": "5 ticks (3s)",
        "damage": "60 + 3% of base life points",
        "multi": [
            "60 50",
            "70 60",
            "80 70"
        ],
        "loot": [
            {
                "group": "Common",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "105",
                        "rarity": "1,321/2,000",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Chronotes",
                        "qty": "2–3",
                        "rarity": "350/2,000",
                        "img": "/images/Chronotes.png"
                    },
                    {
                        "item": "Tetracompass piece (left)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28left%29.png"
                    },
                    {
                        "item": "Tetracompass piece (right)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28right%29.png"
                    },
                    {
                        "item": "Tetracompass piece (dial)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28dial%29.png"
                    },
                    {
                        "item": "Tetracompass piece (needle)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28needle%29.png"
                    }
                ]
            },
            {
                "group": "Consumable",
                "drops": [
                    {
                        "item": "Hi-spec monocle",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Hi-spec_monocle.png"
                    },
                    {
                        "item": "Archaeologist's tea",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Archaeologist%27s_tea.png"
                    },
                    {
                        "item": "Tarpaulin sheet",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Tarpaulin_sheet.png"
                    },
                    {
                        "item": "Material manual",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Material_manual.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Fiery brimstone",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Fiery_brimstone.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Saltwater mud",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Saltwater_mud.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Aerated sediment",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Aerated_sediment.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Volcanic ash",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Volcanic_ash.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Earthen clay",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Earthen_clay.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Volcanic ash",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Volcanic_ash.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "125/20,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Cadmium red",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Cadmium_red.png"
                    },
                    {
                        "item": "Chaotic brimstone",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Chaotic_brimstone.png"
                    },
                    {
                        "item": "Demonhide",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Demonhide.png"
                    },
                    {
                        "item": "Eye of Dagon",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Eye_of_Dagon.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Hellfire metal",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Hellfire_metal.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Cobalt blue",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Cobalt_blue.png"
                    },
                    {
                        "item": "Everlight silvthril",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Everlight_silvthril.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Keramos",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Keramos.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Star of Saradomin",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Star_of_Saradomin.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White marble",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/White_marble.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/24,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "125/22,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Aetherium alloy",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Aetherium_alloy.png"
                    },
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Armadylean yellow",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Armadylean_yellow.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Quintessence",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Quintessence.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Stormguard steel",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Stormguard_steel.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Wings of War",
                        "qty": "1",
                        "rarity": "125/28,000",
                        "img": "/images/Wings_of_War.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Malachite green",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Malachite_green.png"
                    },
                    {
                        "item": "Mark of the Kyzaj",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Mark_of_the_Kyzaj.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vulcanised rubber",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Vulcanised_rubber.png"
                    },
                    {
                        "item": "Warforged bronze",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Warforged_bronze.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Yu'biusk clay",
                        "qty": "1",
                        "rarity": "125/26,000",
                        "img": "/images/Yu%27biusk_clay.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "125/16,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Nothing",
                        "qty": "N/A",
                        "rarity": "1/2,000",
                        "img": "/images/Nothing.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Venator dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Venator_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Venator light crossbow (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Venator_light_crossbow_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary gladius (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Legionary_gladius_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary square shield (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Legionary_square_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Primis Elementis standard (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Primis_Elementis_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Zaros effigy (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Zaros_effigy_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian training dummy (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Zarosian_training_dummy_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Legatus_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Solem in Umbra' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Solem_in_Umbra%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient timepiece (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Ancient_timepiece_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus pendant (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Legatus_pendant_%28damaged%29.png"
                    },
                    {
                        "item": "'Incite Fear' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Incite_Fear%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex signet ring (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Pontifex_signet_ring_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial mace (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Ceremonial_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Pontifex_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Consensus ad Idem' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Consensus_ad_Idem%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex censer (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Pontifex_censer_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex crozier (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Pontifex_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex mitre (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Pontifex_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "'Exsanguinate' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Exsanguinate%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Necromantic focus (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Necromantic_focus_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian ewer (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Zarosian_ewer_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian stein (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Zarosian_stein_%28damaged%29.png"
                    },
                    {
                        "item": "'Smoke Cloud' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Smoke_Cloud%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Vigorem vial (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Vigorem_vial_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient magic tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Ancient_magic_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "'Animate Dead' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Animate_Dead%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Portable phylactery (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Portable_phylactery_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian hood (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Praetorian_hood_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian robes (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Praetorian_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian staff (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Praetorian_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient globe (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Ancient_globe_%28damaged%29.png"
                    },
                    {
                        "item": "Battle plans (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/Battle_plans_%28damaged%29.png"
                    },
                    {
                        "item": "'Prima Legio' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/68,000",
                        "img": "/images/%27Prima_Legio%27_painting_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Hookah pipe (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Hookah_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Opulent wine goblet (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Opulent_wine_goblet_%28damaged%29.png"
                    },
                    {
                        "item": "Crest of Dagon (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Crest_of_Dagon_%28damaged%29.png"
                    },
                    {
                        "item": "'Disorder' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Disorder%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Imp mask (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Imp_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Lesser demon mask (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Lesser_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Greater demon mask (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Greater_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Order of Dis robes (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Order_of_Dis_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Ritual_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Branding iron (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Branding_iron_%28damaged%29.png"
                    },
                    {
                        "item": "Manacles (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Manacles_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lake of Fire' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27The_Lake_of_Fire%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'Lust' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Lust%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos star (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Chaos_star_%28damaged%29.png"
                    },
                    {
                        "item": "Spiked dog collar (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Spiked_dog_collar_%28damaged%29.png"
                    },
                    {
                        "item": "Larupia trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Larupia_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Lion trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Lion_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "She-wolf trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/She-wolf_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "'Torment' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Torment%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "'Pandemonium' tapestry (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Pandemonium%27_tapestry_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire haladie (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Hellfire_haladie_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire katar (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Hellfire_katar_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire zaghnal (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Hellfire_zaghnal_%28damaged%29.png"
                    },
                    {
                        "item": "'Possession' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Possession%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Trishula (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Trishula_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth piercing (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Tsutsaroth_piercing_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos Elemental trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Chaos_Elemental_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Virius trophy (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Virius_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth helm (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Tsutsaroth_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth pauldron (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Tsutsaroth_pauldron_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth urumi (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Tsutsaroth_urumi_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "'Frying pan' (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Frying_pan%27_%28damaged%29.png"
                    },
                    {
                        "item": "Hallowed lantern (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Hallowed_lantern_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn ornament (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Ceremonial_unicorn_ornament_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn saddle (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Ceremonial_unicorn_saddle_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight harp (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Everlight_harp_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight trumpet (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Everlight_trumpet_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight violin (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Everlight_violin_%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (female)(damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Folded-arm_figurine_%28female%29%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (male)(damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Folded-arm_figurine_%28male%29%28damaged%29.png"
                    },
                    {
                        "item": "Dominion discus (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Dominion_discus_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion javelin (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Dominion_javelin_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion pelte shield (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Dominion_pelte_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Bronze Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Bronze_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Silver Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Silver_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion torch (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Dominion_torch_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative vase (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Decorative_vase_%28damaged%29.png"
                    },
                    {
                        "item": "Kantharos cup (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Kantharos_cup_%28damaged%29.png"
                    },
                    {
                        "item": "Patera bowl (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Patera_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Dominarian device (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Dominarian_device_%28damaged%29.png"
                    },
                    {
                        "item": "Fishing trident (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Fishing_trident_%28damaged%29.png"
                    },
                    {
                        "item": "Amphora (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Rod of Asclepius (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Rod_of_Asclepius_%28damaged%29.png"
                    },
                    {
                        "item": "Kopis dagger (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Kopis_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Xiphos short sword (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Xiphos_short_sword_%28damaged%29.png"
                    },
                    {
                        "item": "'Hallowed Be the Everlight' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27Hallowed_Be_the_Everlight%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lord of Light' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27The_Lord_of_Light%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Pride of Padosan' painting (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27The_Pride_of_Padosan%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Enlightened Soul' scroll (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27The_Enlightened_Soul%27_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "'The Eudoxian Elements' tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/%27The_Eudoxian_Elements%27_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Doru spear (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Doru_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Kontos lance (damaged)",
                        "qty": "1",
                        "rarity": "1/62,000",
                        "img": "/images/Kontos_lance_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Apex cap (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Apex_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Curse tablet (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Curse_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of shadow (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Funerary_urn_of_shadow_%28damaged%29.png"
                    },
                    {
                        "item": "Infula robes (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Infula_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of smoke (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Funerary_urn_of_smoke_%28damaged%29.png"
                    },
                    {
                        "item": "Hand of the Ancients (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Hand_of_the_Ancients_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative amphora (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Decorative_amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of ice (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Funerary_urn_of_ice_%28damaged%29.png"
                    },
                    {
                        "item": "Loarnab rod (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Loarnab_rod_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial armour (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Inquisitor%27s_ceremonial_armour_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial mask (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Inquisitor%27s_ceremonial_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's seal (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Inquisitor%27s_seal_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator helmet (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Gladiator_helmet_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator sword (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Gladiator_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of blood (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Funerary_urn_of_blood_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of miasma (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Funerary_urn_of_miasma_%28damaged%29.png"
                    },
                    {
                        "item": "Model chariot (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/Model_chariot_%28damaged%29.png"
                    },
                    {
                        "item": "'The Serpent's Fall' carving (damaged)",
                        "qty": "1",
                        "rarity": "1/36,000",
                        "img": "/images/%27The_Serpent%27s_Fall%27_carving_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Ikovian gerege (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ikovian_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Toy glider (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Toy_glider_%28damaged%29.png"
                    },
                    {
                        "item": "Toy war golem (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Toy_war_golem_%28damaged%29.png"
                    },
                    {
                        "item": "Avian song-egg player (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Avian_song-egg_player_%28damaged%29.png"
                    },
                    {
                        "item": "Keshik drum (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Keshik_drum_%28damaged%29.png"
                    },
                    {
                        "item": "Morin khuur (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Morin_khuur_%28damaged%29.png"
                    },
                    {
                        "item": "Aviansie dreamcoat (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Aviansie_dreamcoat_%28damaged%29.png"
                    },
                    {
                        "item": "Peacocking parasol (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Peacocking_parasol_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial plume (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ceremonial_plume_%28damaged%29.png"
                    },
                    {
                        "item": "Hawkeye lens multi-vision scope (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Hawkeye_lens_multi-vision_scope_%28damaged%29.png"
                    },
                    {
                        "item": "Talon-3 razor wing (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Talon-3_razor_wing_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype gravimeter (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Prototype_gravimeter_%28damaged%29.png"
                    },
                    {
                        "item": "Songbird recorder (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Songbird_recorder_%28damaged%29.png"
                    },
                    {
                        "item": "Dayguard shield (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Dayguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Stormguard gerege (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Stormguard_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Golem heart (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Golem_heart_%28damaged%29.png"
                    },
                    {
                        "item": "Golem instruction (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Golem_instruction_%28damaged%29.png"
                    },
                    {
                        "item": "Blackfire lance (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Blackfire_lance_%28damaged%29.png"
                    },
                    {
                        "item": "Nightguard shield (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Nightguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Flat cap (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Flat_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Night owl flight goggles (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Night_owl_flight_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godbow (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Prototype_godbow_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godstaff (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Prototype_godstaff_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godsword (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Prototype_godsword_%28damaged%29.png"
                    },
                    {
                        "item": "Chuluu stone (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Chuluu_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Quintessence counter (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Quintessence_counter_%28damaged%29.png"
                    },
                    {
                        "item": "Spherical astrolabe (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Spherical_astrolabe_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Castle gatestone (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Castle_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Engraved ring of kinship (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Engraved_ring_of_kinship_%28damaged%29.png"
                    },
                    {
                        "item": "Exploratory totem (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Exploratory_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Excavator portal mine (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Excavator_portal_mine_%28damaged%29.png"
                    },
                    {
                        "item": "Storage totem (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Storage_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Plant seed satchel (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Plant_seed_satchel_%28damaged%29.png"
                    },
                    {
                        "item": "Snuff box (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Snuff_box_%28damaged%29.png"
                    },
                    {
                        "item": "Spent summoning charm (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Spent_summoning_charm_%28damaged%29.png"
                    },
                    {
                        "item": "'Friendship bracelet' (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/%27Friendship_bracelet%27_%28damaged%29.png"
                    },
                    {
                        "item": "Homely totem (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Homely_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Projection attuner (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Projection_attuner_%28damaged%29.png"
                    },
                    {
                        "item": "Golden projection 'needle' (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Golden_projection_%27needle%27_%28damaged%29.png"
                    },
                    {
                        "item": "Comfort gatestone (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Comfort_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Halak's cube (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Halak%27s_cube_%28damaged%29.png"
                    },
                    {
                        "item": "Portable portal generator (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Portable_portal_generator_%28damaged%29.png"
                    },
                    {
                        "item": "Warped trinket (damaged)",
                        "qty": "1",
                        "rarity": "1/32,000",
                        "img": "/images/Warped_trinket_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Ekeleshuun blinder mask (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ekeleshuun_blinder_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Narogoshuun 'Hob-da-Gob' ball (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Narogoshuun_%27Hob-da-Gob%27_ball_%28damaged%29.png"
                    },
                    {
                        "item": "Rekeshuun war tether (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Rekeshuun_war_tether_%28damaged%29.png"
                    },
                    {
                        "item": "Ogre Kyzaj axe (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ogre_Kyzaj_axe_%28damaged%29.png"
                    },
                    {
                        "item": "Ork cleaver sword (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ork_cleaver_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Thorobshuun battle standard (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Thorobshuun_battle_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Yurkolgokh stink grenade (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Yurkolgokh_stink_grenade_%28damaged%29.png"
                    },
                    {
                        "item": "High priest crozier (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/High_priest_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "High priest mitre (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/High_priest_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "High priest orb (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/High_priest_orb_%28damaged%29.png"
                    },
                    {
                        "item": "Beastkeeper helm (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Beastkeeper_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Idithuun horn ring (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Idithuun_horn_ring_%28damaged%29.png"
                    },
                    {
                        "item": "'Nosorog!' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/%27Nosorog%21%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg megahitter (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ourg_megahitter_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg tower/goblin cower shield (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Ourg_tower-goblin_cower_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Garagorshuun anchor (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Garagorshuun_anchor_%28damaged%29.png"
                    },
                    {
                        "item": "'Forged in War' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/%27Forged_in_War%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Dorgeshuun spear (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Dorgeshuun_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Huzamogaarb chaos crown (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Huzamogaarb_chaos_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Saragorgak star crown (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Saragorgak_star_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Drogokishuun hook sword (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Drogokishuun_hook_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Hobgoblin mansticker (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Hobgoblin_mansticker_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra chieftain crown (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Kal-i-kra_chieftain_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra mace (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Kal-i-kra_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra warhorn (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Kal-i-kra_warhorn_%28damaged%29.png"
                    },
                    {
                        "item": "'Da Boss Man' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/%27Da_Boss_Man%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Horogothgar cooking pot (damaged)",
                        "qty": "1",
                        "rarity": "1/54,000",
                        "img": "/images/Horogothgar_cooking_pot_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact table",
                "drops": [
                    {
                        "item": "Pasaha (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Pasaha_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual bell (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Ritual_bell_%28damaged%29.png"
                    },
                    {
                        "item": "Kilaya (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Kilaya_%28damaged%29.png"
                    },
                    {
                        "item": "Vazara (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Vazara_%28damaged%29.png"
                    },
                    {
                        "item": "Death mask (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Death_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin calendar (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Dragonkin_calendar_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin staff (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Dragonkin_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon scalpel (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Dragon_scalpel_%28damaged%29.png"
                    },
                    {
                        "item": "Protective goggles (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Protective_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon burner (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Dragon_burner_%28damaged%29.png"
                    },
                    {
                        "item": "Orthenglass flask (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Orthenglass_flask_%28damaged%29.png"
                    },
                    {
                        "item": "Meditation pipe (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Meditation_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Personal totem (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Personal_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Singing bowl (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Singing_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Lingam stone (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Lingam_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Master control (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Master_control_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo hard hat (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Xolo_hard_hat_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo pickaxe (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Xolo_pickaxe_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo shield (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Xolo_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo spear (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Xolo_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Gold dish (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/Gold_dish_%28damaged%29.png"
                    },
                    {
                        "item": "'Raksha' idol (damaged)",
                        "qty": "1",
                        "rarity": "1/44,000",
                        "img": "/images/%27Raksha%27_idol_%28damaged%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Vyrelord consumer",
        "name": "Vyrelord consumer",
        "category": "standard",
        "level": "118",
        "xp": "577.5",
        "stun": "5 ticks (3s)",
        "damage": "500 + 3% of base life points",
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Ring of Vitur",
                        "qty": "1",
                        "rarity": "1/20,000",
                        "img": "/images/Ring_of_Vitur.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "630",
                        "rarity": "708/1,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Blood rune",
                        "qty": "3–5",
                        "rarity": "65/1,000",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "2–4",
                        "rarity": "65/1,000",
                        "img": "/images/Death_rune.png"
                    },
                    {
                        "item": "Congealed blood",
                        "qty": "2–4",
                        "rarity": "75/1,000",
                        "img": "/images/Congealed_blood_1000.png"
                    },
                    {
                        "item": "Ruby necklace",
                        "qty": "1",
                        "rarity": "50/1,000",
                        "img": "/images/Ruby_necklace.png"
                    },
                    {
                        "item": "Necrite stone spirit",
                        "qty": "1–2",
                        "rarity": "15/1,000",
                        "img": "/images/Necrite_stone_spirit.png"
                    },
                    {
                        "item": "Eternal magic wood spirit",
                        "qty": "1–3",
                        "rarity": "5/1,000",
                        "img": "/images/Eternal_magic_wood_spirit.png"
                    },
                    {
                        "item": "Shiny columbarium key",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Shiny_columbarium_key.png"
                    },
                    {
                        "item": "Small spiky rune salvage",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Small_spiky_rune_salvage.png"
                    },
                    {
                        "item": "Small bladed orikalkum salvage",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Small_bladed_orikalkum_salvage.png"
                    }
                ]
            }
        ],
        "aka": [
            "Vyrelady consumer"
        ]
    },
    {
        "page": "Fairy trader",
        "name": "Fairy trader",
        "category": "standard",
        "level": "113",
        "xp": "525",
        "stun": "5 ticks (3s)",
        "damage": "0",
        "loot": [
            {
                "group": "Wood spirits",
                "drops": [
                    {
                        "item": "Mahogany wood spirit",
                        "qty": "1–3",
                        "rarity": "27/1,000",
                        "img": "/images/Mahogany_wood_spirit.png"
                    },
                    {
                        "item": "Yew wood spirit",
                        "qty": "1–3",
                        "rarity": "18/1,000",
                        "img": "/images/Yew_wood_spirit.png"
                    },
                    {
                        "item": "Magic wood spirit",
                        "qty": "1–3",
                        "rarity": "13/1,000",
                        "img": "/images/Magic_wood_spirit.png"
                    }
                ]
            },
            {
                "group": "Seeds",
                "drops": [
                    {
                        "item": "Dwarf weed seed",
                        "qty": "1–3",
                        "rarity": "14/1,000",
                        "img": "/images/Dwarf_weed_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1–3",
                        "rarity": "14/1,000",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Godly grapevine seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Godly_grapevine_seed_5.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1",
                        "rarity": "9/1,000",
                        "img": "/images/Irit_seed_5.png"
                    },
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "3/1,000",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    }
                ]
            },
            {
                "group": "Charms",
                "drops": [
                    {
                        "item": "Crimson charm",
                        "qty": "2",
                        "rarity": "50/1,000",
                        "img": "/images/Crimson_charm.png"
                    },
                    {
                        "item": "Blue charm",
                        "qty": "2",
                        "rarity": "50/1,000",
                        "img": "/images/Blue_charm.png"
                    }
                ]
            },
            {
                "group": "Other",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "560",
                        "rarity": "748/1,000",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Moonstone dust",
                        "qty": "1",
                        "rarity": "15/1,000",
                        "img": "/images/Moonstone_dust.png"
                    },
                    {
                        "item": "Onyx dust",
                        "qty": "1",
                        "rarity": "15/1,000",
                        "img": "/images/Onyx_dust.png"
                    },
                    {
                        "item": "Inert adrenaline crystal",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Inert_adrenaline_crystal.png"
                    },
                    {
                        "item": "Dragon longsword",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Dragon_longsword.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Archaeologist",
        "name": "Archaeologist",
        "category": "standard",
        "level": "78",
        "xp": "168",
        "stun": "5 ticks (3s)",
        "damage": "80 + 3% of base life points",
        "multi": [
            "88 78",
            "98 88",
            "108 98"
        ],
        "loot": [
            {
                "group": "Common",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "185",
                        "rarity": "1,295/2,000",
                        "img": "/images/Coins_100.png"
                    },
                    {
                        "item": "Chronotes",
                        "qty": "2–4",
                        "rarity": "350/2,000",
                        "img": "/images/Chronotes.png"
                    },
                    {
                        "item": "Tetracompass piece (left)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28left%29.png"
                    },
                    {
                        "item": "Tetracompass piece (right)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28right%29.png"
                    },
                    {
                        "item": "Tetracompass piece (dial)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28dial%29.png"
                    },
                    {
                        "item": "Tetracompass piece (needle)",
                        "qty": "1",
                        "rarity": "1/2,000",
                        "img": "/images/Tetracompass_piece_%28needle%29.png"
                    }
                ]
            },
            {
                "group": "Consumable",
                "drops": [
                    {
                        "item": "Hi-spec monocle",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Hi-spec_monocle.png"
                    },
                    {
                        "item": "Archaeologist's tea",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Archaeologist%27s_tea.png"
                    },
                    {
                        "item": "Tarpaulin sheet",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Tarpaulin_sheet.png"
                    },
                    {
                        "item": "Material manual",
                        "qty": "1",
                        "rarity": "2/8,000",
                        "img": "/images/Material_manual.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Fiery brimstone",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Fiery_brimstone.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Saltwater mud",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Saltwater_mud.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Ancient gravel",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Ancient_gravel.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Aerated sediment",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Aerated_sediment.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Volcanic ash",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Volcanic_ash.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Earthen clay",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Earthen_clay.png"
                    }
                ]
            },
            {
                "group": "Soil",
                "drops": [
                    {
                        "item": "Volcanic ash",
                        "qty": "1",
                        "rarity": "200/2,000",
                        "img": "/images/Volcanic_ash.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "150/20,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Cadmium red",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Cadmium_red.png"
                    },
                    {
                        "item": "Chaotic brimstone",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Chaotic_brimstone.png"
                    },
                    {
                        "item": "Demonhide",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Demonhide.png"
                    },
                    {
                        "item": "Eye of Dagon",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Eye_of_Dagon.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Hellfire metal",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Hellfire_metal.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Cobalt blue",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Cobalt_blue.png"
                    },
                    {
                        "item": "Everlight silvthril",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Everlight_silvthril.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Keramos",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Keramos.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Star of Saradomin",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Star_of_Saradomin.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White marble",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/White_marble.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/24,000",
                        "img": "/images/White_oak.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Ancient vis",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Ancient_vis.png"
                    },
                    {
                        "item": "Blood of Orcus",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Blood_of_Orcus.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Imperial steel",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Imperial_steel.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Tyrian purple",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Tyrian_purple.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Zarosian insignia",
                        "qty": "1",
                        "rarity": "150/22,000",
                        "img": "/images/Zarosian_insignia.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Aetherium alloy",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Aetherium_alloy.png"
                    },
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Armadylean yellow",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Armadylean_yellow.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Quintessence",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Quintessence.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Stormguard steel",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Stormguard_steel.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vellum",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Vellum.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Wings of War",
                        "qty": "1",
                        "rarity": "150/28,000",
                        "img": "/images/Wings_of_War.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Animal furs",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Animal_furs.png"
                    },
                    {
                        "item": "Fossilised bone",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Fossilised_bone.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Leather scraps",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Leather_scraps.png"
                    },
                    {
                        "item": "Malachite green",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Malachite_green.png"
                    },
                    {
                        "item": "Mark of the Kyzaj",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Mark_of_the_Kyzaj.png"
                    },
                    {
                        "item": "Samite silk",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Samite_silk.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Soapstone.png"
                    },
                    {
                        "item": "Third Age iron",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Third_Age_iron.png"
                    },
                    {
                        "item": "Vulcanised rubber",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Vulcanised_rubber.png"
                    },
                    {
                        "item": "Warforged bronze",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Warforged_bronze.png"
                    },
                    {
                        "item": "White oak",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/White_oak.png"
                    },
                    {
                        "item": "Yu'biusk clay",
                        "qty": "1",
                        "rarity": "150/26,000",
                        "img": "/images/Yu%27biusk_clay.png"
                    }
                ]
            },
            {
                "group": "Material",
                "drops": [
                    {
                        "item": "Carbon black",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Carbon_black.png"
                    },
                    {
                        "item": "Compass rose",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Compass_rose.png"
                    },
                    {
                        "item": "Dragon metal",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Dragon_metal.png"
                    },
                    {
                        "item": "Felt",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Felt.png"
                    },
                    {
                        "item": "Goldrune",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Goldrune.png"
                    },
                    {
                        "item": "Orgone",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Orgone.png"
                    },
                    {
                        "item": "Orthenglass",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Orthenglass.png"
                    },
                    {
                        "item": "Soapstone",
                        "qty": "1",
                        "rarity": "150/16,000",
                        "img": "/images/Soapstone.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Nothing",
                        "qty": "N/A",
                        "rarity": "2/2,000",
                        "img": "/images/Nothing.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Venator dagger (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Venator_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Venator light crossbow (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Venator_light_crossbow_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary gladius (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Legionary_gladius_%28damaged%29.png"
                    },
                    {
                        "item": "Legionary square shield (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Legionary_square_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Primis Elementis standard (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Primis_Elementis_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Zaros effigy (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Zaros_effigy_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian training dummy (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Zarosian_training_dummy_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Legatus_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Solem in Umbra' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Solem_in_Umbra%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient timepiece (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Ancient_timepiece_%28damaged%29.png"
                    },
                    {
                        "item": "Legatus pendant (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Legatus_pendant_%28damaged%29.png"
                    },
                    {
                        "item": "'Incite Fear' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Incite_Fear%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex signet ring (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Pontifex_signet_ring_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial mace (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Ceremonial_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex Maximus figurine (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Pontifex_Maximus_figurine_%28damaged%29.png"
                    },
                    {
                        "item": "'Consensus ad Idem' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Consensus_ad_Idem%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex censer (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Pontifex_censer_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex crozier (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Pontifex_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "Pontifex mitre (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Pontifex_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "'Exsanguinate' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Exsanguinate%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Necromantic focus (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Necromantic_focus_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian ewer (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Zarosian_ewer_%28damaged%29.png"
                    },
                    {
                        "item": "Zarosian stein (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Zarosian_stein_%28damaged%29.png"
                    },
                    {
                        "item": "'Smoke Cloud' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Smoke_Cloud%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Vigorem vial (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Vigorem_vial_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient magic tablet (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Ancient_magic_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "'Animate Dead' spell scroll (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Animate_Dead%27_spell_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "Portable phylactery (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Portable_phylactery_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian hood (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Praetorian_hood_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian robes (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Praetorian_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Praetorian staff (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Praetorian_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Ancient globe (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Ancient_globe_%28damaged%29.png"
                    },
                    {
                        "item": "Battle plans (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/Battle_plans_%28damaged%29.png"
                    },
                    {
                        "item": "'Prima Legio' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/68,000",
                        "img": "/images/%27Prima_Legio%27_painting_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Hookah pipe (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Hookah_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Opulent wine goblet (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Opulent_wine_goblet_%28damaged%29.png"
                    },
                    {
                        "item": "Crest of Dagon (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Crest_of_Dagon_%28damaged%29.png"
                    },
                    {
                        "item": "'Disorder' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Disorder%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "Imp mask (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Imp_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Lesser demon mask (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Lesser_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Greater demon mask (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Greater_demon_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Order of Dis robes (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Order_of_Dis_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual dagger (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Ritual_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Branding iron (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Branding_iron_%28damaged%29.png"
                    },
                    {
                        "item": "Manacles (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Manacles_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lake of Fire' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27The_Lake_of_Fire%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'Lust' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Lust%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos star (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Chaos_star_%28damaged%29.png"
                    },
                    {
                        "item": "Spiked dog collar (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Spiked_dog_collar_%28damaged%29.png"
                    },
                    {
                        "item": "Larupia trophy (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Larupia_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Lion trophy (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Lion_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "She-wolf trophy (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/She-wolf_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "'Torment' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Torment%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "'Pandemonium' tapestry (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Pandemonium%27_tapestry_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire haladie (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Hellfire_haladie_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire katar (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Hellfire_katar_%28damaged%29.png"
                    },
                    {
                        "item": "Hellfire zaghnal (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Hellfire_zaghnal_%28damaged%29.png"
                    },
                    {
                        "item": "'Possession' metal sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Possession%27_metal_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Trishula (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Trishula_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth piercing (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Tsutsaroth_piercing_%28damaged%29.png"
                    },
                    {
                        "item": "Chaos Elemental trophy (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Chaos_Elemental_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Virius trophy (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Virius_trophy_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth helm (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Tsutsaroth_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth pauldron (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Tsutsaroth_pauldron_%28damaged%29.png"
                    },
                    {
                        "item": "Tsutsaroth urumi (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Tsutsaroth_urumi_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "'Frying pan' (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Frying_pan%27_%28damaged%29.png"
                    },
                    {
                        "item": "Hallowed lantern (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Hallowed_lantern_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn ornament (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Ceremonial_unicorn_ornament_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial unicorn saddle (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Ceremonial_unicorn_saddle_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight harp (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Everlight_harp_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight trumpet (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Everlight_trumpet_%28damaged%29.png"
                    },
                    {
                        "item": "Everlight violin (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Everlight_violin_%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (female)(damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Folded-arm_figurine_%28female%29%28damaged%29.png"
                    },
                    {
                        "item": "Folded-arm figurine (male)(damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Folded-arm_figurine_%28male%29%28damaged%29.png"
                    },
                    {
                        "item": "Dominion discus (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Dominion_discus_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion javelin (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Dominion_javelin_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion pelte shield (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Dominion_pelte_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Bronze Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Bronze_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Silver Dominion medal (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Silver_Dominion_medal_%28damaged%29.png"
                    },
                    {
                        "item": "Dominion torch (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Dominion_torch_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative vase (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Decorative_vase_%28damaged%29.png"
                    },
                    {
                        "item": "Kantharos cup (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Kantharos_cup_%28damaged%29.png"
                    },
                    {
                        "item": "Patera bowl (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Patera_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Dominarian device (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Dominarian_device_%28damaged%29.png"
                    },
                    {
                        "item": "Fishing trident (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Fishing_trident_%28damaged%29.png"
                    },
                    {
                        "item": "Amphora (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Rod of Asclepius (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Rod_of_Asclepius_%28damaged%29.png"
                    },
                    {
                        "item": "Kopis dagger (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Kopis_dagger_%28damaged%29.png"
                    },
                    {
                        "item": "Xiphos short sword (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Xiphos_short_sword_%28damaged%29.png"
                    },
                    {
                        "item": "'Hallowed Be the Everlight' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27Hallowed_Be_the_Everlight%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Lord of Light' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27The_Lord_of_Light%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Pride of Padosan' painting (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27The_Pride_of_Padosan%27_painting_%28damaged%29.png"
                    },
                    {
                        "item": "'The Enlightened Soul' scroll (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27The_Enlightened_Soul%27_scroll_%28damaged%29.png"
                    },
                    {
                        "item": "'The Eudoxian Elements' tablet (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/%27The_Eudoxian_Elements%27_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Doru spear (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Doru_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Kontos lance (damaged)",
                        "qty": "1",
                        "rarity": "2/62,000",
                        "img": "/images/Kontos_lance_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Apex cap (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Apex_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Curse tablet (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Curse_tablet_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of shadow (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Funerary_urn_of_shadow_%28damaged%29.png"
                    },
                    {
                        "item": "Infula robes (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Infula_robes_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of smoke (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Funerary_urn_of_smoke_%28damaged%29.png"
                    },
                    {
                        "item": "Hand of the Ancients (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Hand_of_the_Ancients_%28damaged%29.png"
                    },
                    {
                        "item": "Decorative amphora (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Decorative_amphora_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of ice (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Funerary_urn_of_ice_%28damaged%29.png"
                    },
                    {
                        "item": "Loarnab rod (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Loarnab_rod_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial armour (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Inquisitor%27s_ceremonial_armour_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's ceremonial mask (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Inquisitor%27s_ceremonial_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Inquisitor's seal (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Inquisitor%27s_seal_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator helmet (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Gladiator_helmet_%28damaged%29.png"
                    },
                    {
                        "item": "Gladiator sword (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Gladiator_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of blood (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Funerary_urn_of_blood_%28damaged%29.png"
                    },
                    {
                        "item": "Funerary urn of miasma (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Funerary_urn_of_miasma_%28damaged%29.png"
                    },
                    {
                        "item": "Model chariot (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/Model_chariot_%28damaged%29.png"
                    },
                    {
                        "item": "'The Serpent's Fall' carving (damaged)",
                        "qty": "1",
                        "rarity": "2/36,000",
                        "img": "/images/%27The_Serpent%27s_Fall%27_carving_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Ikovian gerege (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ikovian_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Toy glider (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Toy_glider_%28damaged%29.png"
                    },
                    {
                        "item": "Toy war golem (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Toy_war_golem_%28damaged%29.png"
                    },
                    {
                        "item": "Avian song-egg player (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Avian_song-egg_player_%28damaged%29.png"
                    },
                    {
                        "item": "Keshik drum (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Keshik_drum_%28damaged%29.png"
                    },
                    {
                        "item": "Morin khuur (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Morin_khuur_%28damaged%29.png"
                    },
                    {
                        "item": "Aviansie dreamcoat (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Aviansie_dreamcoat_%28damaged%29.png"
                    },
                    {
                        "item": "Peacocking parasol (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Peacocking_parasol_%28damaged%29.png"
                    },
                    {
                        "item": "Ceremonial plume (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ceremonial_plume_%28damaged%29.png"
                    },
                    {
                        "item": "Hawkeye lens multi-vision scope (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Hawkeye_lens_multi-vision_scope_%28damaged%29.png"
                    },
                    {
                        "item": "Talon-3 razor wing (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Talon-3_razor_wing_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype gravimeter (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Prototype_gravimeter_%28damaged%29.png"
                    },
                    {
                        "item": "Songbird recorder (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Songbird_recorder_%28damaged%29.png"
                    },
                    {
                        "item": "Dayguard shield (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Dayguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Stormguard gerege (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Stormguard_gerege_%28damaged%29.png"
                    },
                    {
                        "item": "Golem heart (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Golem_heart_%28damaged%29.png"
                    },
                    {
                        "item": "Golem instruction (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Golem_instruction_%28damaged%29.png"
                    },
                    {
                        "item": "Blackfire lance (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Blackfire_lance_%28damaged%29.png"
                    },
                    {
                        "item": "Nightguard shield (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Nightguard_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Flat cap (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Flat_cap_%28damaged%29.png"
                    },
                    {
                        "item": "Night owl flight goggles (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Night_owl_flight_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godbow (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Prototype_godbow_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godstaff (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Prototype_godstaff_%28damaged%29.png"
                    },
                    {
                        "item": "Prototype godsword (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Prototype_godsword_%28damaged%29.png"
                    },
                    {
                        "item": "Chuluu stone (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Chuluu_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Quintessence counter (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Quintessence_counter_%28damaged%29.png"
                    },
                    {
                        "item": "Spherical astrolabe (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Spherical_astrolabe_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Castle gatestone (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Castle_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Engraved ring of kinship (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Engraved_ring_of_kinship_%28damaged%29.png"
                    },
                    {
                        "item": "Exploratory totem (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Exploratory_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Excavator portal mine (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Excavator_portal_mine_%28damaged%29.png"
                    },
                    {
                        "item": "Storage totem (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Storage_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Plant seed satchel (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Plant_seed_satchel_%28damaged%29.png"
                    },
                    {
                        "item": "Snuff box (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Snuff_box_%28damaged%29.png"
                    },
                    {
                        "item": "Spent summoning charm (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Spent_summoning_charm_%28damaged%29.png"
                    },
                    {
                        "item": "'Friendship bracelet' (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/%27Friendship_bracelet%27_%28damaged%29.png"
                    },
                    {
                        "item": "Homely totem (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Homely_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Projection attuner (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Projection_attuner_%28damaged%29.png"
                    },
                    {
                        "item": "Golden projection 'needle' (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Golden_projection_%27needle%27_%28damaged%29.png"
                    },
                    {
                        "item": "Comfort gatestone (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Comfort_gatestone_%28damaged%29.png"
                    },
                    {
                        "item": "Halak's cube (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Halak%27s_cube_%28damaged%29.png"
                    },
                    {
                        "item": "Portable portal generator (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Portable_portal_generator_%28damaged%29.png"
                    },
                    {
                        "item": "Warped trinket (damaged)",
                        "qty": "1",
                        "rarity": "2/32,000",
                        "img": "/images/Warped_trinket_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Ekeleshuun blinder mask (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ekeleshuun_blinder_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Narogoshuun 'Hob-da-Gob' ball (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Narogoshuun_%27Hob-da-Gob%27_ball_%28damaged%29.png"
                    },
                    {
                        "item": "Rekeshuun war tether (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Rekeshuun_war_tether_%28damaged%29.png"
                    },
                    {
                        "item": "Ogre Kyzaj axe (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ogre_Kyzaj_axe_%28damaged%29.png"
                    },
                    {
                        "item": "Ork cleaver sword (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ork_cleaver_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Thorobshuun battle standard (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Thorobshuun_battle_standard_%28damaged%29.png"
                    },
                    {
                        "item": "Yurkolgokh stink grenade (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Yurkolgokh_stink_grenade_%28damaged%29.png"
                    },
                    {
                        "item": "High priest crozier (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/High_priest_crozier_%28damaged%29.png"
                    },
                    {
                        "item": "High priest mitre (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/High_priest_mitre_%28damaged%29.png"
                    },
                    {
                        "item": "High priest orb (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/High_priest_orb_%28damaged%29.png"
                    },
                    {
                        "item": "Beastkeeper helm (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Beastkeeper_helm_%28damaged%29.png"
                    },
                    {
                        "item": "Idithuun horn ring (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Idithuun_horn_ring_%28damaged%29.png"
                    },
                    {
                        "item": "'Nosorog!' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/%27Nosorog%21%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg megahitter (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ourg_megahitter_%28damaged%29.png"
                    },
                    {
                        "item": "Ourg tower/goblin cower shield (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Ourg_tower-goblin_cower_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Garagorshuun anchor (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Garagorshuun_anchor_%28damaged%29.png"
                    },
                    {
                        "item": "'Forged in War' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/%27Forged_in_War%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Dorgeshuun spear (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Dorgeshuun_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Huzamogaarb chaos crown (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Huzamogaarb_chaos_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Saragorgak star crown (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Saragorgak_star_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Drogokishuun hook sword (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Drogokishuun_hook_sword_%28damaged%29.png"
                    },
                    {
                        "item": "Hobgoblin mansticker (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Hobgoblin_mansticker_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra chieftain crown (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Kal-i-kra_chieftain_crown_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra mace (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Kal-i-kra_mace_%28damaged%29.png"
                    },
                    {
                        "item": "Kal-i-kra warhorn (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Kal-i-kra_warhorn_%28damaged%29.png"
                    },
                    {
                        "item": "'Da Boss Man' sculpture (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/%27Da_Boss_Man%27_sculpture_%28damaged%29.png"
                    },
                    {
                        "item": "Horogothgar cooking pot (damaged)",
                        "qty": "1",
                        "rarity": "2/54,000",
                        "img": "/images/Horogothgar_cooking_pot_%28damaged%29.png"
                    }
                ]
            },
            {
                "group": "Artefact",
                "drops": [
                    {
                        "item": "Pasaha (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Pasaha_%28damaged%29.png"
                    },
                    {
                        "item": "Ritual bell (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Ritual_bell_%28damaged%29.png"
                    },
                    {
                        "item": "Kilaya (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Kilaya_%28damaged%29.png"
                    },
                    {
                        "item": "Vazara (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Vazara_%28damaged%29.png"
                    },
                    {
                        "item": "Death mask (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Death_mask_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin calendar (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Dragonkin_calendar_%28damaged%29.png"
                    },
                    {
                        "item": "Dragonkin staff (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Dragonkin_staff_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon scalpel (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Dragon_scalpel_%28damaged%29.png"
                    },
                    {
                        "item": "Protective goggles (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Protective_goggles_%28damaged%29.png"
                    },
                    {
                        "item": "Dragon burner (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Dragon_burner_%28damaged%29.png"
                    },
                    {
                        "item": "Orthenglass flask (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Orthenglass_flask_%28damaged%29.png"
                    },
                    {
                        "item": "Meditation pipe (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Meditation_pipe_%28damaged%29.png"
                    },
                    {
                        "item": "Personal totem (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Personal_totem_%28damaged%29.png"
                    },
                    {
                        "item": "Singing bowl (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Singing_bowl_%28damaged%29.png"
                    },
                    {
                        "item": "Lingam stone (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Lingam_stone_%28damaged%29.png"
                    },
                    {
                        "item": "Master control (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Master_control_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo hard hat (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Xolo_hard_hat_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo pickaxe (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Xolo_pickaxe_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo shield (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Xolo_shield_%28damaged%29.png"
                    },
                    {
                        "item": "Xolo spear (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Xolo_spear_%28damaged%29.png"
                    },
                    {
                        "item": "Gold dish (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/Gold_dish_%28damaged%29.png"
                    },
                    {
                        "item": "'Raksha' idol (damaged)",
                        "qty": "1",
                        "rarity": "2/44,000",
                        "img": "/images/%27Raksha%27_idol_%28damaged%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Monkey knife fighter",
        "name": "Monkey knife fighter",
        "category": "standard",
        "level": "70",
        "xp": "150.0",
        "stun": "5 ticks (3s)",
        "damage": "60 life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "1–50",
                        "rarity": "Common",
                        "img": "/images/Coins_25.png"
                    },
                    {
                        "item": "Black knife",
                        "qty": "1–3; 5; 10",
                        "rarity": "Common",
                        "img": "/images/Black_knife.png"
                    },
                    {
                        "item": "Off-hand black knife",
                        "qty": "1–3; 5; 10",
                        "rarity": "Common",
                        "img": "/images/Off-hand_black_knife.png"
                    },
                    {
                        "item": "Lobster",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Lobster.png"
                    },
                    {
                        "item": "Small bladed mithril salvage",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Small_bladed_mithril_salvage.png"
                    },
                    {
                        "item": "Small bladed adamant salvage",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Small_bladed_adamant_salvage.png"
                    },
                    {
                        "item": "Medium bladed rune salvage",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Medium_bladed_rune_salvage.png"
                    },
                    {
                        "item": "Dragon scimitar",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Dragon_scimitar.png"
                    },
                    {
                        "item": "Monkey knife",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Monkey_knife.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Farmer Rowan",
        "name": "Farmer Rowan",
        "category": "standard",
        "level": "38",
        "xp": "43.0",
        "stun": "5 ticks (3s)",
        "damage": "30 + 3% of base life points",
        "multi": [
            "48 38",
            "58 48",
            "68 58"
        ],
        "loot": [
            {
                "group": "Coins",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "50–100",
                        "rarity": "695/1,000",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "Allotments",
                "drops": [
                    {
                        "item": "Watermelon seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Watermelon_seed_5.png"
                    }
                ]
            },
            {
                "group": "Bushes",
                "drops": [
                    {
                        "item": "Dwellberry seed",
                        "qty": "1",
                        "rarity": "45/1,000",
                        "img": "/images/Dwellberry_seed_5.png"
                    },
                    {
                        "item": "Jangerberry seed",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Jangerberry_seed_5.png"
                    },
                    {
                        "item": "Whiteberry seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Whiteberry_seed_5.png"
                    },
                    {
                        "item": "Poison ivy seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Poison_ivy_seed_5.png"
                    }
                ]
            },
            {
                "group": "Flowers",
                "drops": [
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    }
                ]
            },
            {
                "group": "Fruit trees",
                "drops": [
                    {
                        "item": "Banana tree seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Banana_tree_seed_5.png"
                    },
                    {
                        "item": "Orange tree seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Orange_tree_seed_5.png"
                    },
                    {
                        "item": "Curry tree seed",
                        "qty": "1",
                        "rarity": "6/1,000",
                        "img": "/images/Curry_tree_seed_5.png"
                    },
                    {
                        "item": "Pineapple seed",
                        "qty": "1",
                        "rarity": "4/1,000",
                        "img": "/images/Pineapple_seed_5.png"
                    },
                    {
                        "item": "Papaya tree seed",
                        "qty": "1",
                        "rarity": "4/1,000",
                        "img": "/images/Papaya_tree_seed_5.png"
                    },
                    {
                        "item": "Palm tree seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Palm_tree_seed_5.png"
                    }
                ]
            },
            {
                "group": "Herbs",
                "drops": [
                    {
                        "item": "Ranarr seed",
                        "qty": "1",
                        "rarity": "25/1,000",
                        "img": "/images/Ranarr_seed_5.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "25/1,000",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Toadflax seed",
                        "qty": "1",
                        "rarity": "15/1,000",
                        "img": "/images/Toadflax_seed_5.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Irit_seed_5.png"
                    },
                    {
                        "item": "Wergali seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Wergali_seed_5.png"
                    },
                    {
                        "item": "Avantoe seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Avantoe_seed_5.png"
                    },
                    {
                        "item": "Kwuarm seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Kwuarm_seed_5.png"
                    },
                    {
                        "item": "Snapdragon seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Snapdragon_seed_5.png"
                    },
                    {
                        "item": "Cadantine seed",
                        "qty": "1",
                        "rarity": "2/1,000",
                        "img": "/images/Cadantine_seed_5.png"
                    }
                ]
            },
            {
                "group": "Hops",
                "drops": [
                    {
                        "item": "Grapevine seed",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Grapevine_seed_2.png"
                    }
                ]
            },
            {
                "group": "Trees",
                "drops": [
                    {
                        "item": "Maple seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Maple_seed_5.png"
                    },
                    {
                        "item": "Yew seed",
                        "qty": "1",
                        "rarity": "5/1,000",
                        "img": "/images/Yew_seed_5.png"
                    }
                ]
            },
            {
                "group": "Special",
                "drops": [
                    {
                        "item": "Bittercap mushroom spore",
                        "qty": "1",
                        "rarity": "20/1,000",
                        "img": "/images/Bittercap_mushroom_spore_5.png"
                    },
                    {
                        "item": "Evil turnip seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Evil_turnip_seed_5.png"
                    },
                    {
                        "item": "Cactus seed",
                        "qty": "1",
                        "rarity": "10/1,000",
                        "img": "/images/Cactus_seed_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Dig Site workman",
        "name": "Dig Site workman",
        "category": "standard",
        "level": "25",
        "xp": "10.4",
        "stun": "5 ticks (3s)",
        "damage": "10 life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "10",
                        "rarity": "1/11",
                        "img": "/images/Coins_5.png"
                    },
                    {
                        "item": "Specimen brush",
                        "qty": "1",
                        "rarity": "3/11",
                        "img": "/images/Specimen_brush.png"
                    },
                    {
                        "item": "Rope",
                        "qty": "1",
                        "rarity": "1/11",
                        "img": "/images/Rope.png"
                    },
                    {
                        "item": "Bucket",
                        "qty": "1",
                        "rarity": "1/11",
                        "img": "/images/Bucket.png"
                    },
                    {
                        "item": "Leather gloves",
                        "qty": "1",
                        "rarity": "1/11",
                        "img": "/images/Leather_gloves.png"
                    },
                    {
                        "item": "Spade",
                        "qty": "1",
                        "rarity": "1/11",
                        "img": "/images/Spade.png"
                    },
                    {
                        "item": "Animal skull (The Dig Site)",
                        "qty": "1",
                        "rarity": "3/11",
                        "img": "/images/Animal_skull_%28The_Dig_Site%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Villager (Wendlewick)",
        "name": "Villager (Wendlewick)",
        "category": "standard",
        "level": "1",
        "xp": "8.0",
        "stun": "5 ticks (3s)",
        "damage": "10 + 3% of base life points",
        "multi": [
            "11 1",
            "21 11",
            "31 21"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "20",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Villager",
        "name": "Villager",
        "category": "standard",
        "level": "1",
        "xp": "0",
        "stun": "5 ticks (3s)",
        "damage": "20 life points",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "5",
                        "rarity": "Always",
                        "img": "/images/Coins_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Ranger",
        "name": "Ranger",
        "category": "standard",
        "level": "40",
        "xp": "46.8",
        "stun": "5 ticks (3s)",
        "damage": "20 + 3% of base life points",
        "multi": [
            "50 40",
            "60 50",
            "70 60"
        ],
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "20–60",
                        "rarity": "Always",
                        "img": "/images/Coins_25.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Bakery Stall",
        "name": "Bakery Stall",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "1.8 seconds",
        "location": "Catherby , Lumbridge Market , Wendlewick · East Ardougne · Keldagrim",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Bread",
                        "qty": "1",
                        "rarity": "5/20",
                        "img": "/images/Bread.png"
                    },
                    {
                        "item": "Cake",
                        "qty": "1",
                        "rarity": "13/20",
                        "img": "/images/Cake.png"
                    },
                    {
                        "item": "Chocolate slice",
                        "qty": "1",
                        "rarity": "2/20",
                        "img": "/images/Chocolate_slice.png"
                    }
                ]
            }
        ],
        "aka": [
            "Baker's stall (Ardougne)",
            "Bakery stall (Keldagrim)"
        ]
    },
    {
        "page": "Gem stall",
        "name": "Gem stall",
        "category": "stall",
        "level": "75",
        "xp": "160.0",
        "respawn": "80.4 seconds",
        "location": "Ardougne market · Keldagrim",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Uncut sapphire",
                        "qty": "1",
                        "rarity": "105/128",
                        "img": "/images/Uncut_sapphire.png"
                    },
                    {
                        "item": "Uncut emerald",
                        "qty": "1",
                        "rarity": "17/128",
                        "img": "/images/Uncut_emerald.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "1",
                        "rarity": "5/128",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Uncut diamond",
                        "qty": "1",
                        "rarity": "1/128",
                        "img": "/images/Uncut_diamond.png"
                    }
                ]
            }
        ],
        "aka": [
            "Gem stall (Keldagrim)"
        ]
    },
    {
        "page": "Silk stall",
        "name": "Silk stall",
        "category": "stall",
        "level": "20",
        "xp": "24.0",
        "respawn": "4 seconds",
        "location": "Ardougne",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Silk",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Silk.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Fur stall",
        "name": "Fur stall",
        "category": "stall",
        "level": "35",
        "xp": "36.0",
        "respawn": "15 seconds",
        "location": "Rellekka · Ardougne",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Grey wolf fur",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Grey_wolf_fur.png"
                    }
                ]
            }
        ],
        "aka": [
            "Fur stall (Ardougne)"
        ]
    },
    {
        "page": "Market stall",
        "name": "Market stall",
        "category": "stall",
        "level": "22",
        "xp": "27.0",
        "respawn": "7 seconds",
        "location": "Draynor Village",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Jug of wine",
                        "qty": "1",
                        "rarity": "~257/1,058",
                        "img": "/images/Jug_of_wine.png"
                    },
                    {
                        "item": "Grapes",
                        "qty": "1",
                        "rarity": "~372/1,058",
                        "img": "/images/Grapes.png"
                    },
                    {
                        "item": "Jug of water",
                        "qty": "1",
                        "rarity": "~416/1,058",
                        "img": "/images/Jug_of_water.png"
                    },
                    {
                        "item": "Wine of Guthix",
                        "qty": "1",
                        "rarity": "~6/1,058",
                        "img": "/images/Wine_of_Guthix.png"
                    },
                    {
                        "item": "Wine of Saradomin",
                        "qty": "1",
                        "rarity": "~4/1,058",
                        "img": "/images/Wine_of_Saradomin.png"
                    },
                    {
                        "item": "Wine of Zamorak",
                        "qty": "1",
                        "rarity": "~3/1,058",
                        "img": "/images/Wine_of_Zamorak.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Veg stall",
        "name": "Veg stall",
        "category": "stall",
        "level": "2",
        "xp": "10.0",
        "respawn": "1.2 seconds",
        "location": "Miscellania Etceteria",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Cabbage",
                        "qty": "1",
                        "rarity": "~1/5",
                        "img": "/images/Cabbage.png"
                    },
                    {
                        "item": "Raw potato",
                        "qty": "1",
                        "rarity": "~1/3.5",
                        "img": "/images/Raw_potato.png"
                    },
                    {
                        "item": "Onion",
                        "qty": "1",
                        "rarity": "~1/5",
                        "img": "/images/Onion.png"
                    },
                    {
                        "item": "Tomato",
                        "qty": "1",
                        "rarity": "~1/5",
                        "img": "/images/Tomato.png"
                    },
                    {
                        "item": "Garlic",
                        "qty": "1",
                        "rarity": "~1/10",
                        "img": "/images/Garlic.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Fish stall",
        "name": "Fish stall",
        "category": "stall",
        "level": "42",
        "xp": "42.0",
        "respawn": "7.2 seconds",
        "location": "Rellekka Miscellania Etceteria · Catherby , Wendlewick",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Raw salmon",
                        "qty": "1",
                        "rarity": "105/140",
                        "img": "/images/Raw_salmon.png"
                    },
                    {
                        "item": "Raw tuna",
                        "qty": "1",
                        "rarity": "30/140",
                        "img": "/images/Raw_tuna.png"
                    },
                    {
                        "item": "Raw lobster",
                        "qty": "1",
                        "rarity": "5/140",
                        "img": "/images/Raw_lobster.png"
                    }
                ]
            }
        ],
        "aka": [
            "Fish Stall (Catherby)"
        ]
    },
    {
        "page": "Silver stall",
        "name": "Silver stall",
        "category": "stall",
        "level": "50",
        "xp": "54.0",
        "respawn": "30 seconds",
        "location": "Ardougne",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Silver ore",
                        "qty": "1",
                        "rarity": "8/10",
                        "img": "/images/Silver_ore.png"
                    },
                    {
                        "item": "Silver stone spirit",
                        "qty": "1",
                        "rarity": "2/10",
                        "img": "/images/Silver_stone_spirit.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crafting Stall (Ape Atoll)",
        "name": "Crafting Stall",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Ape Atoll · Keldagrim",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Chisel",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Chisel.png"
                    },
                    {
                        "item": "Necklace mould",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Necklace_mould.png"
                    },
                    {
                        "item": "Ring mould",
                        "qty": "1",
                        "rarity": "Unknown",
                        "img": "/images/Ring_mould.png"
                    }
                ]
            }
        ],
        "aka": [
            "Crafting stall (Keldagrim)"
        ]
    },
    {
        "page": "Wine Stall",
        "name": "Wine Stall",
        "category": "stall",
        "level": "22",
        "xp": "27.0",
        "respawn": "7.2 seconds",
        "location": "Catherby , Lumbridge Market , Wendlewick",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Jug",
                        "qty": "1",
                        "rarity": "~56/140",
                        "img": "/images/Jug.png"
                    },
                    {
                        "item": "Jug of water",
                        "qty": "1",
                        "rarity": "~25/140",
                        "img": "/images/Jug_of_water.png"
                    },
                    {
                        "item": "Grapes",
                        "qty": "1",
                        "rarity": "~23/140",
                        "img": "/images/Grapes.png"
                    },
                    {
                        "item": "Jug of wine",
                        "qty": "1",
                        "rarity": "~22/140",
                        "img": "/images/Jug_of_wine.png"
                    },
                    {
                        "item": "Bottle of wine",
                        "qty": "1",
                        "rarity": "~14/140",
                        "img": "/images/Bottle_of_wine.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Tea stall",
        "name": "Tea stall",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Varrock",
        "members": false,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Cup of tea",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Cup_of_tea.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Spice stall",
        "name": "Spice stall",
        "category": "stall",
        "level": "65",
        "xp": "81.0",
        "respawn": "28 seconds",
        "location": "East Ardougne",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Spice",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Spice.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Counter (Gu'tanoth)",
        "name": "Counter (Gu'tanoth)",
        "category": "stall",
        "level": "15",
        "xp": "6.5",
        "respawn": "7 seconds",
        "location": "Gu'Tanoth",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Rock cake",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Rock_cake.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Seed Stall",
        "name": "Seed Stall",
        "category": "stall",
        "level": "27",
        "xp": "10.0",
        "respawn": "11 seconds",
        "location": "Lumbridge Market",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Potato seed",
                        "qty": "1",
                        "rarity": "~58/600",
                        "img": "/images/Potato_seed_5.png"
                    },
                    {
                        "item": "Onion seed",
                        "qty": "1",
                        "rarity": "~58/600",
                        "img": "/images/Onion_seed_5.png"
                    },
                    {
                        "item": "Cabbage seed",
                        "qty": "1",
                        "rarity": "~46/600",
                        "img": "/images/Cabbage_seed_5.png"
                    },
                    {
                        "item": "Tomato seed",
                        "qty": "1",
                        "rarity": "~18/600",
                        "img": "/images/Tomato_seed_5.png"
                    },
                    {
                        "item": "Sweetcorn seed",
                        "qty": "1",
                        "rarity": "~22/600",
                        "img": "/images/Sweetcorn_seed_5.png"
                    },
                    {
                        "item": "Strawberry seed",
                        "qty": "1",
                        "rarity": "~13/600",
                        "img": "/images/Strawberry_seed_5.png"
                    },
                    {
                        "item": "Watermelon seed",
                        "qty": "1",
                        "rarity": "~8/600",
                        "img": "/images/Watermelon_seed_5.png"
                    },
                    {
                        "item": "Barley seed",
                        "qty": "1",
                        "rarity": "~66/600",
                        "img": "/images/Barley_seed_5.png"
                    },
                    {
                        "item": "Hammerstone seed",
                        "qty": "1",
                        "rarity": "~76/600",
                        "img": "/images/Hammerstone_seed_5.png"
                    },
                    {
                        "item": "Asgarnian seed",
                        "qty": "1",
                        "rarity": "~46/600",
                        "img": "/images/Asgarnian_seed_5.png"
                    },
                    {
                        "item": "Jute seed",
                        "qty": "1",
                        "rarity": "~29/600",
                        "img": "/images/Jute_seed_5.png"
                    },
                    {
                        "item": "Yanillian seed",
                        "qty": "1",
                        "rarity": "~32/600",
                        "img": "/images/Yanillian_seed_5.png"
                    },
                    {
                        "item": "Krandorian seed",
                        "qty": "1",
                        "rarity": "~14/600",
                        "img": "/images/Krandorian_seed_5.png"
                    },
                    {
                        "item": "Wildblood seed",
                        "qty": "1",
                        "rarity": "~4/600",
                        "img": "/images/Wildblood_seed_5.png"
                    },
                    {
                        "item": "Marigold seed",
                        "qty": "1",
                        "rarity": "~73/600",
                        "img": "/images/Marigold_seed_5.png"
                    },
                    {
                        "item": "Rosemary seed",
                        "qty": "1",
                        "rarity": "~22/600",
                        "img": "/images/Rosemary_seed_5.png"
                    },
                    {
                        "item": "Nasturtium seed",
                        "qty": "1",
                        "rarity": "~15/600",
                        "img": "/images/Nasturtium_seed_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crossbow stall",
        "name": "Crossbow stall",
        "category": "stall",
        "level": "49",
        "xp": "52.0",
        "respawn": "11 seconds",
        "location": "Keldagrim",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Bronze bolts",
                        "qty": "3",
                        "rarity": "Common",
                        "img": "/images/Bronze_bolts_5.png"
                    },
                    {
                        "item": "Bronze limbs",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bronze_limbs.png"
                    },
                    {
                        "item": "Wooden stock",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Wooden_stock.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Lamp stall",
        "name": "Lamp stall",
        "category": "stall",
        "level": "46",
        "xp": "57.5",
        "respawn": "6.6 seconds",
        "location": "Menaphos",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Nothing",
                        "qty": "N/A",
                        "rarity": "Common",
                        "img": "/images/Nothing.png"
                    },
                    {
                        "item": "Small XP lamp",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Small_XP_lamp.png"
                    },
                    {
                        "item": "Fly dragon in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Fly_dragon_in_amber.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Silk stall (Menaphos)",
        "name": "Silk stall (Menaphos)",
        "category": "stall",
        "level": "20",
        "xp": "24.0",
        "respawn": "3.6 seconds",
        "location": "Menaphos Merchant district",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Silk",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Silk.png"
                    },
                    {
                        "item": "Fly dragon in amber",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Fly_dragon_in_amber.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Vegetable Stalls",
        "name": "Vegetable Stalls",
        "category": "stall",
        "level": "2",
        "xp": "10.0",
        "respawn": "2 seconds",
        "location": "Catherby , Lumbridge Market , Wendlewick",
        "members": false,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Raw potato",
                        "qty": "1",
                        "rarity": "~707/2,349",
                        "img": "/images/Raw_potato.png"
                    },
                    {
                        "item": "Onion",
                        "qty": "1",
                        "rarity": "~449/2,349",
                        "img": "/images/Onion.png"
                    },
                    {
                        "item": "Cabbage",
                        "qty": "1",
                        "rarity": "~475/2,349",
                        "img": "/images/Cabbage.png"
                    },
                    {
                        "item": "Tomato",
                        "qty": "1",
                        "rarity": "~494/2,349",
                        "img": "/images/Tomato.png"
                    },
                    {
                        "item": "Garlic",
                        "qty": "1",
                        "rarity": "~224/2,349",
                        "img": "/images/Garlic.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crafting stall (From Tiny Acorns)",
        "name": "Crafting stall (From Tiny Acorns)",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Varrock",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Toy baby dragon",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Toy_baby_dragon.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Crafting Stall (Lumbridge)",
        "name": "Crafting Stall (Lumbridge)",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Lumbridge Market",
        "members": false,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Chisel",
                        "qty": "1",
                        "rarity": "1/3",
                        "img": "/images/Chisel.png"
                    },
                    {
                        "item": "Necklace mould",
                        "qty": "1",
                        "rarity": "1/3",
                        "img": "/images/Necklace_mould.png"
                    },
                    {
                        "item": "Ring mould",
                        "qty": "1",
                        "rarity": "1/3",
                        "img": "/images/Ring_mould.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Scimitar Stall",
        "name": "Scimitar Stall",
        "category": "stall",
        "level": "65",
        "xp": "160.0",
        "respawn": "30 seconds",
        "location": "Ape Atoll",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Iron scimitar",
                        "qty": "1",
                        "rarity": "~55/76",
                        "img": "/images/Iron_scimitar.png"
                    },
                    {
                        "item": "Steel scimitar",
                        "qty": "1",
                        "rarity": "~21/76",
                        "img": "/images/Steel_scimitar.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Seed Stall (Draynor Village)",
        "name": "Seed Stall (Draynor Village)",
        "category": "stall",
        "level": "27",
        "xp": "10.0",
        "respawn": "6.6 seconds",
        "location": "Draynor Village",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Hammerstone seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Hammerstone_seed_5.png"
                    },
                    {
                        "item": "Potato seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Potato_seed_5.png"
                    },
                    {
                        "item": "Marigold seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Marigold_seed_5.png"
                    },
                    {
                        "item": "Onion seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Onion_seed_5.png"
                    },
                    {
                        "item": "Barley seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Barley_seed_5.png"
                    },
                    {
                        "item": "Asgarnian seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Asgarnian_seed_5.png"
                    },
                    {
                        "item": "Cabbage seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Cabbage_seed_5.png"
                    },
                    {
                        "item": "Yanillian seed",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Yanillian_seed_5.png"
                    },
                    {
                        "item": "Jute seed",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Jute_seed_5.png"
                    },
                    {
                        "item": "Tomato seed",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Tomato_seed_5.png"
                    },
                    {
                        "item": "Sweetcorn seed",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Sweetcorn_seed_5.png"
                    },
                    {
                        "item": "Rosemary seed",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Rosemary_seed_5.png"
                    },
                    {
                        "item": "Nasturtium seed",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Nasturtium_seed_5.png"
                    },
                    {
                        "item": "Krandorian seed",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Krandorian_seed_5.png"
                    },
                    {
                        "item": "Wildblood seed",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Wildblood_seed_5.png"
                    },
                    {
                        "item": "Watermelon seed",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Watermelon_seed_5.png"
                    },
                    {
                        "item": "Strawberry seed",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Strawberry_seed_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Magic Stall",
        "name": "Magic Stall",
        "category": "stall",
        "level": "65",
        "xp": "100.0",
        "respawn": "30 seconds",
        "location": "Ape Atoll",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Air rune",
                        "qty": "1",
                        "rarity": "~32/100",
                        "img": "/images/Air_rune.png"
                    },
                    {
                        "item": "Earth rune",
                        "qty": "1",
                        "rarity": "~41/100",
                        "img": "/images/Earth_rune.png"
                    },
                    {
                        "item": "Fire rune",
                        "qty": "1",
                        "rarity": "~27/100",
                        "img": "/images/Fire_rune.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "General Stall",
        "name": "General Stall",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Ape Atoll",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Empty pot",
                        "qty": "1",
                        "rarity": "9/27",
                        "img": "/images/Empty_pot.png"
                    },
                    {
                        "item": "Hammer",
                        "qty": "1",
                        "rarity": "9/27",
                        "img": "/images/Hammer.png"
                    },
                    {
                        "item": "Tinderbox",
                        "qty": "1",
                        "rarity": "9/27",
                        "img": "/images/Tinderbox.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Food Stall",
        "name": "Food Stall",
        "category": "stall",
        "level": "5",
        "xp": "16.0",
        "respawn": "7 seconds",
        "location": "Ape Atoll",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Banana",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Banana.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Silver stall (Keldagrim)",
        "name": "Silver stall (Keldagrim)",
        "category": "stall",
        "level": "50",
        "xp": "54.0",
        "respawn": "7.2 seconds",
        "location": "Keldagrim",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Silver ore",
                        "qty": "1",
                        "rarity": "Always",
                        "img": "/images/Silver_ore.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Zanaris Market seed stall",
        "name": "Zanaris Market seed stall",
        "category": "stall",
        "level": "114",
        "xp": "1234.5",
        "respawn": "3.6 seconds",
        "location": "Zanaris",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Plant pot pack",
                        "qty": "1",
                        "rarity": "~243/2,200",
                        "img": "/images/Plant_pot_pack.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1",
                        "rarity": "~148/2,200",
                        "img": "/images/Spirit_weed_seed_5.png"
                    },
                    {
                        "item": "Bittercap mushroom spore",
                        "qty": "1",
                        "rarity": "~197/2,200",
                        "img": "/images/Bittercap_mushroom_spore_5.png"
                    },
                    {
                        "item": "Butterfly flower seed",
                        "qty": "1",
                        "rarity": "~211/2,200",
                        "img": "/images/Butterfly_flower_seed_5.png"
                    },
                    {
                        "item": "Dragonfruit seed",
                        "qty": "1",
                        "rarity": "~124/2,200",
                        "img": "/images/Dragonfruit_seed_5.png"
                    },
                    {
                        "item": "Morchella mushroom spore",
                        "qty": "1",
                        "rarity": "~186/2,200",
                        "img": "/images/Morchella_mushroom_spore_5.png"
                    },
                    {
                        "item": "Godly grapevine seed",
                        "qty": "1",
                        "rarity": "~113/2,200",
                        "img": "/images/Godly_grapevine_seed_5.png"
                    },
                    {
                        "item": "Strawberry seed",
                        "qty": "1",
                        "rarity": "~254/2,200",
                        "img": "/images/Strawberry_seed_5.png"
                    },
                    {
                        "item": "Cave nightshade seed",
                        "qty": "1",
                        "rarity": "~220/2,200",
                        "img": "/images/Cave_nightshade_seed_5.png"
                    },
                    {
                        "item": "Stinkshroom spore",
                        "qty": "1",
                        "rarity": "~97/2,200",
                        "img": "/images/Stinkshroom_spore_5.png"
                    },
                    {
                        "item": "Starbloom flower seed",
                        "qty": "1",
                        "rarity": "~106/2,200",
                        "img": "/images/Starbloom_flower_seed_5.png"
                    },
                    {
                        "item": "Tombshroom spore",
                        "qty": "1",
                        "rarity": "~107/2,200",
                        "img": "/images/Tombshroom_spore_5.png"
                    },
                    {
                        "item": "Spirit seed",
                        "qty": "1",
                        "rarity": "~9/2,200",
                        "img": "/images/Spirit_seed_5.png"
                    },
                    {
                        "item": "Magic seed",
                        "qty": "1",
                        "rarity": "~26/2,200",
                        "img": "/images/Magic_seed_5.png"
                    },
                    {
                        "item": "Fellstalk seed",
                        "qty": "1",
                        "rarity": "~108/2,200",
                        "img": "/images/Fellstalk_seed_5.png"
                    },
                    {
                        "item": "Golden dragonfruit seed",
                        "qty": "1",
                        "rarity": "~41/2,200",
                        "img": "/images/Golden_dragonfruit_seed_5.png"
                    },
                    {
                        "item": "Elder seed",
                        "qty": "1",
                        "rarity": "~10/2,200",
                        "img": "/images/Elder_seed_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Zanaris Market trinket stall",
        "name": "Zanaris Market trinket stall",
        "category": "stall",
        "level": "116",
        "xp": "1294.5",
        "respawn": "4.8 seconds",
        "location": "Zanaris",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Blue charm",
                        "qty": "2",
                        "rarity": "1/8",
                        "img": "/images/Blue_charm.png"
                    },
                    {
                        "item": "Crimson charm",
                        "qty": "2",
                        "rarity": "1/8",
                        "img": "/images/Crimson_charm.png"
                    },
                    {
                        "item": "Dragon scale dust",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Dragon_scale_dust.png"
                    },
                    {
                        "item": "Morchella mushroom",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Morchella_mushroom.png"
                    },
                    {
                        "item": "Potato cactus",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Potato_cactus.png"
                    },
                    {
                        "item": "Uncut dragonstone",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Uncut_dragonstone.png"
                    },
                    {
                        "item": "Unicorn horn dust",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/Unicorn_horn_dust.png"
                    },
                    {
                        "item": "White berries",
                        "qty": "1",
                        "rarity": "1/10",
                        "img": "/images/White_berries.png"
                    },
                    {
                        "item": "Onyx dust",
                        "qty": "1",
                        "rarity": "1/20",
                        "img": "/images/Onyx_dust.png"
                    },
                    {
                        "item": "Kwuarm incense sticks",
                        "qty": "1",
                        "rarity": "1/40",
                        "img": "/images/Kwuarm_incense_sticks.png"
                    },
                    {
                        "item": "Spirit weed incense sticks",
                        "qty": "1",
                        "rarity": "1/40",
                        "img": "/images/Spirit_weed_incense_sticks.png"
                    },
                    {
                        "item": "Torstol incense sticks",
                        "qty": "1",
                        "rarity": "1/40",
                        "img": "/images/Torstol_incense_sticks.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "3,000",
                        "rarity": "3/200",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "3/200",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "6,000",
                        "rarity": "3/400",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Sealed clue scroll (elite)",
                        "qty": "1",
                        "rarity": "3/400",
                        "img": "/images/Sealed_clue_scroll_%28elite%29.png"
                    },
                    {
                        "item": "Alchemical hydrix dust",
                        "qty": "1",
                        "rarity": "1/1,500",
                        "img": "/images/Alchemical_hydrix_dust.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Darkmeyer magic stall",
        "name": "Darkmeyer magic stall",
        "category": "stall",
        "level": "117",
        "xp": "1323.8",
        "respawn": "3.6 seconds",
        "location": "Darkmeyer",
        "members": true,
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Ring of Vitur",
                        "qty": "1",
                        "rarity": "1/10,000",
                        "img": "/images/Ring_of_Vitur.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Fire battlestaff",
                        "qty": "1",
                        "rarity": "~83/1,200",
                        "img": "/images/Fire_battlestaff.png"
                    },
                    {
                        "item": "Earth battlestaff",
                        "qty": "1",
                        "rarity": "~88/1,200",
                        "img": "/images/Earth_battlestaff.png"
                    },
                    {
                        "item": "Air battlestaff",
                        "qty": "1",
                        "rarity": "~88/1,200",
                        "img": "/images/Air_battlestaff.png"
                    },
                    {
                        "item": "Water battlestaff",
                        "qty": "1",
                        "rarity": "~80/1,200",
                        "img": "/images/Water_battlestaff.png"
                    },
                    {
                        "item": "Battlestaff",
                        "qty": "2–4",
                        "rarity": "~84/1,200",
                        "img": "/images/Battlestaff.png"
                    },
                    {
                        "item": "Soul rune",
                        "qty": "5–10",
                        "rarity": "~213/1,200",
                        "img": "/images/Soul_rune.png"
                    },
                    {
                        "item": "Blood rune",
                        "qty": "10–20",
                        "rarity": "~331/1,200",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "12–23",
                        "rarity": "~232/1,200",
                        "img": "/images/Death_rune.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Darkmeyer meat stall",
        "name": "Darkmeyer meat stall",
        "category": "stall",
        "level": "115",
        "xp": "1264.5",
        "respawn": "3.6 seconds",
        "location": "Darkmeyer",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Raw bear meat",
                        "qty": "1",
                        "rarity": "~200/2,720",
                        "img": "/images/Raw_bear_meat.png"
                    },
                    {
                        "item": "Raw beef",
                        "qty": "1",
                        "rarity": "~227/2,720",
                        "img": "/images/Raw_beef.png"
                    },
                    {
                        "item": "Raw chicken",
                        "qty": "1",
                        "rarity": "~217/2,720",
                        "img": "/images/Raw_chicken.png"
                    },
                    {
                        "item": "Raw rat meat",
                        "qty": "1",
                        "rarity": "~204/2,720",
                        "img": "/images/Raw_rat_meat.png"
                    },
                    {
                        "item": "Meaty mush",
                        "qty": "5–10",
                        "rarity": "~1,053/2,720",
                        "img": "/images/Meaty_mush.png"
                    },
                    {
                        "item": "Congealed blood",
                        "qty": "2–4",
                        "rarity": "~407/2,720",
                        "img": "/images/Congealed_blood_2.png"
                    },
                    {
                        "item": "Raw beef pack",
                        "qty": "1",
                        "rarity": "~131/2,720",
                        "img": "/images/Raw_beef_pack.png"
                    },
                    {
                        "item": "Raw bird meat pack",
                        "qty": "1",
                        "rarity": "~145/2,720",
                        "img": "/images/Raw_bird_meat_pack.png"
                    },
                    {
                        "item": "Raw rabbit pack",
                        "qty": "1",
                        "rarity": "~160/2,720",
                        "img": "/images/Raw_rabbit_pack.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Darkmeyer potion stall",
        "name": "Darkmeyer potion stall",
        "category": "stall",
        "level": "119",
        "xp": "1404.6",
        "respawn": "3.6 seconds",
        "location": "Darkmeyer",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Extreme attack (1)",
                        "qty": "1",
                        "rarity": "~99/1,000",
                        "img": "/images/Extreme_attack_%281%29.png"
                    },
                    {
                        "item": "Extreme strength (1)",
                        "qty": "1",
                        "rarity": "~89/1,000",
                        "img": "/images/Extreme_strength_%281%29.png"
                    },
                    {
                        "item": "Extreme defence (1)",
                        "qty": "1",
                        "rarity": "~79/1,000",
                        "img": "/images/Extreme_defence_%281%29.png"
                    },
                    {
                        "item": "Extreme magic (1)",
                        "qty": "1",
                        "rarity": "~101/1,000",
                        "img": "/images/Extreme_magic_%281%29.png"
                    },
                    {
                        "item": "Extreme ranging (1)",
                        "qty": "1",
                        "rarity": "~115/1,000",
                        "img": "/images/Extreme_ranging_%281%29.png"
                    },
                    {
                        "item": "Extreme necromancy (1)",
                        "qty": "1",
                        "rarity": "~80/1,000",
                        "img": "/images/Extreme_necromancy_%281%29.png"
                    },
                    {
                        "item": "Summoning potion (1)",
                        "qty": "1",
                        "rarity": "~96/1,000",
                        "img": "/images/Summoning_potion_%281%29.png"
                    },
                    {
                        "item": "Super Zamorak brew (1)",
                        "qty": "1",
                        "rarity": "~32/1,000",
                        "img": "/images/Super_Zamorak_brew_%281%29.png"
                    },
                    {
                        "item": "Spirit attraction potion (1)",
                        "qty": "1",
                        "rarity": "~83/1,000",
                        "img": "/images/Spirit_attraction_potion_%281%29.png"
                    },
                    {
                        "item": "Aggression potion (1)",
                        "qty": "1",
                        "rarity": "~47/1,000",
                        "img": "/images/Aggression_potion_%281%29.png"
                    },
                    {
                        "item": "Prayer renewal (1)",
                        "qty": "1",
                        "rarity": "~85/1,000",
                        "img": "/images/Prayer_renewal_%281%29.png"
                    },
                    {
                        "item": "Weapon poison+++ (1)",
                        "qty": "1",
                        "rarity": "~84/1,000",
                        "img": "/images/Weapon_poison%2B%2B%2B_%281%29.png"
                    },
                    {
                        "item": "Potion flask",
                        "qty": "1",
                        "rarity": "~10/1,000",
                        "img": "/images/Potion_flask.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Zanaris Market spirit stall",
        "name": "Zanaris Market spirit stall",
        "category": "stall",
        "level": "107",
        "xp": "1025.3",
        "respawn": "3.6 seconds",
        "location": "Zanaris",
        "members": true,
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Adamantite stone spirit",
                        "qty": "1–2",
                        "rarity": "~183/1,805",
                        "img": "/images/Adamantite_stone_spirit.png"
                    },
                    {
                        "item": "Luminite stone spirit",
                        "qty": "1–2",
                        "rarity": "~216/1,805",
                        "img": "/images/Luminite_stone_spirit.png"
                    },
                    {
                        "item": "Banite stone spirit",
                        "qty": "1",
                        "rarity": "~156/1,805",
                        "img": "/images/Banite_stone_spirit.png"
                    },
                    {
                        "item": "Light animica stone spirit",
                        "qty": "1–3",
                        "rarity": "~96/1,805",
                        "img": "/images/Light_animica_stone_spirit.png"
                    },
                    {
                        "item": "Dark animica stone spirit",
                        "qty": "1–3",
                        "rarity": "~92/1,805",
                        "img": "/images/Dark_animica_stone_spirit.png"
                    },
                    {
                        "item": "Primal stone spirit",
                        "qty": "2–4",
                        "rarity": "~156/1,805",
                        "img": "/images/Primal_stone_spirit.png"
                    },
                    {
                        "item": "Platinum stone spirit",
                        "qty": "1–2",
                        "rarity": "~57/1,805",
                        "img": "/images/Platinum_stone_spirit.png"
                    },
                    {
                        "item": "Willow wood spirit",
                        "qty": "1–2",
                        "rarity": "~215/1,805",
                        "img": "/images/Willow_wood_spirit.png"
                    },
                    {
                        "item": "Teak wood spirit",
                        "qty": "1–2",
                        "rarity": "~205/1,805",
                        "img": "/images/Teak_wood_spirit.png"
                    },
                    {
                        "item": "Magic wood spirit",
                        "qty": "2–4",
                        "rarity": "~182/1,805",
                        "img": "/images/Magic_wood_spirit.png"
                    },
                    {
                        "item": "Elder wood spirit",
                        "qty": "1–4",
                        "rarity": "~141/1,805",
                        "img": "/images/Elder_wood_spirit.png"
                    },
                    {
                        "item": "Eternal magic wood spirit",
                        "qty": "1–3",
                        "rarity": "~41/1,805",
                        "img": "/images/Eternal_magic_wood_spirit.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Simple Chest",
        "name": "Simple Chest",
        "category": "chest",
        "level": "13",
        "xp": "80",
        "items": "Iron and steel arrowheads , sapphire amulets , necklaces , and rings",
        "respawn": "18 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of the house north of the East Ardougne church",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "200–400",
                        "rarity": "~54/376",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Iron arrowheads",
                        "qty": "8–12",
                        "rarity": "~121/376",
                        "img": "/images/Iron_arrowheads_5.png"
                    },
                    {
                        "item": "Steel arrowheads",
                        "qty": "8–12",
                        "rarity": "~142/376",
                        "img": "/images/Steel_arrowheads_5.png"
                    },
                    {
                        "item": "Sapphire ring",
                        "qty": "1",
                        "rarity": "~20/376",
                        "img": "/images/Sapphire_ring.png"
                    },
                    {
                        "item": "Sapphire necklace",
                        "qty": "1",
                        "rarity": "~21/376",
                        "img": "/images/Sapphire_necklace.png"
                    },
                    {
                        "item": "Sapphire amulet",
                        "qty": "1",
                        "rarity": "~20/376",
                        "img": "/images/Sapphire_amulet.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (magic axe hut)",
        "name": "Magic axe hut chest",
        "category": "chest",
        "level": "23",
        "xp": "135",
        "items": "Wood , oak , and willow spirits , mithril , adamant , and rune hatchets , muddy keys",
        "respawn": "18 seconds",
        "location": "Magic axe hut · Magic axe hut (Spirit Realm)",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Wood spirit",
                        "qty": "2–4",
                        "rarity": "Common",
                        "img": "/images/Wood_spirit.png"
                    },
                    {
                        "item": "Oak wood spirit",
                        "qty": "2–4",
                        "rarity": "Common",
                        "img": "/images/Oak_wood_spirit.png"
                    },
                    {
                        "item": "Willow wood spirit",
                        "qty": "2–4",
                        "rarity": "Common",
                        "img": "/images/Willow_wood_spirit.png"
                    },
                    {
                        "item": "Muddy key",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Muddy_key.png"
                    },
                    {
                        "item": "Mithril hatchet",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Mithril_hatchet.png"
                    },
                    {
                        "item": "Adamant hatchet",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Adamant_hatchet.png"
                    },
                    {
                        "item": "Rune hatchet",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Rune_hatchet.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Secure Chest (nature runes)",
        "name": "Secure Chest (nature runes)",
        "category": "chest",
        "level": "28",
        "xp": "160",
        "items": "Rune essence (noted), fire runes , nature runes",
        "respawn": "18 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of the house east of the gem stall in Ardougne market · Swensen the Navigator's house in Rellekka",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Fire rune",
                        "qty": "3–7",
                        "rarity": "4/9",
                        "img": "/images/Fire_rune.png"
                    },
                    {
                        "item": "Nature rune",
                        "qty": "2–4",
                        "rarity": "4/9",
                        "img": "/images/Nature_rune.png"
                    },
                    {
                        "item": "Rune essence",
                        "qty": "10–20 (noted)",
                        "rarity": "1/9",
                        "img": "/images/Rune_essence.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Reinforced Chest (East Ardougne)",
        "name": "Reinforced Chest (East Ardougne)",
        "category": "chest",
        "level": "43",
        "xp": "315",
        "items": "Gold bars , uncut sapphires and emeralds , emerald amulets , necklaces , and rings , diamond and dragonstone rings",
        "respawn": "18 seconds",
        "location": "Ground floor [ UK ] 1 st floor [ US ] of the house east of the bakery stall in Ardougne market · 1 st floor [ UK ] 2 nd floor [ US ] of the house east of the bakery stall in Ardougne market",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Uncut sapphire",
                        "qty": "1",
                        "rarity": "~286/1,431",
                        "img": "/images/Uncut_sapphire.png"
                    },
                    {
                        "item": "Uncut emerald",
                        "qty": "1",
                        "rarity": "~277/1,431",
                        "img": "/images/Uncut_emerald.png"
                    },
                    {
                        "item": "Gold bar",
                        "qty": "1",
                        "rarity": "~214/1,431",
                        "img": "/images/Gold_bar.png"
                    },
                    {
                        "item": "Emerald ring",
                        "qty": "1",
                        "rarity": "~212/1,431",
                        "img": "/images/Emerald_ring.png"
                    },
                    {
                        "item": "Emerald necklace",
                        "qty": "1",
                        "rarity": "~228/1,431",
                        "img": "/images/Emerald_necklace.png"
                    },
                    {
                        "item": "Emerald amulet",
                        "qty": "1",
                        "rarity": "~198/1,431",
                        "img": "/images/Emerald_amulet.png"
                    },
                    {
                        "item": "Diamond ring",
                        "qty": "1",
                        "rarity": "~8/1,431",
                        "img": "/images/Diamond_ring.png"
                    },
                    {
                        "item": "Dragonstone ring",
                        "qty": "1",
                        "rarity": "~8/1,431",
                        "img": "/images/Dragonstone_ring.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Robust Chest",
        "name": "Robust Chest",
        "category": "chest",
        "level": "47",
        "xp": "372.5",
        "items": "Bowstrings , headless arrows , mithril and adamant arrowheads , mithril and adamant arrows , yew shortbows",
        "respawn": "9 seconds",
        "location": "Southern building in Hemenster · 1 st floor [ UK ] 2 nd floor [ US ] of Skulgrimen's Battle Gear",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Yew shortbow",
                        "qty": "1",
                        "rarity": "~3/359",
                        "img": "/images/Yew_shortbow.png"
                    },
                    {
                        "item": "Bowstring",
                        "qty": "3–5",
                        "rarity": "~112/359",
                        "img": "/images/Bowstring.png"
                    },
                    {
                        "item": "Mithril arrow",
                        "qty": "8–12",
                        "rarity": "~13/359",
                        "img": "/images/Mithril_arrow_5.png"
                    },
                    {
                        "item": "Adamant arrow",
                        "qty": "9–12",
                        "rarity": "~13/359",
                        "img": "/images/Adamant_arrow_5.png"
                    },
                    {
                        "item": "Mithril arrowheads",
                        "qty": "12–18",
                        "rarity": "~41/359",
                        "img": "/images/Mithril_arrowheads_5.png"
                    },
                    {
                        "item": "Adamant arrowheads",
                        "qty": "8–12",
                        "rarity": "~35/359",
                        "img": "/images/Adamant_arrowheads_5.png"
                    },
                    {
                        "item": "Headless arrow",
                        "qty": "12–18",
                        "rarity": "~109/359",
                        "img": "/images/Headless_shaft_5.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Secure chest (Dorgesh-Kaan)",
        "name": "Secure chest (Dorgesh-Kaan)",
        "category": "chest",
        "level": "52",
        "xp": "460",
        "items": "Gold charms , uncut sapphires and rubies , bones and big bones , gold stone spirits , light orbs and empty light orbs , cave goblin wire , easy clues",
        "respawn": "9 seconds",
        "location": "Ground floor [ UK ] 1 st floor [ US ] of Dorgesh-Kaan · 1 st floor [ UK ] 2 nd floor [ US ] of Dorgesh-Kaan · 2 nd floor [ UK ] 3 rd floor [ US ] of Dorgesh-Kaan",
        "loot": [
            {
                "group": "Charms",
                "drops": [
                    {
                        "item": "Gold charm",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Gold_charm.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "500",
                        "rarity": "Common",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Cave goblin wire",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Cave_goblin_wire.png"
                    },
                    {
                        "item": "Empty light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Empty_light_orb.png"
                    },
                    {
                        "item": "Light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Light_orb.png"
                    },
                    {
                        "item": "Big bones",
                        "qty": "2–4 (noted)",
                        "rarity": "Common",
                        "img": "/images/Big_bones.png"
                    },
                    {
                        "item": "Bones",
                        "qty": "4–6 (noted)",
                        "rarity": "Common",
                        "img": "/images/Bones.png"
                    },
                    {
                        "item": "Uncut sapphire",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Uncut_sapphire.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "1–3",
                        "rarity": "Common",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Sealed clue scroll (easy)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Sealed_clue_scroll_%28easy%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "Common",
                        "img": "/images/Coins_100.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Secure chest (Zanik)",
        "name": "Secure chest (Zanik)",
        "category": "chest",
        "level": "52",
        "xp": "460",
        "items": "Gold charms , H.A.M. robes , bullseye and oil lanterns , light orbs and empty light orbs , mining helmets , cave goblin wire , easy clues",
        "respawn": "9 seconds",
        "location": "2 nd floor [ UK ] 3 rd floor [ US ] of Zanik's house in Dorgesh-Kaan",
        "loot": [
            {
                "group": "Charms",
                "drops": [
                    {
                        "item": "Gold charm",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Gold_charm.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "500",
                        "rarity": "Common",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "H.A.M. hood",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._hood.png"
                    },
                    {
                        "item": "H.A.M. shirt",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._shirt.png"
                    },
                    {
                        "item": "H.A.M. robe",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._robe.png"
                    },
                    {
                        "item": "H.A.M. gloves",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._gloves.png"
                    },
                    {
                        "item": "H.A.M. boots",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._boots.png"
                    },
                    {
                        "item": "H.A.M. cloak",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._cloak.png"
                    },
                    {
                        "item": "H.A.M. logo",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/H.A.M._logo.png"
                    },
                    {
                        "item": "Oil lantern (oil)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Oil_lantern_%28oil%29.png"
                    },
                    {
                        "item": "Bullseye lantern (oil)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Bullseye_lantern_%28oil%29.png"
                    },
                    {
                        "item": "Mining helmet",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Mining_helmet.png"
                    },
                    {
                        "item": "Cave goblin wire",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Cave_goblin_wire.png"
                    },
                    {
                        "item": "Empty light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Empty_light_orb.png"
                    },
                    {
                        "item": "Light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Light_orb.png"
                    },
                    {
                        "item": "Sealed clue scroll (easy)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Sealed_clue_scroll_%28easy%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "Common",
                        "img": "/images/Coins_100.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Secure chest (Oldak)",
        "name": "Secure chest (Oldak)",
        "category": "chest",
        "level": "52",
        "xp": "460",
        "items": "Gold charms , Nature , law , and death runes , Dorgesh-Kaan spheres , molten glass (noted), light orbs and empty light orbs , cave goblin wire , easy clues",
        "respawn": "9 seconds",
        "location": "2 nd floor [ UK ] 3 rd floor [ US ] of Oldak's house in Dorgesh-Kaan",
        "loot": [
            {
                "group": "Charms",
                "drops": [
                    {
                        "item": "Gold charm",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Gold_charm.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "500",
                        "rarity": "Common",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Molten glass",
                        "qty": "5 (noted)",
                        "rarity": "Common",
                        "img": "/images/Molten_glass.png"
                    },
                    {
                        "item": "Dorgesh-kaan sphere",
                        "qty": "3",
                        "rarity": "Common",
                        "img": "/images/Dorgesh-kaan_sphere.png"
                    },
                    {
                        "item": "Nature rune",
                        "qty": "5",
                        "rarity": "Common",
                        "img": "/images/Nature_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "5",
                        "rarity": "Common",
                        "img": "/images/Death_rune.png"
                    },
                    {
                        "item": "Law rune",
                        "qty": "5",
                        "rarity": "Common",
                        "img": "/images/Law_rune.png"
                    },
                    {
                        "item": "Cave goblin wire",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Cave_goblin_wire.png"
                    },
                    {
                        "item": "Empty light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Empty_light_orb.png"
                    },
                    {
                        "item": "Light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Light_orb.png"
                    },
                    {
                        "item": "Sealed clue scroll (easy)",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Sealed_clue_scroll_%28easy%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "Common",
                        "img": "/images/Coins_100.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Chaos Druid Tower Dungeon)",
        "name": "Chaos Druid Tower Dungeon chest",
        "category": "chest",
        "level": "59",
        "xp": "620",
        "items": "Chaos and blood runes , pure essence , fire battlestaves , lvl-5 and lvl-6 enchant tablets",
        "respawn": "18 seconds",
        "location": "Chaos Druid Tower dungeon",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Blood rune",
                        "qty": "4–6",
                        "rarity": "~481/1,342",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Chaos rune",
                        "qty": "6–10",
                        "rarity": "~174/1,342",
                        "img": "/images/Chaos_rune.png"
                    },
                    {
                        "item": "Pure essence",
                        "qty": "15–25 (noted)",
                        "rarity": "~203/1,342",
                        "img": "/images/Pure_essence.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "500–1,500",
                        "rarity": "~328/1,342",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Fire battlestaff",
                        "qty": "1",
                        "rarity": "~121/1,342",
                        "img": "/images/Fire_battlestaff.png"
                    },
                    {
                        "item": "Lvl-5 enchant (item)",
                        "qty": "1",
                        "rarity": "~7/1,342",
                        "img": "/images/Lvl-5_enchant_%28item%29.png"
                    },
                    {
                        "item": "Lvl-6 enchant (item)",
                        "qty": "1",
                        "rarity": "~9/1,342",
                        "img": "/images/Lvl-6_enchant_%28item%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Rogues' Castle)",
        "name": "Rogues' Castle chest",
        "category": "chest",
        "level": "65",
        "xp": "810",
        "items": "Dragon bones , uncut diamonds and dragonstones , red dragon leather , gold ore , muddy keys , hard clues , Wilderness shared loot table",
        "respawn": "18 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of Rogues' Castle",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "509–1,491",
                        "rarity": "Common",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Uncut diamond",
                        "qty": "1–3 (noted)",
                        "rarity": "Common",
                        "img": "/images/Uncut_diamond.png"
                    },
                    {
                        "item": "Uncut dragonstone",
                        "qty": "1 (noted)",
                        "rarity": "Common",
                        "img": "/images/Uncut_dragonstone.png"
                    },
                    {
                        "item": "Red dragon leather",
                        "qty": "3 (noted)",
                        "rarity": "Common",
                        "img": "/images/Red_dragon_leather.png"
                    },
                    {
                        "item": "Dragon bones",
                        "qty": "8 (noted)",
                        "rarity": "Common",
                        "img": "/images/Dragon_bones.png"
                    },
                    {
                        "item": "Muddy key",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Muddy_key.png"
                    },
                    {
                        "item": "Gold ore",
                        "qty": "8–12 (noted)",
                        "rarity": "Common",
                        "img": "/images/Gold_ore.png"
                    },
                    {
                        "item": "Sealed clue scroll (hard)",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Sealed_clue_scroll_%28hard%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "Uncommon",
                        "img": "/images/Coins_100.png"
                    }
                ]
            },
            {
                "group": "",
                "drops": [
                    {
                        "item": "Preserved meat",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Preserved_meat.png"
                    },
                    {
                        "item": "Fremennik equipment patch",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Fremennik_equipment_patch.png"
                    },
                    {
                        "item": "Ancient warriors' equipment patch",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Ancient_warriors%27_equipment_patch.png"
                    },
                    {
                        "item": "Adrenaline crystal",
                        "qty": "5–15 (noted)",
                        "rarity": "Very rare",
                        "img": "/images/Adrenaline_crystal.png"
                    },
                    {
                        "item": "Bloodweed seed",
                        "qty": "1–3",
                        "rarity": "Very rare",
                        "img": "/images/Bloodweed_seed_5.png"
                    },
                    {
                        "item": "Wilderness hilt",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Wilderness_hilt.png"
                    },
                    {
                        "item": "Revenant drop enhancer",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Revenant_drop_enhancer.png"
                    },
                    {
                        "item": "Brawling gloves (Agility)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Agility%29.png"
                    },
                    {
                        "item": "Brawling gloves (Cooking)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Cooking%29.png"
                    },
                    {
                        "item": "Brawling gloves (Fishing)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Fishing%29.png"
                    },
                    {
                        "item": "Brawling gloves (Firemaking)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Firemaking%29.png"
                    },
                    {
                        "item": "Brawling gloves (Hunter)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Hunter%29.png"
                    },
                    {
                        "item": "Brawling gloves (Magic)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Magic%29.png"
                    },
                    {
                        "item": "Brawling gloves (Melee)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Melee%29.png"
                    },
                    {
                        "item": "Brawling gloves (Mining)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Mining%29.png"
                    },
                    {
                        "item": "Brawling gloves (Prayer)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Prayer%29.png"
                    },
                    {
                        "item": "Brawling gloves (Ranged)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Ranged%29.png"
                    },
                    {
                        "item": "Brawling gloves (Smithing)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Smithing%29.png"
                    },
                    {
                        "item": "Brawling gloves (Thieving)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Thieving%29.png"
                    },
                    {
                        "item": "Brawling gloves (Woodcutting)",
                        "qty": "1",
                        "rarity": "Very rare",
                        "img": "/images/Brawling_gloves_%28Woodcutting%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Scabarite Cavern)",
        "name": "Scabarite Cavern chest",
        "category": "chest",
        "level": "70",
        "xp": "1,035",
        "items": "Acadia and teak wood spirits , magic logs , small Menaphite gift offerings",
        "respawn": "9 seconds",
        "location": "Scabarite Cavern",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "1,200",
                        "rarity": "~219/653",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Acadia wood spirit",
                        "qty": "2–4",
                        "rarity": "~184/653",
                        "img": "/images/Acadia_wood_spirit.png"
                    },
                    {
                        "item": "Teak wood spirit",
                        "qty": "2–4",
                        "rarity": "~191/653",
                        "img": "/images/Teak_wood_spirit.png"
                    },
                    {
                        "item": "Magic logs",
                        "qty": "1–3",
                        "rarity": "~37/653",
                        "img": "/images/Magic_logs.png"
                    },
                    {
                        "item": "Menaphite gift offering (small)",
                        "qty": "1",
                        "rarity": "~9/653",
                        "img": "/images/Menaphite_gift_offering_%28small%29.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Dwarven mines, Thieving)",
        "name": "Dwarven mines chest",
        "category": "chest",
        "level": "71",
        "xp": "1,078.4",
        "items": "Luminite and runite ore , luminite and runite stone spirits , double ammo mould",
        "respawn": "18 seconds",
        "location": "Westernmost room of the dwarven mines",
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Double ammo mould",
                        "qty": "1",
                        "rarity": "8/1,000",
                        "img": "/images/Double_ammo_mould.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Luminite",
                        "qty": "1",
                        "rarity": "~386/1,483",
                        "img": "/images/Luminite.png"
                    },
                    {
                        "item": "Runite ore",
                        "qty": "1",
                        "rarity": "~361/1,483",
                        "img": "/images/Runite_ore.png"
                    },
                    {
                        "item": "Luminite stone spirit",
                        "qty": "1–5",
                        "rarity": "~356/1,483",
                        "img": "/images/Luminite_stone_spirit.png"
                    },
                    {
                        "item": "Runite stone spirit",
                        "qty": "1–5",
                        "rarity": "~374/1,483",
                        "img": "/images/Runite_stone_spirit.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Ardougne Castle)",
        "name": "Ardougne Castle chest",
        "category": "chest",
        "level": "72",
        "xp": "1,130",
        "items": "Raw sharks , uncut rubies and diamonds , ruby necklace and rings , diamond necklaces and rings , dragonstone amulets and necklaces",
        "respawn": "18 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of Ardougne Castle",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Raw shark",
                        "qty": "2–4 (noted)",
                        "rarity": "~94/1,249",
                        "img": "/images/Raw_shark.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "1",
                        "rarity": "~189/1,249",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Uncut diamond",
                        "qty": "1",
                        "rarity": "~190/1,249",
                        "img": "/images/Uncut_diamond.png"
                    },
                    {
                        "item": "Ruby ring",
                        "qty": "1",
                        "rarity": "~190/1,249",
                        "img": "/images/Ruby_ring.png"
                    },
                    {
                        "item": "Ruby necklace",
                        "qty": "1",
                        "rarity": "~203/1,249",
                        "img": "/images/Ruby_necklace.png"
                    },
                    {
                        "item": "Diamond ring",
                        "qty": "1",
                        "rarity": "~172/1,249",
                        "img": "/images/Diamond_ring.png"
                    },
                    {
                        "item": "Diamond necklace",
                        "qty": "1",
                        "rarity": "~194/1,249",
                        "img": "/images/Diamond_necklace.png"
                    },
                    {
                        "item": "Dragonstone necklace",
                        "qty": "1",
                        "rarity": "~5/1,249",
                        "img": "/images/Dragonstone_necklace.png"
                    },
                    {
                        "item": "Dragonstone amulet",
                        "qty": "1",
                        "rarity": "~4/1,249",
                        "img": "/images/Dragonstone_amulet.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Chaos Druid Tower, 75 Thieving)",
        "name": "Chaos Druid Tower chest",
        "category": "chest",
        "level": "75",
        "xp": "1,282",
        "items": "Grimy kwuarm , snapdragon , and spirit weed , kwuarm , snapdragon , and spirit weed seeds",
        "respawn": "18 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of Chaos Druid Tower",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "1,500",
                        "rarity": "~657/1,341",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Grimy kwuarm",
                        "qty": "1–3",
                        "rarity": "~109/1,341",
                        "img": "/images/Grimy_kwuarm.png"
                    },
                    {
                        "item": "Kwuarm seed",
                        "qty": "1–3",
                        "rarity": "~139/1,341",
                        "img": "/images/Kwuarm_seed_2.png"
                    },
                    {
                        "item": "Grimy snapdragon",
                        "qty": "1–3",
                        "rarity": "~103/1,341",
                        "img": "/images/Grimy_snapdragon.png"
                    },
                    {
                        "item": "Snapdragon seed",
                        "qty": "1–3",
                        "rarity": "~128/1,341",
                        "img": "/images/Snapdragon_seed_2.png"
                    },
                    {
                        "item": "Grimy spirit weed",
                        "qty": "1–3",
                        "rarity": "~117/1,341",
                        "img": "/images/Grimy_spirit_weed.png"
                    },
                    {
                        "item": "Spirit weed seed",
                        "qty": "1–3",
                        "rarity": "~117/1,341",
                        "img": "/images/Spirit_weed_seed_2.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Wizards' Tower)",
        "name": "Wizards' Tower chest",
        "category": "chest",
        "level": "77",
        "xp": "1,400",
        "items": "Nature , death , mist , and dust runes",
        "respawn": "15 seconds",
        "location": "Southern side of the 1 st floor [ UK ] 2 nd floor [ US ] of Wizards' Tower",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Mist rune",
                        "qty": "5",
                        "rarity": "~293/1,185",
                        "img": "/images/Mist_rune.png"
                    },
                    {
                        "item": "Dust rune",
                        "qty": "5",
                        "rarity": "~299/1,185",
                        "img": "/images/Dust_rune.png"
                    },
                    {
                        "item": "Nature rune",
                        "qty": "10",
                        "rarity": "~294/1,185",
                        "img": "/images/Nature_rune.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "10",
                        "rarity": "~299/1,185",
                        "img": "/images/Death_rune.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Reinforced chest (Dorgesh-Kaan)",
        "name": "Reinforced chest (Dorgesh-Kaan)",
        "category": "chest",
        "level": "78",
        "xp": "1,455",
        "items": "Gold and blue charms , uncut rubies and diamonds , big and dragon bones , gold stone spirits , light orbs , medium clues",
        "respawn": "9 seconds",
        "location": "1 st floor [ UK ] 2 nd floor [ US ] of Dorgesh-Kaan · 2 nd floor [ UK ] 3 rd floor [ US ] of Dorgesh-Kaan",
        "loot": [
            {
                "group": "Charms",
                "drops": [
                    {
                        "item": "Gold charm",
                        "qty": "1–2",
                        "rarity": "Common",
                        "img": "/images/Gold_charm.png"
                    },
                    {
                        "item": "Blue charm",
                        "qty": "1–2",
                        "rarity": "Common",
                        "img": "/images/Blue_charm.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "750",
                        "rarity": "Common",
                        "img": "/images/Coins_250.png"
                    },
                    {
                        "item": "Uncut ruby",
                        "qty": "2–4",
                        "rarity": "Common",
                        "img": "/images/Uncut_ruby.png"
                    },
                    {
                        "item": "Uncut diamond",
                        "qty": "2–4",
                        "rarity": "Common",
                        "img": "/images/Uncut_diamond.png"
                    },
                    {
                        "item": "Big bones",
                        "qty": "11–14 (noted)",
                        "rarity": "Common",
                        "img": "/images/Big_bones.png"
                    },
                    {
                        "item": "Dragon bones",
                        "qty": "6–10 (noted)",
                        "rarity": "Common",
                        "img": "/images/Dragon_bones.png"
                    },
                    {
                        "item": "Light orb",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Light_orb.png"
                    },
                    {
                        "item": "Gold stone spirit",
                        "qty": "3–5",
                        "rarity": "Common",
                        "img": "/images/Gold_stone_spirit.png"
                    },
                    {
                        "item": "Sealed clue scroll (medium)",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Sealed_clue_scroll_%28medium%29.png"
                    },
                    {
                        "item": "Coins",
                        "qty": "100",
                        "rarity": "Uncommon",
                        "img": "/images/Coins_100.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (White Knights' Castle)",
        "name": "White Knights' Castle chest",
        "category": "chest",
        "level": "88",
        "xp": "2,274",
        "items": "White armour",
        "respawn": "18 seconds",
        "location": "Southern side of the 2 nd floor [ UK ] 3 rd floor [ US ] of the White Knights' Castle",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "White full helm",
                        "qty": "1",
                        "rarity": "~91/569",
                        "img": "/images/White_full_helm.png"
                    },
                    {
                        "item": "White platebody",
                        "qty": "1",
                        "rarity": "~106/569",
                        "img": "/images/White_platebody.png"
                    },
                    {
                        "item": "White platelegs",
                        "qty": "1",
                        "rarity": "~87/569",
                        "img": "/images/White_platelegs.png"
                    },
                    {
                        "item": "White kiteshield",
                        "qty": "1",
                        "rarity": "~92/569",
                        "img": "/images/White_kiteshield.png"
                    },
                    {
                        "item": "White gauntlets",
                        "qty": "1",
                        "rarity": "~95/569",
                        "img": "/images/White_gauntlets.png"
                    },
                    {
                        "item": "White boots",
                        "qty": "1",
                        "rarity": "~98/569",
                        "img": "/images/White_boots.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Keldagrim, Thieving)",
        "name": "Keldagrim chest",
        "category": "chest",
        "level": "94",
        "xp": "2,892",
        "items": "Orikalkum and necronium bars , orichalcite , drakolith , necrite , and phasmatite stone spirits",
        "respawn": "18 seconds",
        "location": "Ground floor [ UK ] 1 st floor [ US ] of Keldagrim Palace",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Orichalcite stone spirit",
                        "qty": "2–3",
                        "rarity": "Common",
                        "img": "/images/Orichalcite_stone_spirit.png"
                    },
                    {
                        "item": "Drakolith stone spirit",
                        "qty": "2–3",
                        "rarity": "Common",
                        "img": "/images/Drakolith_stone_spirit.png"
                    },
                    {
                        "item": "Necrite stone spirit",
                        "qty": "2–3",
                        "rarity": "Common",
                        "img": "/images/Necrite_stone_spirit.png"
                    },
                    {
                        "item": "Phasmatite stone spirit",
                        "qty": "2–3",
                        "rarity": "Common",
                        "img": "/images/Phasmatite_stone_spirit.png"
                    },
                    {
                        "item": "Orikalkum bar",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Orikalkum_bar.png"
                    },
                    {
                        "item": "Necronium bar",
                        "qty": "1",
                        "rarity": "Uncommon",
                        "img": "/images/Necronium_bar.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Black Knights' Fortress)",
        "name": "Black Knights' Fortress chest",
        "category": "chest",
        "level": "98",
        "xp": "3,638",
        "items": "Black weapons",
        "respawn": "18 seconds",
        "location": "North-western room on the 2 nd floor [ UK ] 3 rd floor [ US ] of the Black Knights' Fortress",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Black 2h sword",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_2h_sword.png"
                    },
                    {
                        "item": "Black battleaxe",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_battleaxe.png"
                    },
                    {
                        "item": "Black claw",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_claw.png"
                    },
                    {
                        "item": "Black longsword",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_longsword.png"
                    },
                    {
                        "item": "Black mace",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_mace.png"
                    },
                    {
                        "item": "Black scimitar",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_scimitar.png"
                    },
                    {
                        "item": "Black spear",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_spear.png"
                    },
                    {
                        "item": "Black warhammer",
                        "qty": "1",
                        "rarity": "Common",
                        "img": "/images/Black_warhammer.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Living Rock Caverns)",
        "name": "Living Rock Caverns chest",
        "category": "chest",
        "level": "101",
        "xp": "3,874",
        "items": "Banite ore , dark animica , and light animica , banite , dark animica , and light animica stone spirits",
        "respawn": "9 seconds",
        "location": "Near the rope within the Living Rock Caverns",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Light animica",
                        "qty": "1–3",
                        "rarity": "~265/2,553",
                        "img": "/images/Light_animica.png"
                    },
                    {
                        "item": "Light animica stone spirit",
                        "qty": "1–3",
                        "rarity": "~696/2,553",
                        "img": "/images/Light_animica_stone_spirit.png"
                    },
                    {
                        "item": "Dark animica",
                        "qty": "1–3",
                        "rarity": "~231/2,553",
                        "img": "/images/Dark_animica.png"
                    },
                    {
                        "item": "Dark animica stone spirit",
                        "qty": "1–3",
                        "rarity": "~648/2,553",
                        "img": "/images/Dark_animica_stone_spirit.png"
                    },
                    {
                        "item": "Banite ore",
                        "qty": "2–4",
                        "rarity": "~214/2,553",
                        "img": "/images/Banite_ore.png"
                    },
                    {
                        "item": "Banite stone spirit",
                        "qty": "2–4",
                        "rarity": "~656/2,553",
                        "img": "/images/Banite_stone_spirit.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Cadarn district)",
        "name": "Cadarn district chest",
        "category": "chest",
        "level": "103",
        "xp": "4,144",
        "items": "Grimy cadantine , lantadyme , and dwarf weed , irit , avantoe , cadantine , dwarf weed , and torstol seeds , crystal acorns",
        "respawn": "9 seconds",
        "location": "Haf's Battlestaves in the Cadarn district",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "2,000",
                        "rarity": "~631/2,099",
                        "img": "/images/Coins_1000.png"
                    },
                    {
                        "item": "Irit seed",
                        "qty": "1–2",
                        "rarity": "~129/2,099",
                        "img": "/images/Irit_seed_2.png"
                    },
                    {
                        "item": "Avantoe seed",
                        "qty": "1–2",
                        "rarity": "~125/2,099",
                        "img": "/images/Avantoe_seed_2.png"
                    },
                    {
                        "item": "Cadantine seed",
                        "qty": "1–2",
                        "rarity": "~290/2,099",
                        "img": "/images/Cadantine_seed_2.png"
                    },
                    {
                        "item": "Grimy cadantine",
                        "qty": "1–3",
                        "rarity": "~110/2,099",
                        "img": "/images/Grimy_cadantine.png"
                    },
                    {
                        "item": "Lantadyme seed",
                        "qty": "1–2",
                        "rarity": "~263/2,099",
                        "img": "/images/Lantadyme_seed_2.png"
                    },
                    {
                        "item": "Grimy lantadyme",
                        "qty": "1–3",
                        "rarity": "~121/2,099",
                        "img": "/images/Grimy_lantadyme.png"
                    },
                    {
                        "item": "Dwarf weed seed",
                        "qty": "1–2",
                        "rarity": "~268/2,099",
                        "img": "/images/Dwarf_weed_seed_2.png"
                    },
                    {
                        "item": "Grimy dwarf weed",
                        "qty": "1–3",
                        "rarity": "~102/2,099",
                        "img": "/images/Grimy_dwarf_weed.png"
                    },
                    {
                        "item": "Torstol seed",
                        "qty": "1–2",
                        "rarity": "~130/2,099",
                        "img": "/images/Torstol_seed_2.png"
                    },
                    {
                        "item": "Crystal acorn",
                        "qty": "1",
                        "rarity": "~2/2,099",
                        "img": "/images/Crystal_acorn_1.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Ourania Cave)",
        "name": "Ourania Cave chest",
        "category": "chest",
        "level": "107",
        "xp": "4,689",
        "items": "Cosmic , blood , and soul runes , pure essence (noted)",
        "respawn": "18 seconds",
        "location": "Along the longer path to the Ourania Altar in the Ourania Cave",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Cosmic rune",
                        "qty": "10",
                        "rarity": "~549/906",
                        "img": "/images/Cosmic_rune.png"
                    },
                    {
                        "item": "Blood rune",
                        "qty": "5–15",
                        "rarity": "~71/906",
                        "img": "/images/Blood_rune.png"
                    },
                    {
                        "item": "Soul rune",
                        "qty": "5–15",
                        "rarity": "~86/906",
                        "img": "/images/Soul_rune.png"
                    },
                    {
                        "item": "Pure essence",
                        "qty": "75 (noted)",
                        "rarity": "~198/906",
                        "img": "/images/Pure_essence.png"
                    },
                    {
                        "item": "Pure essence",
                        "qty": "1,000 (noted)",
                        "rarity": "~4/906",
                        "img": "/images/Pure_essence.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Wizards' Guild)",
        "name": "Wizards' Guild chest",
        "category": "chest",
        "level": "110",
        "xp": "5,098",
        "items": "Air , earth , fire , and water orbs (noted), mystic robes , mystic cloth (noted)",
        "respawn": "9 seconds",
        "location": "Western side of the 1 st floor [ UK ] 2 nd floor [ US ] of the Wizards' Guild",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Air orb",
                        "qty": "5 (noted)",
                        "rarity": "~88/921",
                        "img": "/images/Air_orb.png"
                    },
                    {
                        "item": "Earth orb",
                        "qty": "5 (noted)",
                        "rarity": "~99/921",
                        "img": "/images/Earth_orb.png"
                    },
                    {
                        "item": "Fire orb",
                        "qty": "5 (noted)",
                        "rarity": "~81/921",
                        "img": "/images/Fire_orb.png"
                    },
                    {
                        "item": "Water orb",
                        "qty": "5 (noted)",
                        "rarity": "~100/921",
                        "img": "/images/Water_orb.png"
                    },
                    {
                        "item": "Mystic cloth",
                        "qty": "4 (noted)",
                        "rarity": "~271/921",
                        "img": "/images/Mystic_cloth.png"
                    },
                    {
                        "item": "Mystic hat",
                        "qty": "1",
                        "rarity": "~64/921",
                        "img": "/images/Mystic_hat.png"
                    },
                    {
                        "item": "Mystic robe top",
                        "qty": "1",
                        "rarity": "~58/921",
                        "img": "/images/Mystic_robe_top.png"
                    },
                    {
                        "item": "Mystic gloves",
                        "qty": "1",
                        "rarity": "~49/921",
                        "img": "/images/Mystic_gloves.png"
                    },
                    {
                        "item": "Mystic robe bottom",
                        "qty": "1",
                        "rarity": "~54/921",
                        "img": "/images/Mystic_robe_bottom.png"
                    },
                    {
                        "item": "Mystic boots",
                        "qty": "1",
                        "rarity": "~57/921",
                        "img": "/images/Mystic_boots.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (City of Um)",
        "name": "City of Um chest",
        "category": "chest",
        "level": "112",
        "xp": "5,370",
        "items": "Ashes (noted), buckets of slime (noted), ectoplasm , greater and powerful ghostly ink , greater ritual candles , greater flaming skulls",
        "respawn": "18 seconds",
        "location": "North of the Soul Supplies shop in the City of Um",
        "loot": [
            {
                "group": "",
                "drops": [
                    {
                        "item": "Ashes",
                        "qty": "5–15 (noted)",
                        "rarity": "~433/1,358",
                        "img": "/images/Ashes.png"
                    },
                    {
                        "item": "Bucket of slime",
                        "qty": "3 (noted)",
                        "rarity": "~281/1,358",
                        "img": "/images/Bucket_of_slime.png"
                    },
                    {
                        "item": "Ectoplasm",
                        "qty": "5",
                        "rarity": "~477/1,358",
                        "img": "/images/Ectoplasm.png"
                    },
                    {
                        "item": "Greater ghostly ink",
                        "qty": "3",
                        "rarity": "~69/1,358",
                        "img": "/images/Greater_ghostly_ink.png"
                    },
                    {
                        "item": "Greater ritual candle",
                        "qty": "1",
                        "rarity": "~23/1,358",
                        "img": "/images/Greater_ritual_candle.png"
                    },
                    {
                        "item": "Powerful ghostly ink",
                        "qty": "3",
                        "rarity": "~70/1,358",
                        "img": "/images/Powerful_ghostly_ink.png"
                    },
                    {
                        "item": "Greater flaming skull",
                        "qty": "1",
                        "rarity": "~25/1,358",
                        "img": "/images/Greater_flaming_skull.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Darkmeyer, Thieving)",
        "name": "Darkmeyer chest",
        "category": "chest",
        "level": "116",
        "xp": "5,914",
        "items": "Death runes , congealed blood , Ring of Vitur",
        "respawn": "18 seconds",
        "location": "House north of the bank in Darkmeyer",
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Ring of Vitur",
                        "qty": "1",
                        "rarity": "1/5,000",
                        "img": "/images/Ring_of_Vitur.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Coins",
                        "qty": "5,000–11,000",
                        "rarity": "~474/1,944",
                        "img": "/images/Coins_10000.png"
                    },
                    {
                        "item": "Congealed blood",
                        "qty": "10–20",
                        "rarity": "~473/1,944",
                        "img": "/images/Congealed_blood_1000.png"
                    },
                    {
                        "item": "Death rune",
                        "qty": "10–20",
                        "rarity": "~990/1,944",
                        "img": "/images/Death_rune.png"
                    }
                ]
            }
        ]
    },
    {
        "page": "Chest (Rasial's Citadel)",
        "name": "Rasial's Citadel chest",
        "category": "chest",
        "level": "119",
        "xp": "6,420.4",
        "items": "Bone , flesh , miasma , and spirit runes , impure essence (noted), ghost impling jars",
        "respawn": "18 seconds",
        "location": "Along the eastern side of Rasial's Citadel",
        "loot": [
            {
                "group": "Pre-roll",
                "drops": [
                    {
                        "item": "Ghost impling jar",
                        "qty": "1",
                        "rarity": "Rare",
                        "img": "/images/Ghost_impling_jar.png"
                    }
                ]
            },
            {
                "group": "Main",
                "drops": [
                    {
                        "item": "Impure essence",
                        "qty": "20–60 (noted)",
                        "rarity": "~291/1,514",
                        "img": "/images/Impure_essence.png"
                    },
                    {
                        "item": "Bone rune",
                        "qty": "25–35",
                        "rarity": "~315/1,514",
                        "img": "/images/Bone_rune.png"
                    },
                    {
                        "item": "Flesh rune",
                        "qty": "10–20",
                        "rarity": "~308/1,514",
                        "img": "/images/Flesh_rune.png"
                    },
                    {
                        "item": "Miasma rune",
                        "qty": "5–15",
                        "rarity": "~323/1,514",
                        "img": "/images/Miasma_rune.png"
                    },
                    {
                        "item": "Spirit rune",
                        "qty": "35–45",
                        "rarity": "~300/1,514",
                        "img": "/images/Spirit_rune.png"
                    }
                ]
            }
        ]
    }
];


/***/ },

/***/ "./thieving/appconfig.json"
/*!*********************************!*\
  !*** ./thieving/appconfig.json ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "thieving/appconfig.json";

/***/ },

/***/ "./thieving/icon.png"
/*!***************************!*\
  !*** ./thieving/icon.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "thieving/icon.png";

/***/ },

/***/ "./thieving/index.html"
/*!*****************************!*\
  !*** ./thieving/index.html ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "thieving/index.html";

/***/ },

/***/ "canvas"
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { const e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ },

/***/ "electron/common"
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { const e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ },

/***/ "sharp"
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { const e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ },

/***/ "../node_modules/alt1/dist/base/index.js"
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else // removed by dead control flow
{}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
// //TODO revamp this madness a bit?
// (function () {
// 	var globalvar = (typeof self != "undefined" ? self : (typeof (global as any) != "undefined" ? (global as any) : null)) as any;
// 	//use the node-canvas version when on node
// 	if (typeof globalvar.ImageData == "undefined") {
// 		let nodecnv = requireNodeCanvas();
// 		globalvar.ImageData = nodecnv.ImageData;
// 	}
// 	var fill = typeof globalvar.ImageData == "undefined";
// 	//should never be reach anymore
// 	var constr = function (this: any) {
// 		var i = 0;
// 		var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
// 		var width = arguments[i++];
// 		var height = arguments[i++];
// 		if (fill) {
// 			if (!data) { data = new Uint8ClampedArray(width * height * 4); }
// 			this.width = width;
// 			this.height = height;
// 			this.data = data;
// 		}
// 		else if (oldconstr) {
// 			return (data ? new oldconstr(data, width, height) : new oldconstr(width, height));
// 		} else {
// 			var canvas = document.createElement('canvas');
// 			canvas.width = width;
// 			canvas.height = height;
// 			var ctx = canvas.getContext("2d")!;
// 			var imageData = ctx.createImageData(width, height);
// 			if (data) { imageData.data.set(data); }
// 			return imageData;
// 		}
// 	}
// 	var oldconstr = globalvar.ImageData;
// 	if (typeof document != "undefined") {
// 		try {
// 			new oldconstr(1, 1);
// 		} catch (e) {
// 			//direct constructor call not allowed in ie
// 			oldconstr = null;
// 		}
// 	}
// 	if (!fill) { constr.prototype = globalvar.ImageData.prototype; }
// 	globalvar.ImageData = constr;
// 	ImageData = constr as any;
// })();
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};
if (typeof HTMLImageElement != "undefined") {
    HTMLImageElement.prototype.toBuffer = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return ctx.getImageData(0, 0, w, h);
    };
    HTMLImageElement.prototype.toCanvas = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return cnv;
    };
}


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_15248__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_15248__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_15248__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_15248__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_15248__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    if (typeof Image != "undefined") {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        return await new Promise((done, fail) => {
            img.onload = function () { done(img.toBuffer()); };
            img.onerror = fail;
            img.src = url;
        });
    }
    else {
        var hdr = "data:image/png;base64,";
        if (url.startsWith(hdr)) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    clearPngColorspace(data);
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await imageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_31629__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_31629__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            var cnv = (img instanceof HTMLCanvasElement ? img : img.toCanvas());
            this.ctx = cnv.getContext("2d");
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_35283__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_35283__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_35283__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_35283__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_35283__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_35283__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_35283__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_35283__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_38931__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_38931__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_38931__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_45123__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_45123__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_45123__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    let cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
    triggerPaste(new index_1.ImgRefCtx(cnv));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        img.onerror = () => error("invalidfile", "The file you uploaded could not be opened as an image.");
        var bloburl = URL.createObjectURL(blob);
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () { pasted(img); URL.revokeObjectURL(bloburl); };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_56486__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_56486__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_56486__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_56486__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_56486__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window if the rs window can be detected by alt1, otherwise return the full screen
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_79245__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_79245__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_79245__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_79245__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./thieving/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lib: () => (/* binding */ lib)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./thieving/index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appconfig.json */ "./thieving/appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.png */ "./thieving/icon.png");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./thieving/data.ts");
// Thieving Tables — the RuneScape wiki's pickpocketing, stall and chest tables,
// with each entry's loot table folded in underneath it.
//
// All data is baked in at build time by tools/build-data.py; nothing is fetched
// at runtime except the loot icons, which are <img> URLs on the wiki's own CDN
// (plain images, so no CORS involved — see README.md).
//
// No screen capture or overlay, so this app needs no Alt1 permissions; it just
// registers for the "add app" flow.





const STORAGE_KEY = "thieving.view";
const WIKI = "https://runescape.wiki";
/** The pickpocketing tables the wiki splits out, in the order it lists them. */
const AREAS = [
    { key: "", label: "all pickpocket targets" },
    { key: "standard", label: "standard targets" },
    { key: "wilderness", label: "Rogues' Castle (Wilderness)" },
    { key: "arc", label: "the Arc" },
    { key: "prifddinas", label: "Prifddinas" }
];
const PICKPOCKET = new Set(AREAS.slice(1).map(a => a.key));
const DEFAULTS = {
    tab: "pickpocket",
    search: "",
    sort: "level",
    level: 99,
    onlyUsable: false,
    icons: true,
    area: ""
};
let view = load();
/** Wiki pages whose loot table is currently unfolded. */
const open = new Set();
function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const v = { ...DEFAULTS, ...JSON.parse(raw) };
            // A stored area that no longer exists (the quest targets, dropped in
            // favour of one-row-per-thing) would filter everything away.
            if (!AREAS.some(a => a.key === v.area))
                v.area = "";
            return v;
        }
    }
    catch (e) {
        // corrupt or unavailable storage — fall through to defaults
    }
    return { ...DEFAULTS };
}
function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(view));
    }
    catch (e) {
        // storage full or blocked; the UI still works for this session
    }
}
// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/** Level cells are plain numbers on the wiki, but a few read "unknown". */
const levelOf = (e) => parseInt(e.level, 10) || 0;
const xpOf = (e) => parseFloat(e.xp.replace(/,/g, "")) || 0;
// ---------------------------------------------------------------------------
// Pickpocketing mechanics — https://runescape.wiki/w/Thieving#Core_mechanics
//
// A click is worth a whole streak, not one steal: auto-pickpocketing repeats
// every 3 ticks and only stops when you're caught. So the interesting number is
// what one click is worth, which is the xp per steal times the expected number
// of steals before the first failure.
//
// Everything below is the bare mechanic with no modifiers — no Crystal Mask, no
// Light Form, no Sticky Fingers, no camouflage-outfit stun dodges (a dodge would
// reset the streak rather than end it, which only makes the real number better).
// ---------------------------------------------------------------------------
/** The free success chance a target hands out over its first few pickpockets. */
function levelBoost(e) {
    // The elven clan workers, Waiko islanders and the Cyclopes are called out by
    // name on the wiki: they get the long boost despite being under level 100.
    if (e.category === "prifddinas" || e.category === "arc")
        return { boost: 0.25, attempts: 25 };
    const req = levelOf(e);
    if (req <= 30)
        return { boost: 0.15, attempts: 10 };
    if (req <= 50)
        return { boost: 0.20, attempts: 10 };
    if (req <= 99)
        return { boost: 0.25, attempts: 10 };
    return { boost: 0.25, attempts: 25 };
}
/**
 * Success chance on the `n`th consecutive pickpocket of a target (1-based).
 *
 * 75% at the level the target unlocks, +1% per level over that up to 100%, plus
 * the level boost for the first few attempts. Past those, the target notices
 * you: −0.25% per further attempt, all the way down to hopeless.
 */
function successChance(e, level, n) {
    const req = levelOf(e);
    const { boost, attempts } = levelBoost(e);
    const base = Math.min(1, 0.75 + 0.01 * (level - req)) + boost;
    return Math.max(0, Math.min(1, base - 0.0025 * Math.max(0, n - attempts)));
}
/**
 * Expected successful steals from one click: Σ over n of P(first n all succeed).
 * The chance reaches 0 within a few hundred attempts, so the sum is finite.
 */
function stealsPerClick(e, level) {
    const req = levelOf(e);
    if (!PICKPOCKET.has(e.category) || !req || level < req)
        return 0;
    let total = 0;
    let streak = 1;
    for (let n = 1; n <= 1000; n++) {
        const p = successChance(e, level, n);
        if (p <= 0)
            break;
        streak *= p;
        total += streak;
        if (streak < 1e-9)
            break;
    }
    return total;
}
const xpPerClick = (e, level) => xpOf(e) * stealsPerClick(e, level);
/** Compact enough for the row header: 8.3, 216, 1.2k, 34k. */
function compact(n) {
    if (n >= 10000)
        return (n / 1000).toFixed(0) + "k";
    if (n >= 1000)
        return (n / 1000).toFixed(1) + "k";
    if (n >= 100)
        return n.toFixed(0);
    return n.toFixed(1);
}
/**
 * Rarity as a probability, or null when the wiki doesn't give a number.
 * Handles "Always", "5/20", "~54/376" and thousands separators.
 */
function chance(rarity) {
    const r = rarity.trim().toLowerCase();
    if (r.startsWith("always"))
        return 1;
    const m = /([\d,.]+)\s*\/\s*([\d,.]+)/.exec(r);
    if (!m)
        return null;
    const top = parseFloat(m[1].replace(/,/g, ""));
    const bottom = parseFloat(m[2].replace(/,/g, ""));
    return bottom > 0 ? top / bottom : null;
}
function percent(p) {
    if (p >= 1)
        return "100%";
    if (p >= 0.1)
        return (p * 100).toFixed(1) + "%";
    if (p >= 0.001)
        return (p * 100).toFixed(2) + "%";
    return (p * 100).toPrecision(2) + "%";
}
/** The wiki's own green→red rarity shading, in this app's palette. */
function rarityColour(p) {
    if (p === null)
        return "#888";
    if (p >= 0.5)
        return "#8fce7f";
    if (p >= 0.1)
        return "#c9d17a";
    if (p >= 0.02)
        return "#d8b46a";
    if (p >= 0.005)
        return "#d89a6a";
    return "#d98080";
}
const wikiUrl = (page) => `${WIKI}/w/${encodeURIComponent(page.replace(/ /g, "_"))}`;
// ---------------------------------------------------------------------------
// Element handles
// ---------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const els = {
    tabs: $("tabs"),
    search: $("search"),
    sort: $("sort"),
    level: $("level"),
    onlyUsable: $("onlyusable"),
    icons: $("icons"),
    subrow: $("subrow"),
    area: $("area"),
    list: $("list"),
    count: $("count"),
    source: $("source")
};
els.area.innerHTML = AREAS.map(a => `<option value="${esc(a.key)}">${esc(a.label)}</option>`).join("");
els.source.innerHTML = `Copied from the <a href="${WIKI}/w/Thieving" target="_blank" rel="noreferrer">RuneScape Wiki</a>
	on ${esc(_data__WEBPACK_IMPORTED_MODULE_4__.SOURCE_DATE)}, CC BY-NC-SA 3.0. Rarities marked ~ are the wiki's own estimates.`;
// ---------------------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------------------
const inTab = (e, tab) => tab === "pickpocket" ? PICKPOCKET.has(e.category) : e.category === tab;
/** Everything a search term is allowed to hit, built once per entry. */
const haystacks = new Map();
function haystack(e) {
    let s = haystacks.get(e.page);
    if (s === undefined) {
        s = [e.name, ...(e.aka || []), e.location || "", e.items || "",
            ...e.loot.map(g => g.group + " " + g.drops.map(d => d.item).join(" "))]
            .join(" ").toLowerCase();
        haystacks.set(e.page, s);
    }
    return s;
}
function visible() {
    const terms = view.search.toLowerCase().split(/\s+/).filter(Boolean);
    const out = _data__WEBPACK_IMPORTED_MODULE_4__.ENTRIES.filter(e => {
        if (!inTab(e, view.tab))
            return false;
        if (view.tab === "pickpocket" && view.area && e.category !== view.area)
            return false;
        if (view.onlyUsable && levelOf(e) > view.level)
            return false;
        return terms.every(t => haystack(e).includes(t));
    });
    out.sort((a, b) => {
        if (view.sort === "name")
            return a.name.localeCompare(b.name);
        if (view.sort === "xp")
            return xpOf(b) - xpOf(a) || a.name.localeCompare(b.name);
        if (view.sort === "click") {
            // Stalls and chests have no streak, so they fall back to raw xp.
            const d = xpPerClick(b, view.level) - xpPerClick(a, view.level);
            if (d)
                return d;
            return xpOf(b) - xpOf(a) || a.name.localeCompare(b.name);
        }
        return levelOf(a) - levelOf(b) || a.name.localeCompare(b.name);
    });
    return out;
}
// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
function renderDrop(d) {
    const p = chance(d.rarity);
    const icon = view.icons && d.img
        ? `<img src="${esc(WIKI + d.img)}" alt="" loading="lazy" onerror="this.remove()">`
        : "";
    // The wiki's estimated rarities keep their ~; the percentage inherits it.
    const approx = d.rarity.trim().startsWith("~") ? "~" : "";
    const pct = p === null ? "" : `<span style="color:${rarityColour(p)}">${approx}${percent(p)}</span>`;
    return `<tr>
		<td class="ic">${icon}</td>
		<td>${esc(d.item)}</td>
		<td class="n">${esc(d.qty)}</td>
		<td class="n" title="${esc(d.rarity)}">${pct || esc(d.rarity)}</td>
	</tr>`;
}
function renderLoot(groups) {
    if (!groups.length)
        return `<div class="hint">The wiki lists no loot table for this one.</div>`;
    return groups.map(g => {
        const rows = g.drops.map(renderDrop).join("");
        return (g.group ? `<div class="grp">${esc(g.group)}</div>` : "") +
            `<table><thead><tr><th colspan="2">Item</th><th class="n">Qty</th><th class="n">Chance</th></tr></thead>
			<tbody>${rows}</tbody></table>`;
    }).join("");
}
function renderFacts(e) {
    const facts = [["Level", e.level], ["XP", e.xp]];
    const steals = stealsPerClick(e, view.level);
    if (steals) {
        // Room to spell it out here, unlike in the row header.
        facts.push(["XP / click", Math.round(xpOf(e) * steals).toLocaleString()]);
        facts.push(["Steals / click", steals.toFixed(1)]);
    }
    if (e.respawn)
        facts.push(["Respawn", e.respawn]);
    if (e.stun)
        facts.push(["Stun", e.stun]);
    if (e.damage)
        facts.push(["Damage", e.damage]);
    if (e.multi) {
        // [x2, x3, x4] — each is "<thieving> <agility>", or N/A past level 105.
        const labels = ["x2 at", "x3 at", "x4 at"];
        e.multi.forEach((m, i) => {
            if (!/n\/?a/i.test(m))
                facts.push([labels[i], m.replace(/\s+/, " thv / ") + " agi"]);
        });
    }
    if (e.location)
        facts.push(["Where", e.location]);
    if (e.items)
        facts.push(["Contains", e.items]);
    const grid = `<div class="facts">${facts
        .map(([k, v]) => `<div><span>${esc(k)}</span><span>${esc(v)}</span></div>`)
        .join("")}</div>`;
    // Variants share a row; name them so it's clear nothing went missing.
    return e.aka
        ? `${grid}<div class="hint">Same level, xp and loot as ${esc(e.aka.join(", "))}.</div>`
        : grid;
}
function renderRow(e) {
    const isOpen = open.has(e.page);
    const locked = levelOf(e) > view.level;
    const drops = e.loot.reduce((n, g) => n + g.drops.length, 0);
    // The area is obvious once you've filtered to it, and never applies off-tab.
    const tag = view.tab === "pickpocket" && !view.area && e.category !== "standard"
        ? `<span class="tag">${esc(e.category)}</span>` : "";
    const members = e.members === false ? `<span class="tag f2p">f2p</span>` : "";
    // One click is one auto-pickpocket streak, so that — not the per-steal xp —
    // is what actually differs between targets.
    const perClick = xpPerClick(e, view.level);
    const click = view.tab === "pickpocket"
        ? `<span class="pc" title="expected xp for one click, at level ${view.level}">${perClick ? compact(perClick) + "/click" : "&mdash;"}</span>`
        : "";
    return `<div class="row${isOpen ? " open" : ""}${locked ? " locked" : ""}" data-page="${esc(e.page)}">
		<div class="head">
			<span class="nm">${esc(e.name)}</span>
			${members}${tag}
			<span class="lv">${esc(e.level)}</span>
			<span class="xp">${esc(e.xp)} xp</span>
			${click}
		</div>
		${isOpen ? `<div class="body">
			${renderFacts(e)}
			${renderLoot(e.loot)}
			<div class="hint">${drops} loot ${drops === 1 ? "row" : "rows"} &middot;
				<a href="${esc(wikiUrl(e.page))}" target="_blank" rel="noreferrer">wiki page</a></div>
		</div>` : ""}
	</div>`;
}
function render() {
    els.tabs.querySelectorAll("button").forEach(b => b.classList.toggle("sel", b.dataset.tab === view.tab));
    els.subrow.style.display = view.tab === "pickpocket" ? "" : "none";
    const shown = visible();
    els.count.textContent = `${shown.length} of ${_data__WEBPACK_IMPORTED_MODULE_4__.ENTRIES.filter(e => inTab(e, view.tab)).length}`;
    els.list.innerHTML = shown.length
        ? shown.map(renderRow).join("")
        : `<div class="empty">Nothing matches — clear the search or raise your level.</div>`;
}
// ---------------------------------------------------------------------------
// Interaction
// ---------------------------------------------------------------------------
function readForm() {
    view.search = els.search.value;
    view.sort = els.sort.value;
    view.level = Math.min(120, Math.max(1, Math.floor(Number(els.level.value) || 1)));
    view.onlyUsable = els.onlyUsable.checked;
    view.icons = els.icons.checked;
    view.area = els.area.value;
    save();
    render();
}
function syncForm() {
    els.search.value = view.search;
    els.sort.value = view.sort;
    els.level.value = String(view.level);
    els.onlyUsable.checked = view.onlyUsable;
    els.icons.checked = view.icons;
    els.area.value = view.area;
}
els.tabs.addEventListener("click", e => {
    const tab = e.target.closest("button[data-tab]");
    if (!tab)
        return;
    view.tab = tab.dataset.tab;
    // Rows from the previous tab would stay unfolded behind the filter otherwise.
    open.clear();
    save();
    render();
});
els.list.addEventListener("click", e => {
    const target = e.target;
    if (target.closest("a"))
        return;
    const row = target.closest(".row");
    if (!row)
        return;
    const page = row.dataset.page;
    if (open.has(page))
        open.delete(page);
    else
        open.add(page);
    render();
    if (open.has(page)) {
        document.querySelector(`.row[data-page="${CSS.escape(page)}"]`)
            ?.scrollIntoView({ block: "nearest" });
    }
});
document.addEventListener("input", readForm);
document.addEventListener("change", readForm);
// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
syncForm();
render();
if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
}
else {
    const addappurl = `alt1://addapp/${new URL("./appconfig.json", document.location.href).href}`;
    $("addapp").innerHTML = `Alt1 not detected — <a href="${addappurl}">add this app to Alt1</a>`;
}
// keep the alt1 import referenced (types + handy in console)
const lib = alt1__WEBPACK_IMPORTED_MODULE_0__;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});