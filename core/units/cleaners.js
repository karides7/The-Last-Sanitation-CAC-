import { units } from "../cards";
import { trashInstances } from "./trash";

export const cleanerInstances = [];

class Cleaner {
	constructor(cleanerType) {
		self.cleanerType = cleanerType;
		self.data = units[cleanerType];
		self.position = 100; // in percentage
		self.speedMultiplier = 1;

		self.container = document.createElement(`div`);
		self.container.style.height = `20%`;
	}
	stun() {
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

let cleaner = new Cleaner();
