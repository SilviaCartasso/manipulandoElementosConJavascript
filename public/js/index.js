let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');
let body = document.querySelector('body');

let nombre = prompt('Ingrese su nombre');

if (nombre === null || nombre == "" ) {
    h2.innerText += " Invitado"
} else {
    h2.innerText += " " + nombre
};

h2.style.textTransform = 'uppercase';

a.style.color = "#E51B3E";

let confirmaFondo = confirm('¿Desea colocar un fondo de pantalla?');

if(confirmaFondo){
    body.classList.add('fondo');
};

for (let i = 0; i < p.length; i++) {
    if (i % 2 === 0 ) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
    
};

main.style.display = 'block';
