import { units } from "../cards.js";

export const cleanerInstances = [];

export class Cleaner {
	constructor(cleanerType) {
		this.cleanerType = cleanerType;
		this.data = units[cleanerType];
		this.position = 80; // in percentage
		this.speedMultiplier = 1;
		this.health = this.data.health;
		this.startingHealth = this.health;
		this.health = 100;

		this.container = document.createElement(`div`);
		this.container.className = `${cleanerType}`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `53%`;
		this.container.style.left = `80%`;
		this.container.style.backgroundColor = `blue`;
		this.container.style.aspectRatio = `.4`;

		this.health = document.createElement(`div`);
		this.container.appendChild(this.health);

		this.health.style.height = `5%`;
		this.health.style.width = `150%`;
		this.health.style.position = `absolute`;
		this.health.style.left = `-25%`;
		this.health.style.backgroundColor = `black`;
		this.health.style.transform = `translate(0, -200%)`;

		this.health.style.height = `5%`;
		this.health.style.width = `150%`;
		this.health.style.position = `absolute`;
		this.health.style.left = `-25%`;
		this.health.style.backgroundColor = `black`;
		this.health.style.transform = `translate(0, -200%)`;

		cleanerInstances.push(this);
	}
	step(delta) {
		if (this.position > 20.0)
			this.position -= this.speedMultiplier * delta * 0.01;
		this.container.style.left = `${this.position}%`;
	}
	updateHealth() {}
	damage() {}
	getPosition() {}
}
