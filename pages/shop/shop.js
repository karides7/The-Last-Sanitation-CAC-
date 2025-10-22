var shopContainer = document.getElementById(`shop-container`);
var card;

export function drawShop() {
	while (shopContainer == null)
		shopContainer = document.getElementById(`shop-container`);
	shopContainer = document.getElementById(`shop-container`);
	for (let i = 1; i <= 10; i++) {
		card = document.createElement(`div`);
		card.className = `card-container`;
		card.style.transform = `translate(${108 * (i - 1) + 8}%)`;
		shopContainer.appendChild(card);

		let purchaseButton = document.createElement(`button`);
		card.appendChild(purchaseButton);
		purchaseButton.style.width = `90%`;
		purchaseButton.style.aspectRatio = 5;
		purchaseButton.style.position = `absolute`;
		purchaseButton.style.left = `5%`;
		purchaseButton.style.top = `83.5%`;
		purchaseButton.style.borderRadius = `3%/15%`;
		purchaseButton.style.border = `none`;
		purchaseButton.id = `purchaseButton${i}`;

		let purchaseButtonText = document.createElement(`p`);
		purchaseButton.appendChild(purchaseButtonText);
		purchaseButtonText.style.width = `70%`;
		purchaseButtonText.style.height = `20%`;
		purchaseButtonText.style.left = `15%`;
		purchaseButtonText.style.top = `20%`;
		purchaseButtonText.style.position = `absolute`;
		purchaseButtonText.textContent = `UNLOCK - 0 AWARENESS`;
		purchaseButtonText.style.color = `rgb(165, 165, 165)`;
		purchaseButtonText.style.fontWeight = `1000`;

		if (i === 10) {
			shopContainer.style.width = `${462 * i}px`;
		}
	}
}
