import { gumballColor } from "../../gambling/gambling.js";
import { reward } from "../../gambling/gambling.js";

let gumballImage = document.getElementById("gumball");
let prize = document.getElementById("prize");
let backExpensive = document.getElementById("backExpensive");

function calcReward(prize) {
  if (prize <= 30) {
    return 0
  } else if (prize > 30 && prize <= 60) {
    return 1
  } else if (prize > 60 && prize <= 80) {
    return 2
  } else if (prize > 80 && prize <= 90) {
    return 3
  } else if (prize > 90 && prize <= 99) {
    return 4
  } else if (prize === 100) {
    return 5
  }
}

const gumballArray = [`green gumball`, `red gumball`, `yellow gumball`];
const rewardArray = [
  `0 microplastics :(`,
  `80 microplastics`,
  `160 microplastics`,
  `300 microplastics`,
  `1000 microplastics`,
  `MR DICE!!!`,
];

gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]}.png`;

gumballImage.addEventListener(`click`, async function () {
  for (let i = 0; i <= 9; i++) {
    gumballImage.style.opacity = `1`;
    prize.textContent = ``;

    if (gumballImage.src.endsWith("gumball.png")) {
      gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 2.png`;
    } else if (gumballImage.src.endsWith("2.png")) {
      gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 3.png`;
    } else {
      gumballImage.style.opacity = `0`;
      localStorage.getItem() = localStorage.setItem(rewardArray[rewardIndex])
      prize.textContent = `You Win ${rewardArray[rewardIndex]}`;
    }
    console.log(`cool`);
  }
});
