import { drawShop } from "../pages/shop/shop.js";

let menuButton;
let shopButton;
let loadoutButton;
let battleButton;

menuButton = document.getElementById(`menu-button`);
shopButton = document.getElementById(`shop-button`);
loadoutButton = document.getElementById(`loadout-button`);
battleButton = document.getElementById(`battle-button`);

var container;
function createContainer() {
	if (document.getElementById(`container`) != null) {
		document.getElementById(`container`).remove();
	}
	container = document.createElement(`div`);
	document.body.appendChild(container);
	container.style.position = `absolute`;
	container.style.zIndex = -50;
	container.id = `container`;
	container.style.width = `80%`;
	container.style.height = `100%`;
	container.style.left = `calc(300px + 5%)`;
}
createContainer();

function clearContainer() {
	container.textContent = ``;
}

menuButton.addEventListener(`click`, function () {
	$(`#container`).load(`./pages/menu/menu.html`);
	document.body.style.overflowY = `visible`;
});

shopButton.addEventListener(`click`, function () {
	$(`#container`).load(`./pages/shop/shop.html`, function () {
		drawShop();
	});
	document.body.style.overflowY = `visible`;
});

loadoutButton.addEventListener(`click`, function () {
	$(`#container`).load(`./pages/menu/menu.html`);
	document.body.style.overflowY = `visible`;
});

battleButton.addEventListener(`click`, function () {
	$(`#container`).load(`./pages/map/map.html`);
	document.body.style.overflowY = `visible`;
});
