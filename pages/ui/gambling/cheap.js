import { gumballColor } from "../../gambling/gambling.js";
import { reward } from "../../gambling/gambling.js";

function calcReward(prize) {
  if (prize <= 30) {
    return 0;
  } else if (prize <= 50) {
    return 1;
  } else if (prize <= 70) {
    return 2;
  } else if (prize <= 80) {
    return 3;
  } else if (prize <= 90) {
    return 4;
  } else if (prize < 95) {
    return 5;
  }
}

let gumballImage = document.getElementById("gumball");
let prize = document.getElementById("prize");
let currentMicroplastics = localStorage.getItem(`microplastics`);
let finalPrize = calcReward(reward);



const gumballArray = [`green gumball`, `red gumball`, `yellow gumball`];
const rewardArray = [
  `0 MICROPLASTICS :(`,
  `80 MICROPLASTICS`,
  `160 MICROPLASTICS`,
  `300 MICROPLASTICS`,
  `1000 MICROPLASTICS`,
  `MR DICE!!!`,
];
const numberReward = [
0,
80,
160,
300,
1000,
0
];

gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]}.png`;

gumballImage.addEventListener(`click`, function () {
  gumballImage.style.opacity = `1`;

  if (gumballImage.src.endsWith("gumball.png")) {
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 2.png`;
  } else if (gumballImage.src.endsWith("2.png")) {
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 3.png`;
  } else {
    gumballImage.style.opacity = `0`;
    
    localStorage.setItem(`microplastics`, parseInt(currentMicroplastics) + numberReward[finalPrize]);
    prize.textContent = `YOU WIN ${rewardArray[finalPrize]}`;

    prize.style.fontFamily = `monospace`
    prize.style.fontWeight = `1000`
  }
});

setTimeout(() => {
  
}, 1000);