function showCapital() {
  let exp = localStorage.getItem(`exp`);
  let microplastics = localStorage.getItem(`microplastics`);
  let microplasticsNumbers = document.getElementById(`microplastics`);
  let awarenessNumbers = document.getElementById(`awareness`);
  let levelcontainer = document.getElementById(`levelcontainer`)

  if (microplasticsNumbers != null)
    microplasticsNumbers.textContent = `MICROPLASTICS: ${microplastics}`;

  levelcontainer.textContent = ` AWARENESS LEVEL: ${exp}`;
}

showCapital();

setInterval(showCapital, 100);
