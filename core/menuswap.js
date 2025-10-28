import { drawShop } from "../pages/shop/shop.js";

let menuButton = document.getElementById(`menu-button`);
let shopButton = document.getElementById(`shop-button`);
let loadoutButton = document.getElementById(`mission-button`);
let battleButton = document.getElementById(`battle-button`);
let gamblingButton = document.getElementById(`gambling-button`);

let container;
container = document.createElement(`div`);
container.style.position = `absolute`;
container.style.zIndex = `2`;
container.id = `container`;
container.style.width = `80%`;
container.style.height = `100%`;
container.style.left = `calc(300px + 5%)`;
document.body.appendChild(container);

let fadeContainer;
fadeContainer = document.createElement(`div`);
fadeContainer.style.position = `absolute`;
fadeContainer.style.zIndex = 2222;
fadeContainer.id = `fadeContainer`;
fadeContainer.style.width = `80%`;
fadeContainer.style.height = `100%`;
fadeContainer.style.left = `calc(300px + 5%)`;
fadeContainer.style.pointerEvents = `none`;
document.body.appendChild(fadeContainer);

let countiesArr;
function MapButtons() {
  countiesArr = [
    `Tompkins`,
    `Cortland`,
    `Chenango`,
    `Osnego`,
    `Delaware`,
    `Greene`,
    `Rensselaer`,
    `Columbia`,
    `Ulster`,
    `Sullivan`,
    `Broome`,
  ];

  let countiesRef = [];
  for (let i = 0; i < countiesArr.length; i++) {
    countiesRef.push(document.getElementById(`${countiesArr[i]}`));
  }
  for (let county of countiesRef) {
    county.addEventListener(`click`, function () {
      $(document.body).load(
        `./levels/${county.id.toLowerCase()}/${county.id.toLowerCase()}.html`
      );
    });
  }
}

let canSwap = true;
function canSwapCheck() {
  if (canSwap) {
    canSwap = false;
    setTimeout(function () {
      canSwap = true;
    }, 1000);
  } else {
    return false;
  }
  return true;
}

menuButton.addEventListener(`click`, function () {
  if (canSwapCheck()) {
    $(`#fadeContainer`).load(`./core/fade.html`);
    setTimeout(function () {
      $(`#container`).load(`./pages/menu/menu.html`);
      if (document.getElementById(`gamblingAnimation`) != null)
        document.getElementById(`gamblingAnimation`).remove();
      document.getElementById(`container`).style.display = `block`;
    }, 500);
  }
});

shopButton.addEventListener(`click`, function () {
  if (canSwapCheck()) {
    $(`#fadeContainer`).load(`./core/fade.html`);
    setTimeout(function () {
      $(`#container`).load(`./pages/shop/shop.html`, drawShop);
      if (document.getElementById(`gamblingAnimation`) != null)
        document.getElementById(`gamblingAnimation`).remove();
      document.getElementById(`container`).style.display = `block`;
    }, 500);
  }
});

loadoutButton.addEventListener(`click`, function () {
  $(`#fadeContainer`).load(`./core/fade.html`);
  setTimeout(function () {
    $(`#container`).load(`./pages/menu/menu.html`);
    if (document.getElementById(`gamblingAnimation`) != null)
      document.getElementById(`gamblingAnimation`).remove();
    document.getElementById(`container`).style.display = `block`;
  }, 500);
});

battleButton.addEventListener(`click`, function () {
  if (canSwapCheck()) {
    $(`#fadeContainer`).load(`./core/fade.html`);
    setTimeout(function () {
      $(`#container`).load(`./pages/map/map.html`);
      if (document.getElementById(`gamblingAnimation`) != null)
        document.getElementById(`gamblingAnimation`).remove();
      document.getElementById(`container`).style.display = `block`;
      setTimeout(function () {
        MapButtons();
      }, 500);
    }, 500);
  }
});

gamblingButton.addEventListener(`click`, function () {
  if (canSwapCheck()) {
    $(`#fadeContainer`).load(`./core/fade.html`);
    setTimeout(function () {
      $(`#container`).load(`./pages/gambling/gambling.html`);
      if (document.getElementById(`gamblingAnimation`) != null)
        document.getElementById(`gamblingAnimation`).remove();
      document.getElementById(`container`).style.display = `block`;
    }, 500);
  }
});

const sybau = document.getElementsByTagName("button");
let clickSound = new Audio("resources/images/sfx/click1.mp3");
let hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");
for (let button of sybau) {
  button.addEventListener("mouseover", function () {
    hoverSound.currentTime = 0;
    //hoverSound.play();
  });
  button.addEventListener("click", function () {
    clickSound.currentTime = 0;
    //clickSound.play();
  });
}
