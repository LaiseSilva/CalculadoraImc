'use strict'; /* cobra mais do código, diminui as chances de erro*/
/*console.log(imc); usado para teste*/

import { iniciarRange } from "./input-range.js";

//Função tradional
/*function camposValidos() {
    return document.getElementById('formulario').reportValidity()
}*/

const camposValidos = () => document.getElementById('formulario').reportValidity(); //arrow function


//Função tradional
/*function calcularImc(altura, peso) {
    return peso / (altura * altura);
} */

const calcularImc = (altura,peso) => peso/(altura*altura); //arrow function



//function classificarImc(imc){}  Função tradicional
const classificarImc = (imc) => {
    
    let texto;
    if (imc < 18.5) {
        texto = 'e você está abaixo do peso' 
    } else if (imc < 25) {
        texto = ' e você está com o peso ideal.<span id="parabens">Parabéns!</span>'
    } else if (imc < 30) {
        texto = 'e você está levemente acima do peso' 
    } else if (imc < 35) {
        texto = 'e você está com obesidade grau I' 
    } else if (imc < 40) {
        texto = ' e você está com obesidade grau II'
    } else {
        texto = 'e você está com obesidade grau III.<span id="cuidado">Cuidado!</span>'
        
    }
     return texto;

}


const mostrarResultado = () => {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (camposValidos()) {

        const imc = calcularImc(altura, peso);

        let texto = classificarImc(imc);
        resultado.innerHTML = `${nome} seu IMC é: ${imc.toFixed(2)} ${texto}`;
    } else {
        resultado.innerHTML = 'Preencha todos os campos!'
    }
};



    document.getElementById('calcular').addEventListener('click', mostrarResultado);

    iniciarRange('altura'); // inicia a função em relação a altura                                     
    iniciarRange('peso');

    