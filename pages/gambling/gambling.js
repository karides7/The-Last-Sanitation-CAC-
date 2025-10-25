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
