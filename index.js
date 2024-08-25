const texto = document.getElementById('texto');
const btnIncremento = document.getElementById('btnI');
const btnDecremento = document.getElementById('btnD');
const btnReinicio = document.getElementById('btnR');

let numerin = 0;


btnIncremento.addEventListener('click', () =>{
    texto.innerHTML = ++numerin;
});

btnDecremento.addEventListener('click', () =>{
    numerin > 0 ? numerin = texto.innerHTML = --numerin : 0;
});

btnReinicio.addEventListener('click', ()=>{
    numerin = 0;
    texto.innerHTML = numerin;
});







