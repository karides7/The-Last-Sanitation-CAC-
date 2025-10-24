let cheapButton = document.getElementById(`cheap`);
let expensiveButton = document.getElementById(`cheap`);

let gamblingAnimation = document.createElement(`div`);
gamblingAnimation.style.position = `absolute`;
gamblingAnimation.id = `gamblingAnimation`;
gamblingAnimation.style.width = `80%`;
gamblingAnimation.style.height = `100%`;
gamblingAnimation.style.left = `calc(300px + 5%)`;
document.body.appendChild(gamblingAnimation);

let fadeContainer;
fadeContainer = document.createElement(`div`);
fadeContainer.style.position = `absolute`;
fadeContainer.style.zIndex = -50;
fadeContainer.id = `fadeContainer`;
fadeContainer.style.width = `80%`;
fadeContainer.style.height = `100%`;
fadeContainer.style.left = `calc(300px + 5%)`;
document.body.appendChild(fadeContainer);

cheapButton.addEventListener(`click`, function () {
  $(`gamblingAnimation`).load(`./core/fade.html`);
  setTimeout(function () {
    $(`#container`).load(`./pages/ui/gambling/cheap`);
  }, 500);
});
