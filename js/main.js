function Datos(nombre, apellido, edad, hobbie){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbie = hobbie
}

var persona1 = new Datos("Romina", "Torres", "31", ["Tocar bateria", "Ver netflix", "Hacer cosas chori con mi hijo y esposo"]);
var persona2 = new Datos("Paola", "Urra", "arbol", ["Dormir", "Ver Netflix", "Jugar en la Xbox"]);
var persona3 = new Datos("Katerine", "Sandoval", "24", ["Arte", "Música", "Literatura"]);
var persona4 = new Datos("Natalia", "Vivanco", "27", ["Leer", " Jardinear", "Hacer Manualidades"]);
var persona5 = new Datos("Natalia", "Garrido", "27", ["Animales", "Comida", "Ver series"]);
var persona6 = new Datos("Vanessa", "Pérez", "35", ["Karate do", "Cantar y pasarla bien", "Disfrutar a mis 6 hijos"]);
var persona7 = new Datos("Sou Elene", "Cruces", "23", ["Dormir", "Sacar a pasear al perro", "Reconciliarse con el pololo"]);
var persona8 = new Datos("Constanza", "Carrasco", "25", ["Vender comida rica", "Pasarla bien con el pololo", "dino"]);
var persona9 = new Datos("Paulina", "González", "26", ["Jugar Videojuegos", "Ver Anime/Series", "Hacer Manualidades"]);

var arr = [];
arr.push(persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9);
var sq1 = document.getElementById("contenedor1")
arr.forEach(function(el){
	sq1.innerHTML += 
	"<br><b>Nombre: </b>" + el.nombre + "<br>" +
	"<b>Apellido: </b>" + el.apellido + "<br>" + 
	"<b>Edad: </b>" + el.edad + " años" + "<br>" +
	"<b>Hobbie: </b>" +
	 "<ul><li>" + el.hobbie[0] + "</li></ul>" +
	  "<ul><li>" + el.hobbie[1] + "</li></ul>" +
	   "<ul><li>" + el.hobbie[2] + "</li></ul>" + "<br>" +
        "<textarea name='comment' rows=5 cols=40>Comente aquí..." + "</textarea>" + "<br>" +
        "<button>" + "hola" + "</button>" + "<br>" + "<br>";
})
/*
function Comentario (id_miembro,comentario, meGusta){
	this.comentario = comentario
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.dejarComentario = function (mensaje){

	}
	this.meGusta = function ()
}
*/
