
/* const elMayor = (a,b)=>{
    return (a>b)?a:b;
}; */

const elMayor = (a,b)=>(a>b)?a:b;
const tieneMembresia = (miembro)=>(miembro)?'2 dólares':'10 dólares';

console.log(elMayor(20,15));
console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo=true;
const amigosArr = [  'Peter',
                                'Tony',
                                'Dr. Strange',
                                (amigo)?'Thor':'Loki',
                                (()=>'Nick Fury')(),
                                elMayor(45,76)]
console.log(amigosArr);

const notas = 82.5;
const grado =  (notas>95)?'A+':
                        (notas>90)?'A':
                        (notas>85)?'B+':
                        (notas>80)?'B':
                        (notas>75)?'C+':
                        (notas>70)?'C':'F';
console.log({notas, grado});