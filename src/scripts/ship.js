'use strict';

import { vector2 } from './vector.js';

export const ship = (spec) => {
	let { blocks, amount } 	= spec;
	// let allShips = createShips();
	const status = (shipObject) => {
		return shipObject.alive;
	};

	const createShips = () => {
		let collection = [];

		for(let i = 0; i < blocks * amount; i ++) {
			collection.push({
				number: i,
				hit: false,
				alive: true,
				location: vector2(0,0)
			});
		}

		return collection;
	};

	const getShips = () => {
		return createShips();
	};
	return Object.freeze({
		getShips
	})
};