import { GQ as $ } from "./utility.js";
import { vector2 } from "./vector.js";

export const letters = [
	'a','b','c','d','e','f','g','h','i',
	'j','k','l','m','n','o','p','q','r',
	's','t','u','v','w','x','y','z'
];

/**
 * Create player grid templates and return HTMl string
 */
const templates = (data) => {
	const playerData	= data.dataStore.getData('grid'),
	listItems = () => {
		let temp = ``;
		
		Object.keys(playerData).forEach((el, index) => {
			let concat 	= '';
			
			for (let i = 0; i < playerData[el].length; i++) {
				const pos 	= vector2({ x: index, y: i});
				const child = createElement({ element: 'span', pos: pos});

				if (i === 0) {
					concat = `<li>${child}`;
				} else if (i === playerData[el].length - 1) {
					concat = `${concat}${child}</li>`;
				} else {
					concat = `${concat}${child}`;
				}
			}
			temp = `${temp}${concat}`;
		});
		return temp;
	},
	createElement = (spec) => {
		const { element, pos } 	= spec;
		const { x, y }			=  pos;
		
		return `<${element} class="ships" data-x="${x}" data-y="${y}"></${element}>`;
	};

	return `${listItems()}`;
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

			$(`#${id}`).html(markUp);
		}
	}

	return Object.freeze({
		collection, construct
	});
};
