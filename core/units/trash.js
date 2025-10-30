import { units } from "../cards.js";
import { cleanerInstances } from "./cleaners.js";

export const trashInstances = [];

export class Trash {
	constructor(trashType) {
		this.trashType = trashType;
		this.data = units[trashType];
		this.position = 80;
		this.speedMultiplier = 1;
		this.health = this.data.health;
		this.startingHealth = this.health;
		this.time = 0;

		this.moving = true;
		this.attacking = false;

		this.container = document.createElement(`div`);
		this.container.className = `trash`;
		this.container.style.position = `absolute`;

		this.container.style.height = `20%`;
		this.container.style.top = `52.5%`;
		this.container.style.left = `80%`;
		this.container.style.aspectRatio = `.4`;

		this.sprite = document.createElement(`img`);
		this.container.appendChild(this.sprite);

		this.sprite.style.position = `absolute`;
		this.sprite.style.transform = `translate(-15%) scaleX(-1)`;
		this.sprite.style.aspectRatio = `1.25`;
		this.sprite.style.height = `100%`;
		this.sprite.style.width = `150%`;
		this.sprite.style.filter = `drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.75));`;

		this.createHealthMeter();
		this.updateHealthMeter();

		trashInstances.push(this);
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

			if (this.position > 28) {
				this.position -= this.speedMultiplier * delta * 0.008;
			} else {
				this.moving = false;
			}
			this.container.style.left = `${this.position}%`;
		} else {
			this.sprite.src = this.data[`images`][`idleFrame`];
		}

		for (let cleaner of cleanerInstances) {
			let distance = Math.abs(cleaner.position - this.position);
			if (distance < 10) {
				this.moving = false;
				this.attacking = true;
			} else {
				this.attacking = false;
				if (this.position < 28) {
					this.moving = true;
				}
			}
			if (this.attacking) {
				cleaner.health -= (delta / 10) * this.data.damage;
				cleaner.updateHealthMeter();

				this.sprite.src = this.data[`images`][`attackFrames`][0];
			}
		}

		if (this.health <= 0) {
			trashInstances.splice(trashInstances.indexOf(this), 1);
			this.container.remove();
			delete this;
			this.moving = true;
		}

		if (trashInstances.length == 0 && this.position > 28) {
			this.moving = true;
		}
	}

	updateHealthMeter() {
		this.healthContainerInternal.style.width = `${
			(this.health / this.startingHealth) * 96.5
		}%`;
	}
}
