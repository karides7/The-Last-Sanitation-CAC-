import { getData } from "./core/data.js";
import { delta, getFPS, updateDelta } from "./core/delta.js";

getData();

function update(time) {
    updateDelta(time);
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
