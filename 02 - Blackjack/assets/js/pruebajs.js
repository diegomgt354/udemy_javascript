window.onload = ()=>{
    let heading = document.createElement('h1');
    let heading_txt = document.createTextNode('El texto que revolucionara la industria de la programación.');
    heading.appendChild(heading_txt);
    document.body.appendChild(heading);

    let table = document.getElementById('table');
    let tableAttributes = table.attributes;
    for (const attribute of tableAttributes) {
        if(attribute.nodeName.toLowerCase()=='border'){
            table.border='1';
        }
    }
    table.summary = 'Hola, esto es una modificación de diegomgt.';
    table.style='color:blue; border-color:red';
};

/* const divBotones = document.querySelector('#divBotones');
const btnNuevo = document.createElement('button');
btnNuevo.innerText = 'Ultra instinto';
btnNuevo.classList.add('btn');
btnNuevo.classList.add('btn-success');
divBotones.append(btnNuevo);

const input = document.createElement('input');
input.classList.add('form-control');
input.placeholder = 'Ingresa tu nombre';
document.body.append(input); */