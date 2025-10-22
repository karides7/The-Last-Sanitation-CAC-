let menuButton;
let shopButton;
let loadoutButton;
let battleButton;
let gamblingButton;

menuButton = document.getElementById(`menu-button`);
shopButton = document.getElementById(`shop-button`);
loadoutButton = document.getElementById(`loadout-button`);
battleButton = document.getElementById(`battle-button`);
gamblingButton = document.getElementById(`gambling-button`);

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

menuButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/menu/menu.html`);
    $.getScript(
      "./pages/menu/menu.js",
      function (script, textStatus, jqXHR) {}
    );
    document.body.style.overflowY = `visible`;
  }, 500);
});

shopButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/shop/shop.html`);
    $.getScript(
      "./pages/shop/shop.js",
      function (script, textStatus, jqXHR) {}
    );
    document.body.style.overflowY = `visible`;
  }, 500);
});

loadoutButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/menu/menu.html`);
    $.getScript(
      "./pages/menu/menu.js",
      function (script, textStatus, jqXHR) {}
    );
    document.body.style.overflowY = `visible`;
  }, 500);
});

battleButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/map/map.html`);
    $.getScript("./pages/map/map.js", function (script, textStatus, jqXHR) {});
    document.body.style.overflowY = `visible`;
  }, 500);
});

gamblingButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/gambling/gambling.html`);
    $.getScript("./pages/gambling/gambling.js", function (script, textStatus, jqXHR) {});
    document.body.style.overflowY = `visible`;
  }, 500);
});
