import { cleanerInstances } from "./units/cleaners";

$("#container").load(`../../pages/ui/battle/battle.html`);

for (let cleaner of cleanerInstances) {
	document.getElementById(`container`).append(cleaner);
}
