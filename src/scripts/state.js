
export const state = (spec) => {};


/**
 * Stores singletones here
 * file scope
 */
const stores = {};

/**
 * Store class that allows you to interact with the store and check instance status 
 */
const store =(() => {	
	const hasInstance = (spec) => {
		return !!stores[spec];
	},
	addInstance = (spec) => {
		const { name } 		= spec;
		stores[name] 		= spec;
		stores[name].data 	= {};
	},
	getInstance = (spec) => {
		return stores[spec];
	};

	return Object.freeze({
		hasInstance,  addInstance, getInstance
	});
})();

/**
 * Actually instance
 * File scope
 * @param {string  | Object } spec {namme: string, payload: any }
 */
const instance = (spec_) => {
	const name = spec_;
	const data = {},
	addData = (spec) => {
		const { key, payload } = spec;
        store.getInstance(name).data[key] = payload;
	},
	removeData = (spec) => {
		const { key, payload } = spec;
		delete store.getInstance(name).data[key][payload];
	},
	getData = (key) => {
		return store.getInstance(name).data[key];
	};

	return Object.create({
		name, addData, removeData, getData
	});
}

/**
 * Create singleton class
 * @param {*} spec 
 */
export const singleton = (spec) => {
	const hasInstance = store.hasInstance(spec),
	
	singletonCreation = () => {
		if (!hasInstance)  {
			const current = instance(spec);
			store.addInstance(current);
		}
		return store.getInstance(spec);
	};

	// return Object.freeze({ instance });\
	return singletonCreation();
};