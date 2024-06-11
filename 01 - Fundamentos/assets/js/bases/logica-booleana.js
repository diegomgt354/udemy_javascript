const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse());// true

console.warn('And');
console.log(true && true); // true
console.log(true && !false); // true

console.log('============');
console.log(regresaFalse() && regresaTrue());;// false - solo se ejecuta el false ya que no necesita ejecutar lo demas
console.log(regresaTrue() && regresaFalse());;// false

console.warn('OR');
console.log(true || true); // true
console.log(false || false); // false
console.log(regresaFalse() || regresaTrue());// true
console.log(regresaTrue() || regresaFalse());// true

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150; // 150
const a2 = false && 'Hola mundo' && 150; // false
const a3 = 'Hola' && 'Mundo' && soyFalso && true; //false

console.log({ a1, a2, a3, })

const a4 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo'; // Ya no soy falso de nuevo
const a6 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || 'Este valor no se asigna'; // Ya no soy falso de nuevo
const a7 = soyFalso || regresaTrue() || soyNull || 'Ya no soy falso de nuevo' || 'Este valor no se asigna'; // Ya no soy falso de nuevo

console.log({ a4, a5, a6, a7, })


