const root = document.documentElement;

const set = (name, value, priority="") => {
	let style = root.style;
	style.setProperty(name,value,priority);
}

const get = (name) => {
	let style = getComputedStyle(root);
	return style.getPropertyValue(name);
}

const remove = (name) => {
	let style = root.style;
	style.removeProperty(name);
}

const priority = (name) => {
	let style = root.style;
	return (style.getPropertyPriority(name) === "important");
}
