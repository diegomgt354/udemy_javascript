const elizeth = {
    nombre : "Elizeth",
    edad : 28,
    imprimir(){
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
    }
}
console.log(elizeth);
elizeth.imprimir();

// antes se procedia de esta manera (se asemeja a una clase en POP) y se tenia 
// que llamar con la palabra new pero era un problema ya que otras personas no 
// tenian idea que era obligatorio
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea :)');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = ()=>{
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
    }
}

const diego = new Persona('Diego', 33);
const alessio = new Persona('Alessio', 2);
console.log(diego);
console.log(alessio);
diego.imprimir();
alessio.imprimir();

Persona();