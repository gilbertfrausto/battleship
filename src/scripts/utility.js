NodeList.prototype[Symbol.iterator] 		= Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] 	= Array.prototype[Symbol.iterator];

const selectorParse = (element) => {
	element = element.toString();
	let selectorType = '';
	
	if (element.includes('#')) {
		selectorType = 'id';
	} else if (element.includes('.')) {
		selectorType = 'class';
	} else {
		selectorType = 'element';
	}

	return Object.freeze({ selectorType });
};

const selectorString = (str, elementP) => {
	let element;
	switch (str) {
		case 'id' : {
			element = elementP.replace('#', '');
			break;
		}
		case 'element' : {
			element = elementP;
			break;
		}
		case 'class' : {
			element = elementP.replace('.', '');
			break;
		}
	}

	return element;
};

const getElement = (spec) =>  {
	let el;
	const { type, selector, element} = spec;
	if (type === 'id') {
		el = document.getElementById(selector);
	} else if (type === 'class' ) {
		el = document.getElementsByClassName(selector)
	} else {
		el = element;
	}

	return el;
};

export const GQ = (element) => {
	const { selectorType } 	= selectorParse(element);
	const selector 			= selectorString(selectorType, element);
	const el 				= getElement({ selector, type: selectorType, element }),
	
	addClass = (className) => {
		if (selectorType === 'id' || selectorType === 'element') {
			el.classList.add(className);
		} else {
			for (const x of el) {
				x.classList.add(className);
			}
		}
	},
	removeClass = (className) => {
		if (selectorType === 'id' || selectorType === 'element') {			
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
		let has;
		const list = el.classList;
		list.forEach(element => {
			console.log(element);
			if (element === className) {
				has = true;
			}
		});

		return has;
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
		const key = (selectorType === 'id' || selectorType === 'element') 
			? el.attributes[att].value : el[0].attributes[att].value

		return key;
	},
	click = (func) => {
		el.addEventListener('click', (e) => {
			func(e);
		});
	},
	off = (event) => {
		el.addEventListener(event, () => {});
	};

	return Object.freeze({
		addClass, removeClass, toggleClass, hasClass, html, attr, click, off
	})
}