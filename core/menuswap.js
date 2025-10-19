let menuButton;
let shopButton;
let loadoutButton;
let battleButton;

menuButton = document.getElementById(`menu-button`);
shopButton = document.getElementById(`shop-button`);
loadoutButton = document.getElementById(`loadout-button`);
battleButton = document.getElementById(`battle-button`);

let container;
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
}

shopButton.addEventListener(`click`, function () {
  createContainer();
  setTimeout(function () {
    $(`#container`).load(`./pages/shop/shop.html`);
    $.getScript(
      "./pages/shop/shop.js",
      function (script, textStatus, jqXHR) {}
    );
    document.body.style.overflowY = `visible`;
  }, 100);
});
