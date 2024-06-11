/* function crearPersona(name, surname){
    return {
        name:name,
        surname:surname
    }
} */

/* function crearPersona(name, surname){
    return {name,surname}
} */

/* const crearPersona = (name, surname) =>{
    return {name,surname}
} */

const crearPersona = (name, surname) => ({name,surname});

const persona = crearPersona('Diego','Gutierrez');
console.log(persona);

const {surname} = crearPersona('Diego','Gutierrez');
console.log({surname});

const {surname:newSurname} = crearPersona('Diego','Gutierrez');
console.log({newSurname});

function imprimeArgumentos(){
    console.log(arguments); /* arguments es un arreglo de lo ingresado y 
    es propio de las funciones tradicionales
    */ 
}

// despues de ...args no puedo  haber otro parametro pero antes si 
const imprimeArgumentos2 = (...args)=>console.log(args);
const imprimeArgumentos3 = (primero,...args)=>console.log({primero,args});
const imprimeArgumentos4 = (...args) => args;

imprimeArgumentos(2,5,true,34.6);
imprimeArgumentos2(2,5,true,34.6);
imprimeArgumentos3(2,5,true,34.6);

const [dias,meses,casado,dinero] = imprimeArgumentos4(2,5,true,34.6);
console.log({dias,meses,casado,dinero});


let tony = {
    nombre:'Tony Stark',
    codeName:'Ironman',
    vivo:false,
    //edad:40,
    trajes:['Mark 1', 'Mark V', 'Hulkbuster'],
};

/* const imprimePropiedades = (personaje) => {
    console.log('nombre:',personaje.nombre);
    console.log('codeName:',personaje.codeName);
    console.log('vivo:',personaje.vivo);
    console.log('edad:',personaje.edad);
    console.log('trajes:',personaje.trajes);
} */

const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) => {
    //edad = edad || 0;
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);