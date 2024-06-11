const informacion = [
    { id: 1, name: "diego", year: 33 },
    { id: 1, name: "alessio", year: 2 },
    { id: 1, name: "francis", year: 98 }
];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (informacion.length === 0) {
            reject(new Error('No hay datos'));
        }
        setTimeout(() => {
            resolve(informacion);
        }, 1500);
    });
}

getDatos().then((dat) => console.log(dat));
// getDatos().then((dat)=>console.log(dat)).catch(err=>console.log(err)).finally(console.log('final'));


async function printData() {
    try {
        const datos = await getDatos();
        console.log(datos);
    } catch (err) {
        console.log(err.message);
    }
}



printData();

// const getDatos = ()=>{
//     setTimeout(()=>{
//         return informacion;
//     },1500);
// }

// console.log(getDatos());


// const getDatos = ()=>{
//     return informacion;
// }

// console.log(getDatos());