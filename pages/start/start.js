const startButton = document.getElementById(`start button`);

startButton.onclick = function () {
  document.getElementById(`startMenu`).remove();
  const ui = document.createElement(`div`);
  document.body.appendChild(ui);
  ui.id = `ui`;
  ui.style.position = `absolute`;
  ui.style.zIndex = `50`;
  $("#ui").load(`./pages/ui/ui.html`);
  $("#map")
};

const sybau = document.getElementsByTagName(`button`);
const clickSound = new Audio("resources/images/sfx/click1.mp3");
const hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");

for (let button of sybau) {
  button.addEventListener('click', function() {
    clickSound.play()
	}
)} 