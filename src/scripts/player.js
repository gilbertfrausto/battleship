'use strict';

import { ship } from './ship.js';
import { state, singleton } from './state.js';
import { letters } from './grid.js';
import { GQ as $ } from './utility.js';

export const player = (spec) => {
	let { human, grid, name, ships } = spec;
	let sunk 				= 0;
	let locked 				= true;
	const placed 			= {};
	const { createShips }	= ship(spec);
	const dataStore 		= singleton(name),
		
	// Init player data
	init = () => {
		dataStore.addData({ key: 'grid',  payload: grid });
		dataStore.addData({ key: 'ships', payload: createShips() });

		return Object.freeze({
			lock, unlock
		});
	},
	lock = () => {
		locked = true;
		$(`#${name}`).addClass('locked');
	},
	unlock = () => {
		locked = false;
		$(`#${name}`).removeClass('locked');

		return Object.freeze({
			turnText
		});
	},
	placeShip = (vector2) => {
		let data = dataStore.getData('grid');
		data[letters[vector2.x]][vector2.y] = vector2;
		
		placed[vector2.toString()] = vector2;

		console.log(placed);
	},
	canPlace = () => {
		return (Object.keys(placed).length < ships) && !locked;
	},
	playerAttack = (vector2) => {
		// delete placed[vector2.toString()];
	},
	playerAttacked = (vector2) => {
		delete placed[vector2.toString()];
	},
	playerStatus = () => {
		const dead = (Object.keys(placed).length === 0);

		return (dead) ? 'DEAD' : 'ALIVE';
	},
	completed = () => {
		return Object.keys(placed).length === ships;
	},
	shipsRemaining = () => {
		return Object.keys(placed).length;
	},
	turnText = (className) => {
		$(className).html(`${name} turn!`);
	},
	getName = () => {
		return name;
	};

	return Object.freeze({
		init, lock, unlock, placeShip, playerStatus,
		shipsRemaining, dataStore, getName,
		playerAttack, playerAttacked,
		canPlace, completed, turnText
	});
}