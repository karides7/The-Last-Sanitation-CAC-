export let units = {};

units[`streetSweeper`] = {
	name: `Street Sweeper`,
	cost: 100,
	health: 500,
	attackSpeed: 1,
	attackMelee: 10,
	attackRanged: 0,
	attackSplash: 0,
	images: {
		idleFrames: [],
		movementFrames: [],
		attackFrames: [],
	},
};

units[`roomba`] = {
	cost: 300,
	health: 250,
	attackInterval: 0.25,
	attackMelee: 3,
	attackRanged: 0,
	attackSplash: 0,
	images: {
		idleFrames: [],
		movementFrames: [],
		attackFrames: [],
	},
};
