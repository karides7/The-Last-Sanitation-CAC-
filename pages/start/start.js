const startButton = document.getElementById(`start button`);

startButton.onclick = function () {
  document.getElementById(`startMenu`).remove();
  const ui = document.createElement(`div`);
  document.body.appendChild(ui);
  ui.id = `ui`;
  ui.style.position = `absolute`;
  ui.style.zIndex = `50`;
  $("#ui").load(`./pages/ui/ui.html`);
};
