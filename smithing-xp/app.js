(function () {
	"use strict";

	var DATA = window.SX_DATA;
	var STORE_KEY = "smithing-xp-v1";
	var DEFAULT_MODS = {
		level: 99, curXp: 0, cape: false, levelBoost: 0,
		forge: true, burial: false, perSpirit: 2,
		varrock: 0, elite: false, helmet: false, fortune: "None",
		dxp: "None", raf: false, pcore: false, avatar: "None", urns: "None", outfit: "None",
		wise: "None", aura: "None", trah: false, custom: 0, bxp: 0,
		solemn: "None", efficiency: "None"
	};

	var state = load();

	// ---------- storage ----------

	function load() {
		var s = {};
		try { s = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { s = {}; }
		var mods = {};
		for (var k in DEFAULT_MODS) mods[k] = s.mods && s.mods[k] !== undefined ? s.mods[k] : DEFAULT_MODS[k];
		return {
			ores: s.ores || {},
			spirits: s.spirits || {},
			view: s.view || "ores",
			hideEmpty: !!s.hideEmpty,
			mods: mods
		};
	}

	function save() {
		try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
	}

	// ---------- helpers ----------

	function $(id) { return document.getElementById(id); }

	function esc(s) {
		return String(s).replace(/[&<>"']/g, function (c) {
			return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
		});
	}

	// Accepts "1500", "1,500", "1.5k", "2m".
	function parseQty(v) {
		var m = String(v).trim().toLowerCase().replace(/[,\s]/g, "").match(/^(\d*\.?\d+)([km]?)$/);
		if (!m) return 0;
		var n = parseFloat(m[1]) * (m[2] === "k" ? 1e3 : m[2] === "m" ? 1e6 : 1);
		return Math.max(0, Math.floor(n));
	}

	function fmt(n) { return Math.round(n).toLocaleString("en-US"); }

	function fmtXp(n) {
		return (Math.round(n * 10) / 10).toLocaleString("en-US", { maximumFractionDigits: 1 });
	}

	function xpAtLevel(lvl) {
		var pts = 0;
		for (var i = 1; i < lvl; i++) pts += Math.floor(i + 300 * Math.pow(2, i / 7));
		return Math.floor(pts / 4);
	}

	function levelAtXp(xp) {
		var lvl = 1;
		while (lvl < 120 && xpAtLevel(lvl + 1) <= xp) lvl++;
		return lvl;
	}

	function opts(table, cur) {
		return Object.keys(table).map(function (k) {
			return '<option' + (k === cur ? " selected" : "") + ">" + esc(k) + "</option>";
		}).join("");
	}

	// ---------- calculation ----------

	// Share n primal ores out over the primal ores so the scarcest ones are topped up first.
	function fillPrimal(have, n) {
		var ids = DATA.ores.filter(function (o) { return o.primal; }).map(function (o) { return o.id; });
		var add = {};
		ids.forEach(function (id) { add[id] = 0; });
		while (n > 0) {
			ids.sort(function (a, b) { return have[a] - have[b]; });
			var low = have[ids[0]], k = 1;
			while (k < ids.length && have[ids[k]] === low) k++;
			// Raise the k lowest to the next level (or as far as n allows).
			var next = k < ids.length ? have[ids[k]] : Infinity;
			var step = Math.min(next - low, Math.floor(n / k));
			if (step < 1) {
				for (var i = 0; i < n; i++) { have[ids[i]]++; add[ids[i]]++; }
				break;
			}
			for (var j = 0; j < k; j++) { have[ids[j]] += step; add[ids[j]] += step; }
			n -= step * k;
		}
		return add;
	}

	function compute() {
		var m = state.mods;
		var level = (m.curXp > 0 ? levelAtXp(m.curXp) : m.level) + (m.cape ? 1 : 0) + m.levelBoost;
		var have = {}, fromSpirit = {};

		DATA.ores.forEach(function (o) {
			have[o.id] = state.ores[o.id] || 0;
			fromSpirit[o.id] = 0;
			if (o.spirit && !o.primal) {
				fromSpirit[o.id] = (state.spirits[o.spirit] || 0) * m.perSpirit;
				have[o.id] += fromSpirit[o.id];
			}
		});
		var primalAdd = fillPrimal(have, (state.spirits.primal || 0) * m.perSpirit);
		for (var pid in primalAdd) fromSpirit[pid] = primalAdd[pid];
		var totalOres = 0;
		for (var oid in have) totalOres += have[oid];

		var boost = DATA.dxp[m.dxp] * (1 + (m.raf ? 0.1 : 0)) * (1 + (m.pcore ? 0.6 : 0)) +
			DATA.avatar[m.avatar] + DATA.urns[m.urns] + DATA.outfit[m.outfit] + DATA.wise[m.wise] +
			DATA.aura[m.aura] + m.custom / 100;

		function doubleChance(bar) {
			var d = level >= bar.dbl ? DATA.doubleSmelt : 0;
			if (m.helmet && (bar.dbl < 200 || bar.helmet)) d += 0.01;
			if (m.varrock && bar.va.indexOf(m.varrock) >= 0) d += DATA.varrock[bar.vaTier] * (m.elite ? 2 : 1);
			return d + DATA.fortune[m.fortune] / 10;
		}

		var rows = {}, skipped = [];

		function smelt(bar, actions) {
			var d = doubleChance(bar);
			return { bar: bar, actions: actions, dbl: d, smelts: actions * (1 + d), bars: actions * (1 + d) * bar.yield };
		}

		DATA.bars.forEach(function (bar) {
			var actions = Infinity;
			for (var o in bar.ores) actions = Math.min(actions, Math.floor(have[o] / bar.ores[o]));
			if (!actions) return;
			if (level < bar.level) { skipped.push(bar); return; }
			for (var o2 in bar.ores) have[o2] -= actions * bar.ores[o2];
			rows[bar.id] = smelt(bar, actions);
		});

		// Elder rune bars are smelted from rune bars plus animica.
		var el = DATA.elder, src = rows[el.fromBar];
		var elderActions = Math.min(src ? Math.floor(src.bars) : 0, have.light, have.dark);
		if (elderActions > 0) {
			if (level < el.level) skipped.push(el);
			else {
				have.light -= elderActions;
				have.dark -= elderActions;
				src.bars -= elderActions;
				src.toElder = elderActions;
				rows[el.id] = smelt(el, elderActions);
			}
		}

		var order = [DATA.bars[0], el].concat(DATA.bars.slice(1));
		var refund = DATA.efficiency[m.efficiency];
		var solemn = DATA.solemn[m.solemn];
		var list = [], base = 0, total = 0;

		order.forEach(function (bar) {
			var r = rows[bar.id];
			if (!r) return;
			var smeltBoost = boost + (bar.trah && m.trah ? 0.2 : 0);
			r.smeltBase = r.smelts * bar.smelt;
			r.forgeBase = 0;
			r.burialBase = 0;
			r.sets = 0;
			if (m.forge && bar.forge) {
				// Every refunded bar is forged again: bars / (1 - p) forged in total.
				r.forged = r.bars / (1 - refund);
				r.forgeBase = r.forged * bar.forge;
				if (m.burial && bar.burial) {
					var setBars = DATA.burialSetBars * Math.pow(2, bar.max);
					r.sets = Math.floor(r.bars / setBars);
					r.burialBase = r.sets * setBars * bar.forge * (1 + DATA.burialXp + solemn) / 2;
				}
			}
			r.xp = r.smeltBase * smeltBoost + (r.forgeBase + r.burialBase) * boost;
			base += r.smeltBase + r.forgeBase + r.burialBase;
			total += r.xp;
			list.push(r);
		});

		var bxp = Math.min(m.bxp, base);
		var leftover = DATA.ores.filter(function (o) { return have[o.id] > 0; })
			.map(function (o) { return { ore: o, n: have[o.id] }; });

		return {
			level: level, boost: boost, rows: list, skipped: skipped, leftover: leftover,
			fromSpirit: fromSpirit, totalOres: totalOres, base: base, bxp: bxp, total: total + bxp
		};
	}

	// ---------- rendering ----------

	function renderTotal(res) {
		var m = state.mods;
		$("total").textContent = fmt(res.total) + " xp";
		var sub = fmt(res.base) + " base × " + (Math.round(res.boost * 10000) / 10000);
		if (res.bxp) sub += " + " + fmt(res.bxp) + " bonus xp";
		if (m.curXp > 0) {
			var after = Math.min(m.curXp + res.total, 2e8);
			sub += " · level " + levelAtXp(m.curXp) + " → " + levelAtXp(after);
		}
		$("total-sub").textContent = sub;
	}

	function render() {
		var res = compute();
		renderTotal(res);

		Array.prototype.forEach.call(document.querySelectorAll("#views button"), function (b) {
			b.classList.toggle("on", b.getAttribute("data-view") === state.view);
		});
		["ores", "results", "mods"].forEach(function (v) { $("view-" + v).hidden = v !== state.view; });

		if (state.view === "ores") renderOres(res);
		else if (state.view === "results") renderResults(res);
		else renderMods();
	}

	function qtyInput(kind, id, v) {
		return '<input type="text" inputmode="numeric" class="qty" data-kind="' + kind + '" data-id="' + id +
			'" value="' + (v ? v : "") + '" placeholder="0">';
	}

	function renderOres(res) {
		var spiritOf = {};
		DATA.spirits.forEach(function (s) { spiritOf[s.id] = s; });
		var html = '<div class="toolbar">' +
			'<label><input type="checkbox" data-act="hide-empty"' + (state.hideEmpty ? " checked" : "") + "> Only show what I have</label>" +
			'<button class="btn" data-act="clear" style="margin-left:auto">Clear all</button></div>' +
			'<table class="ores"><thead><tr><th>Ore</th><th>Ores</th><th>Stone spirits</th></tr></thead><tbody>';

		var primalShown = false;
		DATA.ores.forEach(function (o) {
			var n = state.ores[o.id] || 0, sp = o.spirit ? state.spirits[o.spirit] || 0 : 0;
			if (o.primal && !primalShown) {
				primalShown = true;
				var ps = state.spirits.primal || 0;
				var anyPrimal = ps || DATA.ores.some(function (p) { return p.primal && state.ores[p.id]; });
				if (!state.hideEmpty || anyPrimal) {
					html += '<tr class="group"><td colspan="2">Primal ores <span class="muted">(spirits fill the scarcest ore)</span></td>' +
						"<td>" + qtyInput("spirit", "primal", ps) + "</td></tr>";
				}
			}
			if (state.hideEmpty && !n && !(sp && !o.primal)) return;
			html += "<tr><td>" + esc(o.name) + ' <small class="muted" data-hint="' + o.id + '">' + spiritHint(res, o.id) + "</small></td><td>" + qtyInput("ore", o.id, n) + "</td><td>" +
				(o.spirit && !o.primal ? qtyInput("spirit", o.spirit, sp) : "") + "</td></tr>";
		});
		html += "</tbody></table>" +
			'<div class="foot">Each stone spirit counts as ' + state.mods.perSpirit + " ores (change in &#9881;). " +
			"Quantities accept 1.5k / 2m.</div>";
		$("view-ores").innerHTML = html;
	}

	function spiritHint(res, id) { return res.fromSpirit[id] ? "+" + fmt(res.fromSpirit[id]) : ""; }

	function renderResults(res) {
		if (!res.rows.length && !res.skipped.length) {
			$("view-results").innerHTML = '<div class="empty">Enter some ores or stone spirits first.</div>';
			return;
		}
		var m = state.mods;
		var html = '<table class="items results"><thead><tr><th>Bar</th><th class="n">Bars</th><th class="n">Smelt xp</th>' +
			(m.forge ? '<th class="n">Forge xp</th>' : "") + "</tr></thead><tbody>";
		res.rows.forEach(function (r) {
			var smeltBoost = res.boost + (r.bar.trah && m.trah ? 0.2 : 0);
			var notes = [];
			if (r.dbl) notes.push(Math.round(r.dbl * 1000) / 10 + "% extra bar chance");
			if (r.toElder) notes.push(fmt(r.toElder) + " bars smelted on into elder rune");
			if (r.sets) notes.push(fmt(r.sets) + " burial set" + (r.sets === 1 ? "" : "s"));
			if (!r.bar.forge && m.forge) notes.push("smelting only");
			html += "<tr><td>" + esc(r.bar.name) + (notes.length ? '<small class="muted">' + esc(notes.join(" · ")) + "</small>" : "") + "</td>" +
				'<td class="n">' + fmt(r.bars) + "</td>" +
				'<td class="n">' + fmtXp(r.smeltBase * smeltBoost) + "</td>" +
				(m.forge ? '<td class="n">' + (r.bar.forge ? fmtXp((r.forgeBase + r.burialBase) * res.boost) : "–") + "</td>" : "") +
				"</tr>";
		});
		html += "</tbody></table>";

		if (res.skipped.length) {
			html += "<h2>Level too low</h2><ul class=\"plain\">" + res.skipped.map(function (b) {
				return "<li>" + esc(b.name) + ' <span class="muted">needs ' + b.level + " Smithing</span></li>";
			}).join("") + "</ul>";
		}
		if (res.leftover.length) {
			html += "<h2>Unused ores</h2><ul class=\"plain\">" + res.leftover.map(function (l) {
				return "<li>" + fmt(l.n) + " × " + esc(l.ore.name) + "</li>";
			}).join("") + "</ul>" +
				'<div class="foot">Leftovers are missing the ore they pair with, or the bar needs a higher level.</div>';
		}
		html += '<div class="foot">Bars and XP are expected values: extra-bar chances and refunds are averaged. ' +
			"Contested ores go to the highest-XP bar (e.g. coal to mithril before steel, luminite to rune before adamant).</div>";
		$("view-results").innerHTML = html;
	}

	function check(key, label, title) {
		return '<label' + (title ? ' title="' + esc(title) + '"' : "") + '><input type="checkbox" data-mod="' + key + '"' +
			(state.mods[key] ? " checked" : "") + "> " + label + "</label>";
	}

	function select(key, label, table) {
		return "<label>" + label + ' <select data-mod="' + key + '">' + opts(table, state.mods[key]) + "</select></label>";
	}

	function num(key, label, title) {
		return '<label' + (title ? ' title="' + esc(title) + '"' : "") + ">" + label +
			' <input type="text" inputmode="numeric" data-mod="' + key + '" data-num="1" value="' + state.mods[key] + '"></label>';
	}

	function renderMods() {
		var m = state.mods;
		var va = { 0: "None", 1: "Varrock armour 1", 2: "Varrock armour 2", 3: "Varrock armour 3", 4: "Varrock armour 4" };
		var vaOpts = Object.keys(va).map(function (k) {
			return '<option value="' + k + '"' + (+k === m.varrock ? " selected" : "") + ">" + va[k] + "</option>";
		}).join("");

		$("view-mods").innerHTML =
			"<h2>Level</h2><div class=\"mods\">" +
			num("level", "Smithing level") +
			num("curXp", "Current xp", "Optional. When set, your level is worked out from it and the level reached is shown.") +
			num("levelBoost", "Level boost", "Custom Smithing level boost (flat).") +
			check("cape", "Smithing skillcape (+1)") +
			"</div>" +

			"<h2>Processing</h2><div class=\"mods\">" +
			check("forge", "Forge the bars", "Off: only count smelting XP.") +
			check("burial", "Make burial sets", "Adamant and up: forge full +max armour sets and bury them for extra XP. Only whole sets count.") +
			select("solemn", "Solemn Smith", DATA.solemn) +
			select("efficiency", "Efficient Smithing", DATA.efficiency) +
			num("perSpirit", "Ores per stone spirit", "A spirit adds one ore on top of the one you mine, so 2 counts both.") +
			"</div>" +

			"<h2>Extra bar chance</h2><div class=\"mods\">" +
			'<label>Varrock armour <select data-mod="varrock" data-num="1">' + vaOpts + "</select></label>" +
			check("elite", "Varrock elite tasks done", "Doubles the Varrock armour effect.") +
			check("helmet", "Modified blacksmith's helmet") +
			select("fortune", "Fortune perk", DATA.fortune) +
			"</div>" +

			"<h2>XP boosts</h2><div class=\"mods\">" +
			select("urns", "Urns", DATA.urns) +
			select("outfit", "Blacksmith's outfit", DATA.outfit) +
			select("wise", "Wise perk", DATA.wise) +
			select("avatar", "Clan avatar", DATA.avatar) +
			select("aura", "Aura", DATA.aura) +
			select("dxp", "Double XP", DATA.dxp) +
			check("raf", "RAF xp boost scroll (10%)") +
			check("pcore", "Advanced pulse core", "Applied to all XP like the wiki calculator does (50% + 10%); the real core is capped.") +
			check("trah", "Trahaearn hour", "+20% XP on corrupted ore.") +
			num("custom", "Custom xp boost %") +
			num("bxp", "Bonus xp available") +
			"</div>" +

			'<div class="foot">Heat method, Rapid, Tinker, crystal hammer, Superheat, juju, powerburst, luminite injector ' +
			"and firemaking level from the wiki calculator only change how fast you smith, not the XP the ores are worth, " +
			'so they are left out. <button class="btn" data-act="reset-mods">Reset modifiers</button></div>';
	}

	// ---------- events ----------

	document.addEventListener("click", function (e) {
		var t = e.target.closest("button");
		if (!t) return;
		var view = t.getAttribute("data-view"), act = t.getAttribute("data-act");
		if (view) state.view = view;
		else if (act === "clear" || act === "reset-mods") {
			if (!t.hasAttribute("data-armed")) {
				t.setAttribute("data-armed", "1");
				t.textContent = "Click again to confirm";
				return;
			}
			if (act === "clear") { state.ores = {}; state.spirits = {}; }
			else state.mods = JSON.parse(JSON.stringify(DEFAULT_MODS));
		} else return;
		save();
		render();
	});

	// Quantities update the totals as you type without re-rendering the input being edited.
	document.addEventListener("input", function (e) {
		var t = e.target, kind = t.getAttribute("data-kind");
		if (!kind) return;
		var bucket = kind === "ore" ? state.ores : state.spirits, v = parseQty(t.value);
		if (v) bucket[t.getAttribute("data-id")] = v; else delete bucket[t.getAttribute("data-id")];
		save();
		var res = compute();
		renderTotal(res);
		Array.prototype.forEach.call(document.querySelectorAll("[data-hint]"), function (h) {
			h.textContent = spiritHint(res, h.getAttribute("data-hint"));
		});
	});

	document.addEventListener("change", function (e) {
		var t = e.target, key = t.getAttribute("data-mod");
		if (t.getAttribute("data-act") === "hide-empty") state.hideEmpty = t.checked;
		else if (key) {
			if (t.type === "checkbox") state.mods[key] = t.checked;
			else if (t.hasAttribute("data-num")) {
				var v = parseFloat(String(t.value).replace(/,/g, ""));
				state.mods[key] = isFinite(v) ? v : DEFAULT_MODS[key];
				if (key === "level") state.mods.level = Math.max(1, Math.min(120, Math.floor(state.mods.level)));
				if (key === "perSpirit" || key === "curXp" || key === "bxp") state.mods[key] = Math.max(0, state.mods[key]);
			} else state.mods[key] = t.value;
		} else return;
		save();
		render();
	});

	// ---------- Alt1 ----------

	if (window.alt1) {
		alt1.identifyAppUrl("./appconfig.json");
	} else {
		var cfg = new URL("appconfig.json", location.href).href;
		$("addapp-link").href = "alt1://addapp/" + cfg;
		$("addapp").hidden = false;
	}

	render();
})();
