import { GQ as $ } from "./utility.js";
import { vector2 } from "./vector.js";

export const gameplay = (spec) => {
	let started 				= false;
	let gameOver 				= false;
	const { p1, p2, header }  	= spec,
	
	startGame = () => {
		started = true;
		next();
		// Turn logic
		$('#player_1').click((event) => {
			if (!gameOver) {
				if (p1.playerStatus() !== 'DEAD') {
					if ($(event.target).hasClass('has-vector')){ 
					
						const x = $(event.target).attr('data-x'); // Get the X
						const y = $(event.target).attr('data-y');	// Get the Y
						
						p1.playerAttacked(vector2({ x: x, y: y })); 
		
						$(event.target).addClass('hit');
					} else {
						$(event.target).addClass('missed');
					}
		
					if (p1.playerStatus() === 'DEAD') {
						p1.lock();
						gameOver = true;
						$('#player_1').off('click'); // Remove event listener.
						$('#player_2').off('click'); // Remove event listener.
						$('#header').html(`${p1.getName()} LOST`);
						
						console.log('Game Over');
					}
	
				}
			}
		});

		// Turn logic		
		$('#player_2').click((event) => {
			if (!gameOver) {
				if (p2.playerStatus() !== 'DEAD') {
					if ($(event.target).hasClass('has-vector')){ 
						$(event.target).addClass('hit');
						const x = $(event.target).attr('data-x'); // Get the X
						const y = $(event.target).attr('data-y');	// Get the Y
						
						p2.playerAttacked(vector2({ x: x, y: y })); 
						$(event.target).addClass('hit');
					} else {
						$(event.target).addClass('missed');
					}
		
					if (p2.playerStatus() === 'DEAD') {
						p2.lock();
						gameOver = true;
						$('#player_1').off('click'); // Remove event listener.
						$('#player_2').off('click'); // Remove event listener.
						$('#header').html(`${p2.getName()} LOST`);
						
						console.log('Game Over');
					}
				}
			}
		});

		console.log('game start');
	},
	next = () => {
		$(`${header}`).html('Place Ships');
	},
	gameStatusCheck = () => {
		// 
	},
	gameStarted = () => {
		return started;
	},
	splash = () => {
		$('.viewport').removeClass('splash');
		$('.game').addClass('start');

	};
	
	return Object.freeze({
		startGame, splash, gameStarted
	});
};