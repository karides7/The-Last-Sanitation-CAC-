import { moveCleaners } from "./core/battle.js";
import { getData } from "./core/data.js";
import { delta, updateDelta } from "./core/delta.js";
import { getInput12345 } from "./core/input.js";

getData();

function update(time) {
	updateDelta(time);
	window.requestAnimationFrame(update);
	moveCleaners(delta);
}
window.requestAnimationFrame(update);
