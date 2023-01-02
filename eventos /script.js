const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btcCalcular');
const presult = document.querySelector('#result');



function btnOnClick(params) {
    const sumaInputs= parseInt(input1.value) + parseInt(input2.value); 
    presult.innerText = "Resultado: " + sumaInputs;
}

