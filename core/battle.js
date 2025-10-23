spawned_enemies = [];
spawned_cleaners = [];

let container = document.createElement(`div`);
container.style.width = `100%`;
container.style.height = `100%`;
document.body.appendChild(container);
container.id = `container`;

$("#container").load(`../../pages/ui/battle/battle.html`);
