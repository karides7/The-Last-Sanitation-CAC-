import { units } from "../cards.js";

export const cleanerInstances = [];

export class Cleaner {
	constructor(cleanerType) {
		this.cleanerType = cleanerType;
		this.data = units[cleanerType];
		console.log(this.data);
		this.position = 100; // in percentage
		this.speedMultiplier = 1;

		this.container = document.createElement(`div`);
		this.container.className = `${cleanerType}`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `53%`;
		this.container.style.left = `80%`;
		this.container.style.backgroundColor = `blue`;
		this.container.style.aspectRatio = `.4`;

		cleanerInstances.push(this);
	}
	step(delta) {
		this.position -= this.speedMultiplier * delta * 0.01;
		console.log(this.position);
		this.container.style.left = `${0.8 * this.position}%`;
	}
}
