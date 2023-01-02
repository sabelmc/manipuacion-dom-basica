const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.querySelector('.pid');
const input = document.querySelector('input');

/* console.log({
    h1,
    p,
    parrafito,
    pid,
    input, 
}); */

h1.innerHTML = 'patito';
h1.innertext = 'patito <br> feo';
// console.log(h1.getAttribute('class')); 
//h1.setAttribute = ('class', 'rojo');
 
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://pixabay.com/images/id-6753636/');

console.log(img);

pid.appendChild(img);
