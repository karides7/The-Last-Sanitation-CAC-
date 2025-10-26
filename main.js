import { getData } from "./core/data.js";
import { updateDelta } from "./core/delta.js";
import { getInput12345 } from "./core/input.js";

getData();

function update(time) {
	updateDelta(time);
	window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

const sybau = document.getElementsByTagName(`button`);
const clickSound = new Audio("resources/images/sfx/click1.mp3");

for (let button of sybau) {
  button.addEventListener('click', function() {
    clickSound.play()
})}

