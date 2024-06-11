class Persona{

    // tiene 'use strict' por defecto

    static _conteo = 0; // me permite llamar sin necesidad de instanciar la clase

    static get getConteo(){ 
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola, soy un metodo estatico.');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre='sin nombre', codigo='sin código', frase='sin frase'){
        console.log('Hola :)');

        // if (!nombre) throw Error('Necesitamos el nombre');
        // if (!codigo) throw Error('Necesitamos el codigo');
        // if (!frase) throw Error('Necesitamos el frase');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComida(comida){
        this.comida = comida.toUpperCase();
    }

    get getComida(){
        return `La comida favorita de ${this.codigo} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identificación es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice ${this.frase}`);

    }
}

class Heroe extends Persona{
    poder = 'sin poder';

    constructor(nombre,codigo,frase,poder){
        let prueba = 25;
        let resultado = 15+prueba;
        super(nombre,codigo,frase); // llama al constructor de la clase padre ANTES DE USAR THIS
        this.poder = poder;
    }

    quienSoy(){
        super.quienSoy();
        console.log(`${this.nombre}, ${this.poder}`);
    }
}

const spiderman = new Heroe('Peter Parker','spiderman', 'Soy tu amigable vecino spiderman','telaraña');

console.log(spiderman);
console.log(Heroe.getConteo);
spiderman.comida = 'pie de Manzana de la tia May.';
console.log(spiderman);

spiderman.quienSoy();
