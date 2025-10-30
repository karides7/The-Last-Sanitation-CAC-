function showCapital() {
  let exp = localStorage.getItem(`exp`);
  let microplastics = localStorage.getItem(`microplastics`);
  let microplasticsNumbers = document.getElementById(`microplastics`);
  let awarenessNumbers = document.getElementById(`awareness`);

  if (microplasticsNumbers != null)
    microplasticsNumbers.textContent = `MICROPLASTICS: ${microplastics}`;
  if (awarenessNumbers != null)
   	awarenessNumbers.textContent = `AWARENESS LEVEL: ${exp}`;
}

showCapital();

setInterval(showCapital, 100);
