export let gumballColor = Math.round(Math.random() * 3) - 1;
export let reward = Math.round(Math.random() * 100);

let cheapButton = document.getElementById(`cheap`);
let expensiveButton = document.getElementById(`expensive`);

function main() {
  let gamblingAnimation = document.createElement(`div`);
  gamblingAnimation.style.position = `absolute`;
  gamblingAnimation.id = `gamblingAnimation`;
  gamblingAnimation.style.width = `80%`;
  gamblingAnimation.style.height = `100%`;
  gamblingAnimation.style.left = `calc(300px + 5%)`;
  gamblingAnimation.style.zIndex = `-522`;
  document.body.appendChild(gamblingAnimation);

  cheapButton.addEventListener(`click`, function () {
    let currentMicroplastics = parseInt(
      localStorage.getItem(`microplastics`) || "0"
    );

    if (currentMicroplastics >= 100) {
      localStorage.setItem(`microplastics`, currentMicroplastics - 100);

      $(`#fadeContainer`).load(`./core/fade.html`);
      setTimeout(function () {
        $(`#gamblingAnimation`).load(`./pages/ui/gambling/cheap.html`);
        document.getElementById(`container`).style.display = `none`;
      }, 500);
    }
  });

  expensiveButton.addEventListener(`click`, function () {
    let currentMicroplastics = parseInt(
      localStorage.getItem(`microplastics`) || "0"
    );

    if (currentMicroplastics >= 980) {
      localStorage.setItem(`microplastics`, currentMicroplastics - 980);

      $(`#fadeContainer`).load(`./core/fade.html`);
      setTimeout(function () {
        $(`#gamblingAnimation`).load(`./pages/ui/gambling/expensive.html`);
        document.getElementById(`container`).style.display = `none`;
      }, 500);
    }
  });
}

main();
