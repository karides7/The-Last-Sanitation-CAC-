import { delta } from "./delta.js";
import { Cleaner, cleanerInstances } from "./units/cleaners.js";
import { trashInstances } from "./units/trash.js";

export function loadBattleUI() {
	$("#container").load(`./pages/ui/battle/battle.html`);
}

export function drawUnits() {
	for (let cleaner of cleanerInstances)
		document.getElementById(`container`).appendChild(cleaner.container);
	for (let trash of trashInstances)
		document.getElementById(`container`).appendChild(trash.container);
}

export function moveUnits(delta) {
	for (let cleaner of cleanerInstances) cleaner.step(delta);
	for (let trash of trashInstances) trash.step(delta);
}
