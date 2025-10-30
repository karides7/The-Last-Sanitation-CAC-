import { units } from "../cards.js";

export const cleanerInstances = [];

export class Cleaner {
	constructor(cleanerType) {
		this.cleanerType = cleanerType;
		this.data = units[cleanerType];
		this.position = 12.5;
		this.speedMultiplier = 1;
		this.health = this.data.health;
		this.startingHealth = this.health;
		this.time = 0;

		this.moving = true;
		this.attacking = false;

		this.container = document.createElement(`div`);
		this.container.className = `${cleanerType}`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `52.5%`;
		this.container.style.left = `80%`;
		this.container.style.aspectRatio = `.4`;

		this.sprite = document.createElement(`img`);
		this.container.appendChild(this.sprite);

		this.sprite.style.position = `absolute`;
		this.sprite.style.transform = `translate(-32%)`;
		this.sprite.style.aspectRatio = `1.25`;
		this.sprite.style.height = `100%`;

		this.createHealthMeter();
		this.updateHealthMeter();

		cleanerInstances.push(this);
	}

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

	step(delta) {
		this.time += delta / 400;
		if (this.moving) {
			if (Math.round(this.time) % 2 == 0) {
				this.sprite.src = this.data[`images`][`movementFrames`][0];
			} else {
				this.sprite.src = this.data[`images`][`movementFrames`][1];
			}

			if (this.position < 79.5) {
				this.position += this.speedMultiplier * delta * 0.008;
			} else {
				this.moving = false;
			}
			this.container.style.left = `${this.position}%`;
		} else {
			console.log(this.data[`images`][`idlesFrames`]);
		}
	}

	updateHealthMeter() {
		this.healthContainerInternal.style.width = `${
			(this.health / this.startingHealth) * 96.5
		}%`;
	}

	getPosition() {
		let rect = this.container.getBoundingClientRect();
		return [rect.x, rect.y];
	}

	damage(amount) {
		this.health -= amount;
	}
}
