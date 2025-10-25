import { getData } from "./core/data.js";
import { updateDelta } from "./core/delta.js";
import { getInput12345 } from "./core/input.js";

getData();

function update(time) {
	updateDelta(time);
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
