export const vector2 = (spec) => {
	const { x, y } = spec,
	
	getArray = () => {
		return [x,y];
	},
	toString = ()  => {
		return `${x},${y}`;
	};

	return Object.freeze({
		x, y, getArray, toString
	})
};