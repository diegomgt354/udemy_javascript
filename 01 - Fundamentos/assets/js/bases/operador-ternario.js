
const dia =  0;
const horaActual = 8;
let horaApertura;
let mensaje;

horaApertura = ([0,6].includes(dia)) ? 9 : 11; // si es sabado o domingo la epertura de la tienda es a las 9, sino es 11

mensaje = (horaActual>=horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});
