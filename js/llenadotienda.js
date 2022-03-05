// arreglo de objetos

let productos = [

{nombre: "Figura1",precio:45000, descripcion : "muy bueno", foto :"../img/pic2.jpg"},
{nombre:"Clue", precio : 20000, descripcion: "Juego clue",foto:'../img/cluedragon.jpg'},
{nombre: "Headset", precio: 30000,descripcion:"Headset Dragon",foto:'../img/headset.jpg'},
{nombre:"Monopoly", precio:150000, descripcion:"Juego tematico", foto:'../img/monopolydragon.jpg'},
{nombre:"Freezer", precio:270000, descripcion:"Figura freezer", foto:"../img/pic8.jpg"},
{nombre:"Rochi", precio:150000, descripcion:"Rochi", foto:'../img/pic6.jpg'},
{nombre:"Camisa", precio:150000, descripcion:"Camisa dragon ball", foto:'img/camisa.jpg'},
{nombre:"Llavero", precio:150000, descripcion:"llavero", foto:'img/llavero.jpg'},
{nombre:"Libro", precio:150000, descripcion:"libro", foto:"../img/libro.jpg"},
{nombre:"Pelicula", precio:150000, descripcion:"Pelicula", foto:"../img/pelicula.jpg"},



]

//escuchando clic en el boton 


let boton = document.getElementById("boton")

//detectando el primer evento

boton.addEventListener("click",cambiarFoto)

//creando una funcion

function cambiarFoto() {
    let foto = document.getElementById("slider")
    foto.src="../img/goku.png"
}

//  Recorriendo un arreglo con Javascript
//buscar, seleccionar, esculcar,


productos.forEach(function(producto){
    console.log("oye flaca")
})