const letters = [
	'a','b','c','d','e','f','g','h','i',
	'j','k','l','m','n','o','p','q','r',
	's','t','u','v','w','x','y','z'
];


/**
 * create grids based on players and spaces
 * @param {*} spec 
 */
const generate 	= (obj) => { 
	const { spaces, players } = obj,
	
	// Create grid structure
	gridStruct = () => {
		return letters.reduce((all, item, index) => {
			if (index < spaces) {
				all[item] 			= [];
				all[item].length 	= spaces;
			}
			return all;
		}, {});
	},

	// Add objects to collections array, Based on number of players.
	collection = () => {
		let playerGrids = [];

		for(let i = 0; i <= players - 1; i++ ) {
			playerGrids.push(gridStruct());
		}

		return playerGrids;
	};
	
	return Object.freeze({
		collection
	});
};

/**
 * Grid config
 * @param {*} spec 
 */
export const grid = (spec) => {

	const { players, type } = spec;
	const { collection }  	= generate(spec);

	const log = () => {
		// console.log(generateGrid)
	};

	return Object.freeze({
		collection, log
	});
};
