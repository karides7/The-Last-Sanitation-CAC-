import { drawShop } from "../pages/shop/shop.js";

let menuButton = document.getElementById(`menu-button`);
let shopButton = document.getElementById(`shop-button`);
let loadoutButton = document.getElementById(`loadout-button`);
let battleButton = document.getElementById(`battle-button`);
let gamblingButton = document.getElementById(`gambling-button`);

let container;
container = document.createElement(`div`);
container.style.position = `absolute`;
container.style.zIndex = -50;
container.id = `container`;
container.style.width = `80%`;
container.style.height = `100%`;
container.style.left = `calc(300px + 5%)`;
document.body.appendChild(container);

let fadeContainer;
fadeContainer = document.createElement(`div`);
fadeContainer.style.position = `absolute`;
fadeContainer.style.zIndex = -50;
fadeContainer.id = `fadeContainer`;
fadeContainer.style.width = `80%`;
fadeContainer.style.height = `100%`;
fadeContainer.style.left = `calc(300px + 5%)`;
document.body.appendChild(fadeContainer);

menuButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade/fade.html`);
	setTimeout(function () {
		$(`#container`).load(`./pages/menu/menu.html`);
	}, 1500);
	document.body.style.overflowY = `visible`;
});

shopButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade/fade.html`);
	setTimeout(function () {
		$(`#container`).load(`./pages/shop/shop.html`, drawShop);
	}, 1500);
	document.body.style.overflowY = `visible`;
});

loadoutButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade/fade.html`);
	setTimeout(function () {
		$(`#container`).load(`./pages/menu/menu.html`);
	}, 1500);
	document.body.style.overflowY = `visible`;
});

battleButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade/fade.html`);
	setTimeout(function () {
		$(`#container`).load(`./pages/map/map.html`);
	}, 1500);
	document.body.style.overflowY = `visible`;
});

gamblingButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade/fade.html`);
	setTimeout(function () {
		$(`#container`).load(`./pages/gambling/gambling.html`);
	}, 1500);
});
