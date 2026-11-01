// Values from the RuneScape Wiki "Module:MS Data" / "Module:Smithing rate calculator"
// (the data behind Calculator:Smithing) and the "Stone spirits" page (CC BY-NC-SA 3.0).
window.SX_DATA = {
	// Raw materials, in input order. spirit = id of the stone spirit that yields this ore.
	ores: [
		{ id: "copper", name: "Copper ore", spirit: "copper" },
		{ id: "tin", name: "Tin ore", spirit: "tin" },
		{ id: "iron", name: "Iron ore", spirit: "iron" },
		{ id: "coal", name: "Coal", spirit: "coal" },
		{ id: "silver", name: "Silver ore", spirit: "silver" },
		{ id: "mithril", name: "Mithril ore", spirit: "mithril" },
		{ id: "adamantite", name: "Adamantite ore", spirit: "adamantite" },
		{ id: "luminite", name: "Luminite", spirit: "luminite" },
		{ id: "gold", name: "Gold ore", spirit: "gold" },
		{ id: "runite", name: "Runite ore", spirit: "runite" },
		{ id: "orichalcite", name: "Orichalcite ore", spirit: "orichalcite" },
		{ id: "drakolith", name: "Drakolith", spirit: "drakolith" },
		{ id: "necrite", name: "Necrite ore", spirit: "necrite" },
		{ id: "phasmatite", name: "Phasmatite", spirit: "phasmatite" },
		{ id: "banite", name: "Banite ore", spirit: "banite" },
		{ id: "light", name: "Light animica", spirit: "light" },
		{ id: "dark", name: "Dark animica", spirit: "dark" },
		{ id: "platinum", name: "Platinum ore", spirit: "platinum" },
		{ id: "corrupted", name: "Corrupted ore", spirit: null },
		// Primal ores share one stone spirit, which yields whichever primal ore is being mined.
		{ id: "novite", name: "Novite ore", spirit: "primal", primal: true },
		{ id: "bathus", name: "Bathus ore", spirit: "primal", primal: true },
		{ id: "marmaros", name: "Marmaros ore", spirit: "primal", primal: true },
		{ id: "kratonium", name: "Kratonium ore", spirit: "primal", primal: true },
		{ id: "fractite", name: "Fractite ore", spirit: "primal", primal: true },
		{ id: "zephyrium", name: "Zephyrium ore", spirit: "primal", primal: true },
		{ id: "argonite", name: "Argonite ore", spirit: "primal", primal: true },
		{ id: "katagon", name: "Katagon ore", spirit: "primal", primal: true },
		{ id: "gorgonite", name: "Gorgonite ore", spirit: "primal", primal: true },
		{ id: "promethium", name: "Promethium ore", spirit: "primal", primal: true }
	],

	spirits: [
		{ id: "copper", name: "Copper" }, { id: "tin", name: "Tin" }, { id: "iron", name: "Iron" },
		{ id: "coal", name: "Coal" }, { id: "silver", name: "Silver" }, { id: "mithril", name: "Mithril" },
		{ id: "adamantite", name: "Adamantite" }, { id: "luminite", name: "Luminite" }, { id: "gold", name: "Gold" },
		{ id: "runite", name: "Runite" }, { id: "orichalcite", name: "Orichalcite" }, { id: "drakolith", name: "Drakolith" },
		{ id: "necrite", name: "Necrite" }, { id: "phasmatite", name: "Phasmatite" }, { id: "banite", name: "Banite" },
		{ id: "light", name: "Light animica" }, { id: "dark", name: "Dark animica" }, { id: "platinum", name: "Platinum" },
		{ id: "primal", name: "Primal" }
	],

	// Bars in smelting priority order: contested ores (coal, luminite, iron, runite) go to the
	// bar that gives the most XP per contested ore first. Elder rune is handled separately
	// because it is made from rune bars.
	//   smelt  XP per smelting action       forge  XP per bar forged (0 = can't be forged)
	//   yield  bars per smelting action     dbl    level for the +10% double-smelt benefit (200 = never)
	//   va     Varrock armour tiers (1-4) that boost this bar, vaTier = tier whose effect applies
	//   max    highest +X upgrade, burial = can be made into a burial set
	bars: [
		{ id: "primal", name: "Primal", level: 100, smelt: 31, forge: 1400, yield: 5, dbl: 103, va: [], vaTier: 0, max: 5, burial: true,
			ores: { novite: 1, bathus: 1, marmaros: 1, kratonium: 1, fractite: 1, zephyrium: 1, argonite: 1, katagon: 1, gorgonite: 1, promethium: 1 } },
		{ id: "bane", name: "Bane", level: 80, smelt: 21, forge: 700, yield: 1, dbl: 81, va: [4], vaTier: 4, max: 4, burial: true, ores: { banite: 2 } },
		{ id: "necronium", name: "Necronium", level: 70, smelt: 17, forge: 500, yield: 1, dbl: 74, va: [3, 4], vaTier: 3, max: 4, burial: true, ores: { necrite: 1, phasmatite: 1 } },
		{ id: "orikalkum", name: "Orikalkum", level: 60, smelt: 13, forge: 350, yield: 1, dbl: 62, va: [3, 4], vaTier: 3, max: 3, burial: true, ores: { orichalcite: 1, drakolith: 1 } },
		{ id: "rune", name: "Rune", level: 50, smelt: 10, forge: 240, yield: 1, dbl: 57, va: [3, 4], vaTier: 3, max: 3, burial: true, ores: { runite: 1, luminite: 1 } },
		{ id: "adamant", name: "Adamant", level: 40, smelt: 7, forge: 170, yield: 1, dbl: 47, va: [2, 3, 4], vaTier: 2, max: 2, burial: true, ores: { adamantite: 1, luminite: 1 } },
		{ id: "mithril", name: "Mithril", level: 30, smelt: 5, forge: 120, yield: 1, dbl: 38, va: [2, 3, 4], vaTier: 2, max: 2, burial: false, ores: { mithril: 1, coal: 1 } },
		{ id: "steel", name: "Steel", level: 20, smelt: 3, forge: 75, yield: 1, dbl: 27, va: [1, 2, 3, 4], vaTier: 1, max: 1, burial: false, ores: { iron: 1, coal: 1 } },
		{ id: "iron", name: "Iron", level: 10, smelt: 2, forge: 40, yield: 1, dbl: 19, va: [1, 2, 3, 4], vaTier: 1, max: 1, burial: false, ores: { iron: 2 } },
		{ id: "bronze", name: "Bronze", level: 1, smelt: 1, forge: 15, yield: 1, dbl: 9, va: [1, 2, 3, 4], vaTier: 1, max: 0, burial: false, ores: { copper: 1, tin: 1 } },
		{ id: "gold", name: "Gold", level: 40, smelt: 7, forge: 0, yield: 1, dbl: 200, helmet: true, va: [], vaTier: 0, ores: { gold: 1 } },
		{ id: "silver", name: "Silver", level: 20, smelt: 3, forge: 0, yield: 1, dbl: 200, helmet: true, va: [], vaTier: 0, ores: { silver: 1 } },
		{ id: "platinum", name: "Platinum", level: 104, smelt: 33, forge: 0, yield: 1, dbl: 200, va: [], vaTier: 0, ores: { platinum: 1 } },
		{ id: "corrupted", name: "Corrupted ore", level: 89, smelt: 160, forge: 0, yield: 1, dbl: 200, va: [], vaTier: 0, trah: true, ores: { corrupted: 1 } }
	],

	// Rune bar + light animica + dark animica -> elder rune bar.
	elder: { id: "elder", name: "Elder rune", level: 90, smelt: 26, forge: 1000, yield: 1, dbl: 92, va: [4], vaTier: 4, max: 5, burial: true,
		ores: { light: 1, dark: 1 }, fromBar: "rune" },

	doubleSmelt: 0.1,          // levelling benefit
	varrock: { 1: 0.04, 2: 0.03, 3: 0.02, 4: 0.01 },
	burialSetBars: 12,         // bars in a +0 burial set (helm 2, body 5, legs 3, gauntlets 1, boots 1)
	burialXp: 0.05,

	urns: { "None": 0, "Urns": 0.2, "Urns + Enhancer": 0.25, "Exquisite urn": 0.25, "Exquisite urn + Enhancer": 0.3125 },
	outfit: { "None": 0, "1 piece": 0.01, "2 pieces": 0.02, "3 pieces": 0.03, "4 pieces": 0.04, "5 pieces": 0.06 },
	wise: { "None": 0, "Wise 1": 0.01, "Wise 2": 0.02, "Wise 3": 0.03, "Wise 4": 0.04 },
	fortune: { "None": 0, "Fortune 1": 0.005, "Fortune 2": 0.01, "Fortune 3": 0.015 },
	solemn: { "None": 0, "Solemn Smith I": 0.01, "Solemn Smith II": 0.02, "Solemn Smith III": 0.03, "Solemn Smith IV": 0.04, "Solemn Smith V": 0.05 },
	avatar: { "None": 0, "3%": 0.03, "4%": 0.04, "5%": 0.05, "6%": 0.06 },
	aura: { "None": 0, "Wisdom (2.5%)": 0.025, "Hellion (10%)": 0.1 },
	dxp: { "None": 1, "Non-members": 1.2, "Members": 2 },
	efficiency: { "None": 0, "Scroll of efficiency (2%)": 0.02, "+ Orthen furnace core (2.5%)": 0.025 }
};
