export const dom = (element) => {
	const selector = (element.contains('#')) ? 'id' : 'class',
	addClass = (className) => {
		if (selector === 'id') {
			const el = document.getElementById(element);
			el.classList.add(className);
		} else {
			const el = document.getElementsByClassName(element);
			for (const x of el) {
				x.classList.add(className);
			}
		}
	},
	removeClass = (className) => {
		if (selector === 'id') {
			const el = document.getElementById(element);
			el.classList.remove(className);
		} else {
			const el = document.getElementsByClassName(element);
			for (const x of el) {
				x.classList.remove(className);
			}
		}
	},
	toggleClass = () => {
		// * @TODO
	},
	hasClass = () => {
		// * @TODO
	},
	html = (markUp) => {
		if (selector === 'id') {
			const el = document.getElementById(element);
			el.innerHTML = markUp;
		} else {
			const el = document.getElementsByClassName(element);
			for (const x of el) {
				x.innerHTML = markUp;
			}
		}
	},
	attr = (att) => {
		let data = undefined;
		if (selector === 'id') {
			const el 	= document.getElementById(element);
			data 		= el.getAttribute(att);
		} else {
			const el 	= document.getElementsByClassName(element);
			data 		= el[0].getAttribute(att);
		}

		return data;
	};

	return Object.freeze({
		addClass, removeClass, toggleClass, hasClass
	})
}