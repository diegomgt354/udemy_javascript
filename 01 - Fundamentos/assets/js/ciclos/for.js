
const heroes = ['Batman','Superman','Mujer maravilla','Aquaman']

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('\nFor in');
for (let i in heroes) { // lo mismo del for tradicional, i toma el indice
    console.log(heroes[i]);
}

console.warn('\nFor of');
for (let heroe of heroes) { // la variable heroe toma cada el valor de la lista heroes 
    console.log(heroe);
}

const alumnos = ['Diego', 'Manuel', 'Elizeth', 'Yaqueli'];

for(let i in alumnos){
    console.log(alumnos[i]);
}

for(let alumno of alumnos){
    console.log(alumno);
}
