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
		this.container.style.height = `20%`;
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
