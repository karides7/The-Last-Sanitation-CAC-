var levelNames = [
	`tompkins`,
	`cortland`,
	`chenango`,
	`oswego`,
	`greene`,
	`rensselaer`,
	`columbia`,
	`ulster`,
	`sullivan`,
	`delaware`,
	`broome`,
];

export function setLabelIds() {
	let mapLabels = document.getElementsByClassName(`commonStyle`);

	for (let label in mapLabels) {
		if (label < mapLabels.length) {
			mapLabels[label].id = levelNames[label];
		}
	}
}
