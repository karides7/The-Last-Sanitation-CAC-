function main() {
	let gumballImage = document.getElementById("gumball");

	gumballImage.addEventListener(`click`, function () {
		if (gumballImage.src === "/resources/images/gumballs/red gumball.png") {
			gumballImage.src =
				"/resources/images/gumballs/red gumball part 2.png";
		}
		if (
			(gumballImage.src =
				"/resources/images/gumballs/red gumball part 2.png")
		) {
			gumballImage.src =
				"/resources/images/gumballs/red gumball part 3.png";
		} else {
			gumballImage.src =
				"/resources/images/gumballs/red gumball part 3.png";
		}
	});
}
main();
