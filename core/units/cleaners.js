import { units } from "../cards.js";

export const cleanerInstances = [];

export class Cleaner {
	constructor(cleanerType) {
		this.cleanerType = cleanerType;
		this.data = units[cleanerType];
		this.position = 12.5; // in percentage
		this.speedMultiplier = 1;
		this.health = this.data.health;
		this.startingHealth = this.health;

		this.container = document.createElement(`div`);
		this.container.className = `${cleanerType}`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `51%`;
		this.container.style.left = `80%`;
		this.container.style.backgroundColor = `rgba(55, 0, 255, 0.25)`;
		this.container.style.aspectRatio = `.4`;

		this.createHealthMeter();
		this.updateHealthMeter();

		cleanerInstances.push(this);
	}
	step(delta) {
		if (this.position < 79.5)
			this.position += this.speedMultiplier * delta * 0.008;
		this.container.style.left = `${this.position}%`;
	}
	damage() {}
	getPosition() {}
	createHealthMeter() {
		this.healthContainer = document.createElement(`div`);
		this.container.appendChild(this.healthContainer);

		this.healthContainer.style.height = `5%`;
		this.healthContainer.style.width = `150%`;
		this.healthContainer.style.position = `absolute`;
		this.healthContainer.style.left = `-25%`;
		this.healthContainer.style.backgroundColor = `black`;
		this.healthContainer.style.transform = `translate(0, -200%)`;

		this.healthContainer.style.height = `5%`;
		this.healthContainer.style.width = `150%`;
		this.healthContainer.style.position = `absolute`;
		this.healthContainer.style.left = `-25%`;
		this.healthContainer.style.backgroundColor = `black`;
		this.healthContainer.style.transform = `translate(0, -200%)`;

		this.healthContainerInternal = document.createElement(`div`);
		this.healthContainer.appendChild(this.healthContainerInternal);

		this.healthContainerInternal.style.position = `absolute`;
		this.healthContainerInternal.style.height = `80%`;
		this.healthContainerInternal.style.backgroundColor = `red`;
		this.healthContainerInternal.style.left = `1.75%`;
		this.healthContainerInternal.style.top = `10%`;
	}
	updateHealthMeter() {
		this.healthContainerInternal.style.width = `${
			(this.health / this.startingHealth) * 96.5
		}%`;
	}
}
