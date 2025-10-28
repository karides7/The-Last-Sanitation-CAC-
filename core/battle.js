import { Cleaner, cleanerInstances } from "./units/cleaners.js";

$("#container").load(`./pages/ui/battle/battle.html`);

new Cleaner(`streetSweeper`);

setTimeout(function () {
	for (let cleaner of cleanerInstances) {
		document.getElementById(`container`).appendChild(cleaner.container);
	}
}, 1000);
