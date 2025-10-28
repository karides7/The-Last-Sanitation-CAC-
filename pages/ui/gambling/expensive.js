let gumballImage = document.getElementById("gumball");

const gumballArray = [`green gumball`, `red gumball`, `yellow gumball`];


console.log(gumballImage.src)
gumballImage.addEventListener(`click`, function () {

  let gumballColor = (Math.ceil(Math.random() * 3) - 1)
  console.log(gumballColor);

  if (gumballImage.src.endsWith("gumball.png")) {
    console.log(`#1`)
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 2.png`;
  }
  else if (
    (gumballImage.src.endsWith("2.png"))
  ) {
    console.log(`#2`)
    gumballImage.src = `/Resources/images/Gumballs/${gumballArray[gumballColor]} part 3.png`;
  } else {
    console.log(`gone`)
    gumballImage.remove();
  }
});