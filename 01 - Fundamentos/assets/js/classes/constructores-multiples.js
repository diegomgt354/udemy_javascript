class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre} ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Elizeth', apellido1 = 'Rojas', pais1 = 'Perú';
const persona1 = new Persona(nombre1,apellido1,pais1);
persona1.getInfo();

const diego = {
    nombre :   'Diego',
    apellido : 'Gutierrez',
    pais :     'Japón'
}
const persona2 = Persona.porObjeto(diego);
persona2.getInfo();
