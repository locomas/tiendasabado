// arreglo de objetos

let productos = [

{nombre: "Figura1",precio:45000, descripcion : "muy bueno", foto :"../img/img1.jpg"},
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



//creo la referencia al componente padre/ una variable para almacenar la base sobre la cual voy a pintar 

let fila = document.getElementById("fila")



//  Recorriendo un arreglo con Javascript
//buscar, seleccionar, esculcar,


productos.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
    // receta para pintar tarjetas con js

    //paso 1. Comience a crear la estructura que necesita y creo columna
    let columna = document.createElement("div")
    
    columna.classList.add("col")

    //paso 2 . creo la tarjeta

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //paso 3. Crear una imagen

    let foto= document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= producto.foto


    //paso 4. ordenar la estructura (padres e hijos)

    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    



})