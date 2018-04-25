import { grid } from "./grid";
import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants";

const vector2 = (spec) => {
	const { x, y } = spec;
	const getArray = () => {
		return [x,y];
	};
	const toString = ()  => {
		return `${x},${y}`;
	};

	return Object.freeze({
		x, y, getArray, toString
	})
};