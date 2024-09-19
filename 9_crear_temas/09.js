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

/*Crear temas*/
const button = document.getElementById("button");
const darkTheme = {
	"--bg": "black",
	"--font-color": "white",
	"--box-shadow": "lightgray"
}
const lightTheme = {
	"--bg": "white",
	"--font-color": "black",
	"--box-shadow": "gray"
}
let pivote = true;

const changeTheme = (theme) =>{
	let cssVars = Object.keys(theme);
	for(let cssVar of cssVars){
		set(`${cssVar}`,theme[cssVar]);
	}
	pivote = !pivote;
}

const chooseTheme = () =>{
	return pivote? lightTheme : darkTheme;
}

button.addEventListener("click",() =>{
	changeTheme(chooseTheme())
});
