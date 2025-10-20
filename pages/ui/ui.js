function showCapital() {
    let exp = localStorage.getItem(`exp`);
    let microplastics = localStorage.getItem(`microplastics`);
    let stats = document.getElementById(`ui-stats`);
    if (stats != null)
        stats.textContent = `MICROPLASTICS: ${microplastics} EXP: ${exp}`;
}

showCapital();

setInterval(showCapital, 100);
