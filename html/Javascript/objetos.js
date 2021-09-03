//Objeto: es una variable que tiene propiedades.
const cancion ={
duracion :{
    minutos: 3,
    segundos: 50,
},
autor: {nombre: "Emilio", apellido: "Cardozo"},
anho: 2021,
título: "Sobre lo que es un objeto",
};

console.log (cancion);
console.log (cancion.duracion);
//llamas a la subpropiedad a partir de un punto y la referencia a esa subpropiedad.
console.log (cancion.duracion.minutos);
console.log(
    `Hola ${cancion.autor.nombre}, ${cancion.autor.apellido}, tu cancion ${cancion.titulo} esta buena`
);
