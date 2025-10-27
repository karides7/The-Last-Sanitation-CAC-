import { units } from "../cards";
import { trashInstances } from "./trash";

export const cleanerInstances = [];

class Cleaner {
  constructor(cleanerType) {
    self.cleanerType = cleanerType;
    self.data = units[cleanerType];
    self.position = 100; // in percentage lol
    self.speedMultiplier = 1;
  }
  stun() {
    // temporarily delays movement whilst in combat
    self.speedMultiplier = 0.5;
    setTimeout(function () {
      self.stunned = false;
    }, 500);
  }
  step(delta) {
    self.position -= speed * delta;
    for (let trashMonster of trashInstances) {
      // get the monsters distance and stats
    }
  }
}
