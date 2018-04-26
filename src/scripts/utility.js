export const dom = (element) => {
	const selectorType 	= (element.contains('#')) ? 'id' : 'class';
	const selector 		= (selectorType === 'id') 
		? element.split('#')[`1`] 
		: element.split('.')[`1`];
	const el 			= (selectorType === 'id') 
		? document.getElementById(element)
		: document.getElementsByClassName(element),
	
	addClass = (className) => {
		if (selector === 'id') {
			el.classList.add(className);
		} else {
			for (const x of el) {
				x.classList.add(className);
			}
		}
	},
	removeClass = (className) => {
		if (selector === 'id') {			
			el.classList.remove(className);
		} else {	
			for (const x of el) {
				x.classList.remove(className);
			}
		}
	},
	toggleClass = (className) => {
		if (el.classList.includes(className)) {
			el.classList.remove(className);
		} else {
			el.classList.add(className);
		}
	},
	hasClass = (className) => {
		return el.classList.includes(className);
	},
	html = (markUp) => {
		if (selector === 'id') {
			el.innerHTML = markUp;
		} else {
			for (const x of el) {
				x.innerHTML = markUp;
			}
		}
	},
	attr = (att) => {
		return (selector === 'id') ? el.getAttribute(att) : el[0].getAttribute(att);;
	};

	return Object.freeze({
		addClass, removeClass, toggleClass, hasClass
	})
}