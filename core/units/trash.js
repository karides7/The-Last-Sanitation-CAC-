import { units } from "../cards.js";

export const trashInstances = [];

export class Trash {
	constructor(trashType) {
		this.trashType = trashType;
		this.data = units[trashType];
		this.position = 20; // in percentage
		this.speedMultiplier = 1;

		this.container = document.createElement(`div`);
		this.container.className = `${trashType}`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `53%`;
		this.container.style.left = `20%`;
		this.container.style.backgroundColor = `red`;
		this.container.style.aspectRatio = `.4`;

		trashInstances.push(this);
	}
	step(delta) {
		if (this.position < 80.0)
			this.position += this.speedMultiplier * delta * 0.01;
		this.container.style.left = `${this.position}%`;
	}
}
