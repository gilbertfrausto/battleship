import { grid } from "./grid.js"; 
import { player } from "./player.js";
import { GQ as $ } from "./utility.js";
import { vector2 } from "./vector.js";
import { gameplay } from "./gameplay.js";
import { runTest } from "./unit_test/test.js";


(() => {
	// Create grids
    const init 			= grid({ players: 2, spaces: 10, type: 'ships' });
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
	
	// Set player states
	player_1
		.init()
		.unlock()
		.turnText('#header');// default settings for player store
	
	// Set player states
	player_2
		.init()
		.lock();
	
	init.construct([player_1, player_2]); // pass players and render grid

	const game = gameplay({ 
		p1: player_1, 
		p2: player_2,
		header: '#header'
	});

	$('#heading-name').click((event) => {
		game.splash();
	});
	
	$('#player_1').click((event) => {
		if (player_1.canPlace() && !game.gameStarted()) {
			if ($(event.target).hasClass('ships')){
				const x = $(event.target).attr('data-x'); // Get the X
				const y = $(event.target).attr('data-y'); // Get the Y
				
				player_1.placeShip(vector2({ x: x, y: y })); // Updated grid with placed ship's vector
				
				$(event.target).addClass('placed'); // Add the active clasa to show placement
				$(event.target).addClass('has-vector'); // Add the active clasa to show placement
	
				console.log(player_1.shipsRemaining());

				// Only fire once placement is ready
				if (player_1.completed()) {
					
					$('.ships').removeClass('placed'); // Remove placed case to hide selection
					$('#player_2').off('click'); // Remove event listener.

					// Free player to allow ship placement
					player_2
						.unlock()
						.turnText('#header');
				}
			}
		}
	});

	$('#player_2').click((event) => {
		if (player_2.canPlace() && !game.gameStarted()) {
			if ($(event.target).hasClass('ships')){
				const x = $(event.target).attr('data-x'); // Get the X
				const y = $(event.target).attr('data-y');	// Get the Y
				
				player_2.placeShip(vector2({ x: x, y: y })); //Update grid with placed ships vector
				
				$(event.target).addClass('placed'); // Add the active clasa to show placement
				$(event.target).addClass('has-vector'); // Add the active clasa to show placement

				// Only fire once placement is ready
				if (player_2.completed()) {

					$('.ships').removeClass('placed'); // Remove placed case to hide selection
					$('#player_2').off('click'); // Remove event listener.

					// Add players to gameplay class
					game.startGame();
				}
				
			}
		}
	});
	
	$('#unit').click(() => {
		runTest();
		$('#results').html('Results in console.');
	});
})();





// Grid class
// 10 X ten grid
// Players class

// Gameplay
// 