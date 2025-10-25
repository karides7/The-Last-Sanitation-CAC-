expensiveButton.addEventListener(`click`, function () {
  if (
    document.getElementById("gumball").src ==
    "/resources/images/gumballs/red gumball.png"
  ) {
    document.getElementById("gumball").src =
      "/resources/images/gumballs/red gumball part 2.png";
  } else {
    document.getElementById("gumball").src =
      "/resources/images/gumballs/red gumball part 3.png";
  }
});
