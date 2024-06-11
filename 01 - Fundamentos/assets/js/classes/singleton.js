// singleton(singular o único) -> instancia unica de mi clase, de manera global en toda la aplicacion
class Singleton{
    //  como una db o servicio de manera global
    static instancia;
    
    nombre = 'diego';

    constructor(nombre = ''){

        if(!!Singleton.instancia){ // !undefined=true // !!undefined=false
            return Singleton.instancia;
        }
        Singleton.instancia = this; // esto hace referencia a esta instancia de la clase
        this.nombre = nombre;

        // return this; //  un constructor puede retornar una instancia de la misma clase(es decir si retorna el this), pero por defecto lo hace
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPhanter');

console.log(`Nombre de la instancia1: ${instancia1.nombre}`)
console.log(`Nombre de la instancia2: ${instancia2.nombre}`)
console.log(`Nombre de la instancia3: ${instancia3.nombre}`)