let streetsweepercard = document.getElementById(`streetsweepercard`);
let cardContainer = document.getElementById(`card-container`);

var shopContainer = document.getElementById(`shop-container`);
var card;

const cardArr = [`streetsweepercard`, `janitor`, `roomba`]

export function drawShop() {
	while (shopContainer == null)
		shopContainer = document.getElementById(`shop-container`);
	shopContainer = document.getElementById(`shop-container`);
	for (let i = 1; i <= 10; i++) {
		card = document.createElement(`div`);
		card.className = `card-container`;
		card.style.transform = `translate(${108 * (i - 1) + 8}%)`;
		shopContainer.appendChild(card);
		card.style.width = `5.4%`

		let purchaseButton = document.createElement(`button`);
		card.appendChild(purchaseButton);
		purchaseButton.style.width = `90%`;
		purchaseButton.style.aspectRatio = `5`;
		purchaseButton.style.position = `absolute`;
		purchaseButton.style.left = `5%`;
		purchaseButton.style.top = `83.5%`;
		purchaseButton.style.borderRadius = `3%/15%`;
		purchaseButton.style.margin = `0`;
		purchaseButton.style.padding = `0`;
		purchaseButton.style.border = `none`;
		purchaseButton.style.display = `flex`;
		purchaseButton.style.alignItems = `center`;
		purchaseButton.id = `purchaseButton${i}`;

		let cardSlot = document.createElement(`img`);
		card.appendChild(cardSlot)
		cardSlot.src = `./resources/images/card shop/${cardArr[i - 1]}.png`
		cardSlot.style.width = `100%`
		cardSlot.style.height = `80%`


		let purchaseButtonText = document.createElement(`p`);
		purchaseButton.appendChild(purchaseButtonText);
		purchaseButtonText.style.width = `100%`;
		purchaseButtonText.style.height = `20%`;
		purchaseButtonText.style.position = `absolute`;

		purchaseButtonText.style.zIndex = `50`;
		purchaseButtonText.textContent = `UNLOCK - 0 AWARENESS`;
		purchaseButtonText.style.color = `rgb(165, 165, 165)`;
		purchaseButtonText.style.fontWeight = `1000`;
		purchaseButtonText.style.fontSize = `100%`;
		purchaseButtonText.style.textAlign = `center`;

		if (i === 10) {
			shopContainer.style.width = `${462 * i}px`;
		}

	}
}
