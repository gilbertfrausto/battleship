'use strict';

import { grid } from "./grid.js"; 
import { player } from "./player.js";



(() => {
    const init = grid({
        players: 2,
        spaces: 10,
        type: undefined
    });

	const collection = init.collection();
	
	const player_1 = player({ 
		human: true, 
		blocks: 1,
		ships: 5,
		grid: collection[0] 
	});
	
	const player_2 = player({ 
		human: true,
		blocks: 1,
		ships: 5,
		grid: collection[1] 
	});
	

	
	console.log(collection);
})();


// Grid class
// 10 X ten grid
// Players class

// Gameplay
// 