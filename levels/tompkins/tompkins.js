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

new Cleaner(`streetSweeper`);
new Trash(`trash1`);

loadBattleUI();
setTimeout(drawUnits, 100);

let input;
setInterval(function () {
	input = getInput12345();
	for (let i in input) {
		if (input[i]) {
			console.log(i);
		}
	}
}, 17);
