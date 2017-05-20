function Datos(id,nombre, apellido, edad, hobbie){
	this.id = id;	//Se agrega id para saber a quien pertenece el comentario
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad + "años";
	this.hobbie = hobbie
}


const persona1 = new Datos(1, "Romina", "Torres", "31", ["Tocar bateria", "Ver netflix", "Hacer cosas chori con mi hijo y esposo"]);
const persona2 = new Datos(2, "Paola", "Urra", "arbol", ["Dormir", "Ver Netflix", "Jugar en la Xbox"]);
const persona3 = new Datos(3, "Katerine", "Sandoval", "24", ["Arte", "Música", "Literatura"]);
const persona4 = new Datos(4, "Natalia", "Vivanco", "27", ["Leer", " Jardinear", "Hacer Manualidades"]);
const persona5 = new Datos(5, "Natalia", "Garrido", "27", ["Animales", "Comida", "Ver series"]);
const persona6 = new Datos(6, "Vanessa", "Pérez", "35", ["Karate do", "Cantar y pasarla bien", "Disfrutar a mis 6 hijos"]);
const persona7 = new Datos(7, "Sou Elene", "Cruces", "23", ["Dormir", "Sacar a pasear al perro", "Reconciliarse con el pololo"]);
const persona8 = new Datos(8, "Constanza", "Carrasco", "25", ["Vender comida rica", "Pasarla bien con el pololo", "dino"]);
const persona9 = new Datos(9, "Paulina", "González", "26", ["Jugar Videojuegos", "Ver Anime/Series", "Hacer Manualidades"]);

var arr = [];
arr.push(persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9);

var sq1 = document.getElementById("contenedor1")
var mensaje = document.getElementById("contenido_comentario")
var boton = document.getElementById("btn");


arr.forEach(function(el){
	sq1.innerHTML += 

	"<br><b>Nombre: </b>" + el.nombre + "<br>" +
	"<b>Apellido: </b>" + el.apellido + "<br>" + 
	"<b>Edad: </b>" + el.edad + " años" + "<br>" +
	"<b>Hobbie: </b>" +
	 "<ul><li>" + el.hobbie[0] + "</li></ul>" +
	  "<ul><li>" + el.hobbie[1] + "</li></ul>" +
	   "<ul><li>" + el.hobbie[2] + "</li></ul>" + "<br>";

})


