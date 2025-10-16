import { delta, getFPS, updateDelta } from "./core/delta.js";

function update(time) {
  updateDelta(time);
  console.log(getFPS());
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
