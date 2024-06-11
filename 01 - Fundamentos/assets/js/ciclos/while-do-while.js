
console.warn("while");
const carros = ['Ford','Mazda','Honda','Toyota'];
let i = 0;
while (i<carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn("do while");
let j = 0;
do{
    console.log(carros[j]);
    j++;
}while(carros[j]); // carros[j] al final da undefined y por eso no continua

// undefined
// null
// false     