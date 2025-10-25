export const data = {
	exp: 0.0,
	microplastics: 0.0,
	currentLevel: 1,
	selectedCards: 10000,
};

export function getData() {
	let x = 0;
	for (let key of Object.keys(data)) {
		if (localStorage.getItem(key) != null) {
			data[key] = localStorage.getItem(key);
		} else {
			localStorage.setItem(key, data[key]);
		}
		x++;
	}
}
