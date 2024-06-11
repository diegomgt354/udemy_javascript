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

const spiderman = new Persona('Peter Parker','spiderman', 'Soy tu amigable vecino spiderman');
const superman = new Persona('Clark Kent', 'superman', 'Yo soy superman');
console.log(spiderman);
console.log(superman);

spiderman.miFrase();
superman.miFrase();

spiderman.setComida = 'Pie de Cereza de la tia May';
console.log(spiderman);
console.log(spiderman.getComida);

console.log(Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();

// propiedades estaticas externas o fuera de la clase
Persona.propiedadExterna = 'Hola Mundo mundial';
console.log(Persona.propiedadExterna);
console.log(Persona);  