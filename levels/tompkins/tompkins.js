import { drawCleaners, loadBattleUI } from "../../core/battle.js";
import { units } from "../../core/cards.js";
import { data } from "../../core/data.js";
import { getInput12345 } from "../../core/input.js";
import { Cleaner } from "../../core/units/cleaners.js";

let selectedCardsArray = data.selectedCards;
let selectedCardsData = [];
let unitKeys = Object.keys(units);

for (let i in selectedCardsArray) {
	i++;
	selectedCardsData.push(units[unitKeys[i]]);
}

new Cleaner(`streetSweeper`);

loadBattleUI();
setTimeout(drawCleaners, 100);

let input;
setInterval(function () {
	input = getInput12345();
}, 500);

for (let i in input) {
	if (input[i] && !cooldowns[i]) {
	}
}
