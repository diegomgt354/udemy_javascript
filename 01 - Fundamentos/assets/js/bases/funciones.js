// buena practica que las funciones esten al inicio
function saludar(){
    console.log('Hola Mundo');
    return 'Mensaje retornado';
    console.log('Este codigo nunca se ejecutara'); // despues del return no se ejecuta codigo
}

// funcion anonima
const saludar2 = function(){
    console.log('Hola Mundo en saludar 2');
}
 
const saludar3 = function(name){
    console.log('Hola '+name);
}

const prueba1 = function(){
    console.log(arguments); // hace referencia a todos los elementos enviados a la funcion
}

// funciones de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (name) => {
    console.log('Hola Flecha '+name);
}

const retornoDeSaludar = saludar();
console.log(retornoDeSaludar);
saludar2();
saludar3('Diego');
prueba1(1,2,true,false,'diego',[4,6,8]);
saludarFlecha();
saludarFlecha2('Diego');


const suma = function(){
    let adicion=0
    for (let i=0; i<arguments.length; i++) {
        adicion += arguments[i];         
    }
    return adicion;
}  
let resultado = suma(1,2,3,4,5,6,7,8,9);
console.log(resultado);

const suma2 = (a,b) => a+b;
let resultado2 = suma2(7,9);
console.log(resultado2);

const getAleatorio = () => Math.round(Math.random()*10+1);
console.log(getAleatorio());


const mensajito = () =>'Hola mundo';

console.log(mensajito()); 