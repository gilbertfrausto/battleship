NodeList.prototype[Symbol.iterator] 		= Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] 	= Array.prototype[Symbol.iterator];

export const GQ = (element) => {
	element 			= element.trim();
	const selectorType 	= (element.includes('#')) ? 'id' : 'class';
	const selector 		= (selectorType === 'id') 
		? element.replace('#', '')
		: element.replace('.', '');
	const el 			= (selectorType === 'id') 
		? document.getElementById(selector)
		: document.getElementsByClassName(selector),
	
	addClass = (className) => {
		if (selectorType === 'id') {
			el.classList.add(className);
		} else {
			for (const x of el) {
				x.classList.add(className);
			}
		}
	},
	removeClass = (className) => {
		if (selectorType === 'id') {			
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
		if (selectorType === 'id') {
			el.innerHTML = markUp;
		} else {
			for (const x of el) {
				x.innerHTML = markUp;
			}
		}
	},
	attr = (att) => {
		return (selector === 'id') ? el.getAttribute(att) : el[0].getAttribute(att);;
	},
	click = (func) => {
		el.addEventListener('click', (e) => {
			func(e);
		});
	};

	return Object.freeze({
		addClass, removeClass, toggleClass, hasClass, html, attr, click
	})
}