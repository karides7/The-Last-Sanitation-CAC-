const startButton = document.getElementById(`start button`);

startButton.onclick = function () {
  document.getElementById(`startMenu`).remove();
  const ui = document.createElement(`div`);
  document.body.appendChild(ui);
  ui.id = `ui`;
  $(function () {
    $("#ui").load(`./pages/ui/ui.html`);
    $.getScript("./pages/ui/ui.js", function (script, textStatus, jqXHR) {});
    setTimeout(function () {
      $.getScript(
        "./core/menuswap.js",
        function (script, textStatus, jqXHR) {}
      );
    }, 1000);
  });
};
