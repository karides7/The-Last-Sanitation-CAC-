let shopContainer = document.getElementById(`shop-container`);

for (let i = 1; i <= 6; i++) {
  const card = document.createElement(`div`);
  card.className = `card-container`;
  card.style.transform = `translate(${108 * (i - 1) + 8}%)`;
  shopContainer.appendChild(card);

  if (i === 6) {
    shopContainer.style.width = `${462 * i}px`;
  }
}
