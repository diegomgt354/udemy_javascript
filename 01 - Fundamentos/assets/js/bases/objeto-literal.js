let ejemplo = {}; // objeto
let persona = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War',
};

console.log('Nombre', persona.nombre);
console.log('Nombre', persona['nombre']);
console.log('Edad', persona.edad);
console.log('latitud', persona.coords.lat);
console.log('longitud', persona.coords.lng);
console.log('N° trajes:', persona.trajes.length);
console.log('Ultimo traje:', persona.trajes[persona.trajes.length - 1])



const x = 'vivo';

console.log('Vivo', persona[x]);
console.log('Ultima pelicula:', persona["ultima pelicula"]);


// Mas detalles

delete persona.edad; // eliminar 
console.log(persona);

persona.casado = true;

console.log(persona)

const entriesPares = Object.entries(persona); // pasa el objeto a un arreglo
console.log(entriesPares);

//cuando el objeto es const puedo cambiar sus propiedades pero no al mismo objeto

Object.freeze(persona); // congela el objeto para no poder ser modificado // solo las asignaciones directas pero no los objetos dentro del objeto

console.log({ persona });
const propiedades = Object.getOwnPropertyNames(persona);// arreglo que me retorna las llaves o propiedades del objeto
const valores = Object.values(persona); // arreglo que retorna los valores del objeto
console.log(propiedades, valores);



