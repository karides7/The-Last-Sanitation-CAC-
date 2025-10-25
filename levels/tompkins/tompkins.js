import { units } from "../../core/cards.js";
import { data } from "../../core/data.js";
import { getInput12345 } from "../../core/input.js";

console.log(`loaded Tompkins level.`);

let selectedCardsArray = data.selectedCards;
let selectedCardsData = [];
let unitKeys = Object.keys(units);

for (let i in selectedCardsArray) {
	if (i > 0) {
		selectedCardsData.push(units[unitKeys[i]]);
	}
}

console.log(selectedCardsData);

let input;
setInterval(function () {
	input = getInput12345();
}, 500);

let cooldowns = [false, false, false, false, false];

for (let i in input) {
	if (input[i] && !cooldowns[i]) {
	}
}
