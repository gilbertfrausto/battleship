import { GQ as $ } from "./utility.js";

const letters = [
	'a','b','c','d','e','f','g','h','i',
	'j','k','l','m','n','o','p','q','r',
	's','t','u','v','w','x','y','z'
];

/**
 * Create player grid templates and return HTMl string
 */
const templates = (data) => {
	let start 			= '<ul>';
	let end 			= '</ul>';
	const playerData	= data.dataStore.getData('grid');
	
	const listItems = () => {
		let temp = ``;
		
		Object.keys(playerData).forEach((el, index) => {
			let concat 	= '';
			
			for (let i = 0; i < playerData[el].length; i++) {
				if (i === 0) {
					concat = `<li><span><input type="button" data="${i}" /></span>`;
				} else if (i === playerData[el].length - 1) {
					concat = `${concat}<span><input type="button" data="${i}" /></span></li>`;
				} else {
					concat = `${concat}<span><input type="button" data="${i}" /></span>`;
				}
				
			}
			temp = `${temp}${concat}`;
		});
		return temp;
	};

	console.log(playerData);
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
			const markUp 	= templates(x);

			// console.log(x);
			$(`#${id}`).html(markUp);
		}
	}

	return Object.freeze({
		collection, construct
	});
};
