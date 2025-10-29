import { gumballColor } from "../../gambling/gambling.js";

let gumballImage = document.getElementById("gumball");

const gumballArray = [`green gumball`, `red gumball`, `yellow gumball`];

gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]}.png`;

gumballImage.addEventListener(`click`, function () {
  if (gumballImage.src.endsWith("gumball.png")) {
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 2.png`;
  } else if (gumballImage.src.endsWith("2.png")) {
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 3.png`;
  } else {
    gumballImage.remove();
  }
});
