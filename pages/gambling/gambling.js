export let gumballColor = (Math.ceil(Math.random() * 3) - 1)

function main() {

	let cheapButton = document.getElementById(`cheap`);
	let expensiveButton = document.getElementById(`expensive`);

	let gamblingAnimation = document.createElement(`div`);
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
		setTimeout(function () {
			$(`#gamblingAnimation`).load(`./pages/ui/gambling/expensive.html`);
			document.getElementById(`container`).style.display = `none`;
		}, 500);
	});
}
main();
