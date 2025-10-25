let input12345 = [false, false, false, false, false];

export function getInput12345() {
	let returnValue = input12345;
	input12345 = [false, false, false, false, false];
	return returnValue;
}

addEventListener(`keydown`, function (event) {
	let key = event.key;
	if (key == `1`) input12345[0] = true;
	if (key == `2`) input12345[1] = true;
	if (key == `3`) input12345[2] = true;
	if (key == `4`) input12345[3] = true;
	if (key == `5`) input12345[4] = true;
	input12345 = input12345;
});
