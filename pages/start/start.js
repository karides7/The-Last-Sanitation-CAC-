const startButton = document.getElementById(`start button`);

startButton.onclick = function () {
	document.getElementById(`startMenu`).remove();
	const ui = document.createElement(`div`);
	document.body.appendChild(ui);
	ui.id = `ui`;
	$(function () {
		$("#ui").load(`./pages/ui/ui.html`);
	});
};
