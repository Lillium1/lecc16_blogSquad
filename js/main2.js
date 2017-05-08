function Datos(id,nombre, apellido, edad, hobbie){
	this.id = id;	//Se agrega id para saber a quien pertenece el comentario
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbie = hobbie
}



var persona1 = new Datos(1, "Romina", "Torres", "31", ["Tocar bateria", "Ver netflix", "Hacer cosas chori con mi hijo y esposo"]);
var persona2 = new Datos(2, "Paola", "Urra", "arbol", ["Dormir", "Ver Netflix", "Jugar en la Xbox"]);
var persona3 = new Datos(3, "Katerine", "Sandoval", "24", ["Arte", "Música", "Literatura"]);
var persona4 = new Datos(4, "Natalia", "Vivanco", "27", ["Leer", " Jardinear", "Hacer Manualidades"]);
var persona5 = new Datos(5, "Natalia", "Garrido", "27", ["Animales", "Comida", "Ver series"]);
var persona6 = new Datos(6, "Vanessa", "Pérez", "35", ["Karate do", "Cantar y pasarla bien", "Disfrutar a mis 6 hijos"]);
var persona7 = new Datos(7, "Sou Elene", "Cruces", "23", ["Dormir", "Sacar a pasear al perro", "Reconciliarse con el pololo"]);
var persona8 = new Datos(8, "Constanza", "Carrasco", "25", ["Vender comida rica", "Pasarla bien con el pololo", "dino"]);
var persona9 = new Datos(9, "Paulina", "González", "26", ["Jugar Videojuegos", "Ver Anime/Series", "Hacer Manualidades"]);

var arr = [];
var msj = ""
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

msj.push()

	//mensaje.innerHTML +=

	//"<textarea class='materialize-textarea' rows='5' cols='40' id='text-area-" + member.id + "' placeholder='Comente aquí...'>" +
    //"</textarea>" + "<br>";

    /*
    	"<button class='waves-effect waves-light btn red lighten-3 color' type='button' onclick='agregarComentario(" + member.id + ")'>" +
    		"<i class= 'material-icons left color'>comment" + "</i>" + "Escribir comentario..." +
    	"</button>" + "<br><br>"
	*/

})
/*
	//comentarios
    "<div class='card red lighten-3 padding-20' id='comentario-"+ member.id"'>" +
    "</div><br>" +
    "<textarea class='materialize-textarea' rows='5' cols='40' id='text-area-" + member.id + "' placeholder='Comente aquí...'>" +
    "</textarea>" + "<br><br>" +
    	"<button class='waves-effect waves-light btn red lighten-3 color' type='button' onclick='agregarComentario(" + member.id + ")'>" +
    		"<i class= 'material-icons left color'>comment" + "</i>" + "Escribir comentario..." +
    	"</button>" + "<br><br>" + 
    "</div></div>";

      	// "<textarea name='comment' rows=5 cols=40>Comente aquí..." + "</textarea>" + "<br><br>" +
       	// "<button>" + "hola" + "</button>" + "<br>" + "<br>";




function Comentario (id_miembro,comentario, meGusta){
	this.comentario = comentario
	this.id_miembro = id_miembro;
	this.comentario = comentario;
	this.dejarComentario = function (mensaje){

	}
	this.meGusta = function (){

	}
}

var mensaje = new Comentario()
var texto = ""
texto.push()
*/