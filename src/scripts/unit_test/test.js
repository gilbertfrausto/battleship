import { grid } from "../grid.js";
import { player } from "../player.js";

const equals = (data, str) => {
	const pass 		= (data === str);
	const report 	= (pass) 
		? `passed` : 'failed';
	
	console.log(`${data} equals -> str: ${report}`);
};
const has = (data, str) => {
	const keys 		= Object.keys(data);
	const results 	= keys.filter(el => el === str);
	const pass 		= results.length > 0;
	
	console.log(`${data} has -> str: ${pass}`);
};

export const runTest = () => {

	const player_test = player({ 
		human: true,
		name: 'player_test',
		blocks: 1,
		ships: 5,
		grid: undefined
	}),

	case_1 = () => {
		equals(player_test.getName(), 'player_test');
	},

	case_2 = () => {
		equals(player_test.getShips(), 5);
	},
	
	case_3 = () => {
		has(player_test, 'init');
	},

	case_4 = () => {
		has(player_test, 'dataStore');
	};

	case_1();
	case_2();
	case_3();
	case_4();
};

