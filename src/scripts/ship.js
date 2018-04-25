'use strict';
import { vector2 } from './vector.js';

export const ships = (spec) => {
	let { blocks, amount } = specs;

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

	return Object.freeze({
		createShips
	})
};