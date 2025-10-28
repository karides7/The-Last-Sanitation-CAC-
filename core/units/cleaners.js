import { units } from "../cards.js";
import { trashInstances } from "./trash.js";

export const cleanerInstances = [];

export class Cleaner {
  constructor(cleanerType) {
    this.cleanerType = cleanerType;
    this.data = units[cleanerType];
    this.position = 100; // in percentage
    this.speedMultiplier = 1;

    this.container = document.createElement(`div`);
    this.container.className = `${cleanerType}`;
    this.container.style.position = `absolute`;

    this.container.style.height = `20%`;
    this.container.style.width = `20%`;
    this.container.style.top = `53%`;

    this.container.style.backgroundColor = `blue`;
    cleanerInstances.push(this);
  }
  stun() {
    this.speedMultiplier = 0.5;
    setTimeout(function () {
      this.stunned = false;
    }, 500);
  }
  step(delta) {
    this.position -= speed * delta;
    for (let trashMonster of trashInstances) {
      // get the monsters distance and stats
    }
  }
}
