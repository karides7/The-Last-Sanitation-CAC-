import { delta } from "./delta.js";
import { Cleaner, cleanerInstances } from "./units/cleaners.js";

export function loadBattleUI() {
	$("#container").load(`./pages/ui/battle/battle.html`);
}

export function drawCleaners() {
	for (let cleaner of cleanerInstances) {
		console.log(cleaner);
		document.getElementById(`container`).appendChild(cleaner.container);
	}
}

export function moveCleaners(delta) {
	for (let cleaner of cleanerInstances) {
		cleaner.step(delta);
	}
}
