export let delta;

export function getFPS() {
	return 1000 / delta;
}

let t1 = 0;
export function updateDelta(t2) {
	delta = t2 - t1;
	t1 = t2;
}
