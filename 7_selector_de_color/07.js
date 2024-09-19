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

/*Ejercicio: Selector de color RGB*/
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const color = (name,value) =>{
	set(name,value);
}
//Rojo
red.addEventListener("change",e => {
	color("--red",e.target.value)
});
red.addEventListener("mousemove",e => {
	color("--red",e.target.value)
});
//Verde
green.addEventListener("change",e => {
	color("--green",e.target.value)
});
green.addEventListener("mousemove",e => {
	color("--green",e.target.value)
});
//Azul
blue.addEventListener("change",e => {
	color("--blue",e.target.value)
});
blue.addEventListener("mousemove",e => {
	color("--blue",e.target.value)
});
