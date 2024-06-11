const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });
if (dia == 0) {
    console.log('Domingo');
} else if (dia == 1) {
    console.log('Lunes');
} else if (dia == 2) {
    console.log('Martes')
} else {
    console.log('No es lunes, martes ni domingo');
}
console.log(hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds() + "." + hoy.getMilliseconds());
console.log(5 == '5');
console.log(5 === '5');
//----------------------------------
console.log('------------------------------------');

const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
const diasOb = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}



let d = 5;
let d2 = 10;

console.log(dias[dia] || 'Dia no definido');
console.log(dias[d] || 'Dia no definido');
console.log(diasOb[d2] || 'Dia no definido');
