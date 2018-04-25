import { vector2 } from './vector.js';

export const ship = (spec) => {
	let { blocks, ships } 	= spec;

	const createShips = () => {
		let collection 	= [];
		const count 	= blocks * ships;

		for(let i = 0; i < count; i ++) {	
			collection.push({
				set: false,
				number: i,
				hit: false,
				alive: true,
				location: vector2({ x: 0, y: 0})
			});
		}

		return collection;
	};

	
	return Object.freeze({
		createShips
	})
};