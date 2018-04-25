'use strict';

import { ship } from './ship.js';
import { state } from './state.js';

export const player = (spec) => {
	let { human, grid } =  spec;
	const { getShips } 	= ship(spec);

	const placeShip = (vector2) => {
		// console.log(vector2);
	};

	const playerAttack = (vector2) => {
		// console.log(vector2);
	}

	const playerStatus = () => {
		return 
	}

	const shipsRemaining = () => {
		return getShips();
	};

	return Object,freeze({
		placeShip, shipsRemaining
	});
}