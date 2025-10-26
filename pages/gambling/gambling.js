var cheapButton = document.getElementById(`cheap`);
var expensiveButton = document.getElementById(`expensive`);

var gamblingAnimation = document.createElement(`div`);
gamblingAnimation.style.position = `absolute`;
gamblingAnimation.id = `gamblingAnimation`;
gamblingAnimation.style.width = `80%`;
gamblingAnimation.style.height = `100%`;
gamblingAnimation.style.left = `calc(300px + 5%)`;
gamblingAnimation.style.zIndex = `-522`;
document.body.appendChild(gamblingAnimation);

cheapButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade.html`);
	setTimeout(function () {
		$(`#gamblingAnimation`).load(`./pages/ui/gambling/cheap.html`);
		document.getElementById(`container`).style.display = `none`;
	}, 500);
});

expensiveButton.addEventListener(`click`, function () {
	$(`#fadeContainer`).load(`./core/fade.html`);
	$(`#gamblingAnimation`).load(`/pages/ui/gambling/expensive.html`);
});

const sybau = document.getElementsByTagName(`button`);
const clickSound = new Audio("resources/images/sfx/click1.mp3");
const hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");

for (let button of sybau) {
	button.addEventListener('mouseover', function () {
		hoverSound.play()
	})
  button.addEventListener('click', function() {
    clickSound.play()
	}
)}