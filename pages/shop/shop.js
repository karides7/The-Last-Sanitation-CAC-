var shopContainer;
var card;
setTimeout(function () {
	shopContainer = document.getElementById(`shop-container`);
	for (let i = 1; i <= 6; i++) {
		card = document.createElement(`div`);
		card.className = `card-container`;
		card.style.transform = `translate(${108 * (i - 1) + 8}%)`;
		shopContainer.appendChild(card);

		if (i === 6) {
			shopContainer.style.width = `${462 * i}px`;
		}
	}
}, 500);
