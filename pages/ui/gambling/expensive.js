import { gumballColor } from "../../gambling/gambling.js";
import { reward } from "../../gambling/gambling.js";

let gumballImage = document.getElementById("gumball");
let prize = document.getElementById("prize");

const gumballArray = [`green gumball`, `red gumball`, `yellow gumball`];
const rewardArray = [`0 microplastics :(`, `80 microplastics`, `160 microplastics`, `300 microplastics`, `1000 microplastics`, `MR DICE!!!`]

gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]}.png`;

gumballImage.addEventListener(`click`, async function () {
  await new Promise(resolve => {
    for (let i = 0; i <= 9; i ++){
    gumballImage.style.opacity = `1`;
    prize.textContent = ``;
    
    if (gumballImage.src.endsWith("gumball.png")) {
      gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 2.png`;
    } else if (gumballImage.src.endsWith("2.png")) {
      gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 3.png`;
      console.log(`nice`)
    } else if (gumballImage.src.endsWith("3.png")) {
      gumballImage.style.opacity = `0`;   
        prize.textContent = `You Win ${rewardArray[reward]}`;
    } else {
      resolve()
    }
} 
  console.log(`cool`)
  })
});