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

  for (let i = 0; i < 10; i++) {
    let countyName = countiesArr[i];
    counties[countyName] = document.getElementById(countyName);

    if (win) {
      console.log(`undebug`);
      counties[countyName].disabled = true;
      console.log(`debug`);
    }
  }
  const clickSound = new Audio("resources/images/sfx/click1.mp3");
  const hoverSound = new Audio("resources/images/sfx/hovering mouse.mp3");
}
main();
