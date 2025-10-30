function main() {
  const counties = {};
  const countiesArr = [
    `Tompkins`,
    `Cortland`,
    `Chenango`,
    `Osnego`,
    `Delaware`,
    `Greene`,
    `Rensselaer`,
    `Columbia`,
    `Ulster`,
    `Sullivan`,
    `Broome`,
  ];

  const countiesUnlocked = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]

  for (let i = 0; i < 10; i++) {
    let countyName = countiesArr[i];
    counties[countyName] = document.getElementById(countyName);

    let county = document.getElementById(countiesArr[i]);
    county.addEventListener(`click`, function () {
      county.style.src = `/resources/images/mapafter${countiesArr}.png`
    })



  }
  const clickSound = new Audio("resources/images/sfx/click1.mp3");
  const hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");
}
main();
