const countiesArr = [
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

const sybau = document.getElementsByTagName('button');
const clickSound = new Audio("resources/images/sfx/click1.mp3");
const hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");


for (let button of sybau) {
  button.addEventListener('mouseover', function () {
		hoverSound.play()
	})
  button.addEventListener('click', function() {
    clickSound.play()
  });
}
