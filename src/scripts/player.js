'use strict';

import { ships } from './ships.js';
import { state } from './state.js';

export const player = (spec) => {
	let { human, grid } =  spec;

	const getShips = ships(spec);

	const placeShip = (vector2) => {
		// console.log(vector2);
	};

	const playerAttack = (vector2) => {
		// console.log(vector2);
	}

	return Object,freeze({
		getShips, placeShip
	});
}