// todos los primitivos se pasan por valor
let a = 10;
let b = a;
a = 30;
console.log({a,b});

// todos los objetos se pasan por referencia (si le cambio el valor de nombre en ana tambien afecta a juan) - todos son objetos exceptuando los primitivos
juan = {nombre : 'Juan'};
ana = {...juan}; // operador spread para separar todos los valores - separa los elementos - rompe la referencia que hay en javaScript
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({...persona})=>{ // rompemos la relacion de referencia 
    persona.nombre = "Tony";
    return persona;
};
let peter = {nombre:'Peter'};
console.log(peter)
let tony = cambiaNombre(peter);
console.log(peter, tony);

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFruras2 = frutas.slice(); // metodo que corta el arreglo y regresa el argumento que necesito
console.timeEnd('slice');

console.time('spread');
const otrasFruras = [...frutas];
console.timeEnd('spread');

otrasFruras.push("Mango");

console.table({frutas,otrasFruras});
