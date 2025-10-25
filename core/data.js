export const data = {
	exp: 0.0,
	microplastics: 0.0,
	currentLevel: 1,
	selectedCards: [1, 0, 0, 0, 0],
};

export function getData() {
	let x = 0;
	for (let key of Object.keys(data)) {
		if (localStorage.getItem(key) != null) {
			console.log(`data found (${key})`);
			data[key] = localStorage.getItem(key);
		} else {
			console.log(`data not found (${key})`);
			localStorage.setItem(key, data[key]);
		}
		x++;
	}
}

console.log(data);
