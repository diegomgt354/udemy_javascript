/*
Booleano --> True or False
Null --> Sin valor en lo absoluto
Undefined --> variable declarada pero sin valor
Number --> integers, floats, etc
String --> Cadena de caracteres
Symbol --> Valor unico que no es igual a otro
*/

let nombre = 'Diego';
console.log(nombre);
nombre = "Manuel";
console.log(nombre);
nombre = `Gutierrez
Tafur`;
console.log(nombre);

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

nombre = true;
console.log(typeof nombre);
 
nombre = null; // null o primitivo
console.log(typeof nombre);

let prueba;
console.log(prueba);
console.log(typeof prueba);

nombre = Symbol("a");
console.log(typeof nombre);
