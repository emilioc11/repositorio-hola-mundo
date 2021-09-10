// let persona = {
//   nombre: "César",
//   apellido: "Apellido",
//   edad: 26,
//   tieneSed: true,
//   actividad: {
//     nombre: "Comer",
//   },
// };
// console.log(persona.actividad.nombre);

const numeroAleatorio = Math.round(Math.random() * 10);
console.log (numeroAleatorio)

let numeroElegido= prompt ("Un número del 1 al 10");

// OJO!, los datos ingresados en la funcio¿ón "prompt" son asociados al tipo de dato "string", por lo cual,
// debemos convertir este en (como en este caso queremos) integer, para eso, utilizamos la función "parseInt"
// Obs: de haber seguido sin "parseInt" cuando numeroElegido sea igual a numeroAelatorio 
// no nos mostraría el msj de felicitaciones.

if (parseInt (numeroElegido, 10) === numeroAleatorio) {
  alert ("Tu número es igual! Felicitaciones");

// parseInt convierte el valor ingresado desde "prompt" a un 
// número escrito en base 10 (de haber puesto 2, lo trasnformaría en binario)

        // Si es igual, mostrar un mensaje de felicitaciones

} else if (numeroElegido < numeroAleatorio) {
  alert ("Tu número es menor")
        // Si es menor, mostrar un mensaje de menor

} else if (numeroElegido > numeroAleatorio) {
  alert ("Tu número es mayor")
        // Si es mayor, mostrar un mensaje de mayor.
}