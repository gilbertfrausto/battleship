import { grid } from "./grid.js"; 
import { player } from "./player.js";


(() => {
	// Create grids
    const init 			= grid({ players: 2, spaces: 10, type: undefined });
	const collection 	= init.collection();
	
	// Create Players
	const player_1 = player({ 
		human: true,
		name: 'player_1',
		blocks: 1,
		ships: 5,
		grid: collection[0] 
	});
	
	const player_2 = player({ 
		human: true,
		name: 'player_2',
		blocks: 1,
		ships: 5,
		grid: collection[1] 
	});
	
	player_1.init();

	console.log(player_1.dataStore.getData('ships'));

})();


// Grid class
// 10 X ten grid
// Players class

// Gameplay
// 