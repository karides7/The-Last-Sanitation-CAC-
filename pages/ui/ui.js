function showCapital() {
  let exp = localStorage.getItem(`exp`);
  let microplastics = localStorage.getItem(`microplastics`);
}

showCapital();

setInterval(showCapital, 100);
