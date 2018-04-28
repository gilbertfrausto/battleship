const letters = [
	'a','b','c','d','e','f','g','h','i',
	'j','k','l','m','n','o','p','q','r',
	's','t','u','v','w','x','y','z'
];

/**
 * Create player grid templates and return HTMl string
 */
const templates = () => {
	let start 	= '<ul>';
	let end 	= '</ul>';
	const listItems = () => {
	
	};

	return `${start}${listItems()}${end}`;
}

/**
 * create grids based on players and spaces
 * @param {Object} obj 
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
	const { collection }  	= generate(spec),

	log = () => {},
	construct = (players) => {
		for (let x of players) {
			const id 		= x.getName();
			const markUp 	= template(x);
			$(`#${id}`).html(markUp);
		}
	}

	return Object.freeze({
		collection, construct
	});
};
