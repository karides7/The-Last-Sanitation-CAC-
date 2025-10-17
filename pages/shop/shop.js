let shopContainer = document.getElementById(`shop-container`);

for (let i = 1; i <= 10; i++) {
  const card = document.createElement(`div`);
  card.className = `card-container`;
  card.style.left = `${2.5 + 40 * (i - 1)}vw`;
  shopContainer.appendChild(card);
  if (i === 10) {
    shopContainer.style.width = `${2.5 + 40 * i}%`;
  }
}
