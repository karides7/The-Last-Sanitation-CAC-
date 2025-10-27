let gumballImage = document.getElementById("gumball");
console.log(gumballImage.src)
gumballImage.addEventListener(`click`, function () {
  if (gumballImage.src.endsWith("gumball.png")) {
    console.log(`#1`)
    gumballImage.src = "/Resources/images/Gumballs/red gumball part 2.png";
  }
  else if (
    (gumballImage.src.endsWith("2.png"))
  ) {
    console.log(`#2`)
    gumballImage.src = "/Resources/images/Gumballs/red gumball part 3.png";
  } else {
    console.log(`gone`)
    gumballImage.remove();
  }
});

//src names
// Resources\images\Gumballs\red gumball.png
// Resources\images\Gumballs\red gumball part 2.png
// Resources\images\Gumballs\red gumball part 3.png
