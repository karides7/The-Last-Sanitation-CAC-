let cheapButton = document.getElementById(`cheap`);
let expensiveButton = document.getElementById(`expensive`);

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
fadeContainer.id = `fadeContainer`;
fadeContainer.style.width = `80%`;
fadeContainer.style.height = `100%`;
fadeContainer.style.left = `calc(300px + 5%)`;
document.body.appendChild(fadeContainer);

let backContainer;
backContainer = document.createElement(`div`);
backContainer.style.position = `absolute`;
backContainer.id = `backContainer`;
backContainer.style.width = `80%`;
backContainer.style.height = `100%`;
backContainer.style.left = `calc(300px + 5%)`;
backContainer.style.zIndex = `20`;
document.body.appendChild(backContainer);

cheapButton.addEventListener(`click`, function () {
  $(`#fadeContainer`).load(`./core/fade.html`);
  setTimeout(function () {
    $(`#gamblingAnimation`).load(`./pages/ui/gambling/cheap.html`);
    document.getElementById(`container`).style.display = `none`;
  }, 500);
});

expensiveButton.addEventListener(`click`, function () {
  $(`#fadeContainer`).load(`./core/fade.html`);
  setTimeout(function () {
    $(`#gamblingAnimation`).load(`/pages/ui/gambling/expensive.html`);
  }, 500);
});
