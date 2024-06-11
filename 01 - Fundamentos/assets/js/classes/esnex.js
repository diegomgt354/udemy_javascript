class Cuadrilatero{
    #area=0;
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
        this.#area=base*altura;
    }

    #metodoPrivado(){
        console.log('Mensaje del metodo provado');
    }

    dobreArea(){
        console.log(`El doble del area es ${this.#area}`);
        this.#metodoPrivado();
    }
}

const rectangulo = new Cuadrilatero(15,10);
// rectangulo.#area=200; // propiedad #area no es accesible por ser privada y solo puede ser usada dentro de la clase
console.log(rectangulo);
rectangulo.dobreArea();
// rectangulo.#metodoPrivado(); // metodo #metodoPrivado no es accesible directamente ya que es provado 