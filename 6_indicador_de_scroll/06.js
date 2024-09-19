/*Libreria para manipular variables CSS*/
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

/*Ejercicio: Indicador de scroll*/
const h1 = document.documentElement.scrollHeight;
const h2 = document.documentElement.clientHeight;
const scrollUnit = (h1 - h2) / 100;
const bar_width = () =>{
	set("--width",`${Math.round(scrollY / scrollUnit)}`);
}
addEventListener("scroll",bar_width);
