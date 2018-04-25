'use strict';

import { ship } from './ship.js';
import { state, singleton } from './state.js';

export const player = (spec) => {
	let { human, grid, name } = spec;
	const { createShips } 	= ship(spec);
	const dataStore 		= singleton(name),
		
	// Init player data
	init = () => {
		dataStore.addData({ key: 'grid',  payload: grid });
		dataStore.addData({ key: 'ships', payload: createShips() });
	},
	placeShip = (vector2) => {
		// console.log(vector2);
	},
	playerAttack = (vector2) => {
		// console.log(vector2);
	},
	playerStatus = () => {
		return undefined;
	},
	shipsRemaining = () => {
		return undefined;
	};

	return Object.freeze({
		init, placeShip, shipsRemaining, dataStore
	});
}