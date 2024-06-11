let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono']
console.log('Largo: ', juegos.length);

let primero = juegos[0]
let ultimo = juegos[juegos.length - 1]
console.log({ primero, ultimo })

juegos.forEach((a) => {
    console.log(a)
});
juegos.forEach((valor, posicion, array) => {
    console.log({ valor, posicion, array });
});
juegos.push('F-Zero'); // agrega un elemento al final del arreglo
console.log({ juegos });

juegos.unshift('Fire Emblem'); // agrega un elemento al inicio del arreglo
console.log({ juegos });

let borrado = juegos.pop(); // remueve el ultimo elemento del arreglo y lo retorna
console.log({ borrado, juegos });

console.log({ juegos });
let posicion = 1;
let cantidad = 2;
let arrayEliminado = juegos.splice(posicion, cantidad);  // retorna un nuevo arreglo desde le punto inicial hasta la cantidad de elementos
console.log({ arrayEliminado, juegos });

let indexMetroid = juegos.indexOf('Metroid'); // retorna el index de lo que ingrese, incluir como esta ya que es caseSentitive
console.log({ indexMetroid });


let users = [
    { id: 1, name: 'diego', age: 33 },
    { id: 2, name: 'elizeth', age: 28 },
    { id: 3, name: 'alessio', age: 2 },
    { id: 4, name: 'anthonella', age: 3 }
];

let obj = users.find(item => item.id % 2 == 0); // encuentra el primer objeto en un arreglo dependendiento del criterio de busqueda
let obj2 = users.filter(item => item.id % 2 == 0);
console.log(obj);
console.log(obj2);

