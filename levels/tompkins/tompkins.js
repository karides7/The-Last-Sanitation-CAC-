import { drawUnits, loadBattleUI } from "../../core/battle.js";
import { units } from "../../core/cards.js";
import { data } from "../../core/data.js";
import { getInput12345 } from "../../core/input.js";
import { Cleaner } from "../../core/units/cleaners.js";
import { Trash } from "../../core/units/trash.js";

let selectedCardsArray = data.selectedCards;
let selectedCardsData = [];
let unitKeys = Object.keys(units);

for (let i in selectedCardsArray) {
	i++;
	selectedCardsData.push(units[unitKeys[i]]);
}

new Trash(`trash`);
setTimeout(drawUnits, 100);

loadBattleUI();

let input;
setInterval(function () {
	input = getInput12345();
	for (let i in input) {
		if (input[i]) {
			if (i == 0) {
				new Cleaner(`squirtMan`);
			}
			setTimeout(drawUnits, 100);
		}
	}
}, 17);
