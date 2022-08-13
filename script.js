// function start() {
//     var buttonCalculateImc = document.querySelector('#button-calculate-imc');
//     buttonCalculateImc.addEventListener('click', handleButtonClick);

//     var inputWeight = document.querySelector('#input-weight');
//     var inputHeight = document.querySelector('#input-height');

//     inputWeight.addEventListener('input', handleButtonClick);
//     inputHeight.addEventListener('input', handleButtonClick);

//     handleButtonClick();
// }

// function calculateImc(peso, altura) {   
//     return peso / (altura * altura);
// }

// function handleButtonClick() {
//     var inputWeight = document.querySelector('#input-weight');
//     var inputHeight = document.querySelector('#input-height');
//     var imcResult = document.querySelector('#imc-result');
    
//     var weight = Number(inputWeight.value);
//     var height = Number(inputHeight.value);

//     var imc = calculateImc(weight, height);
       
//     var formattedImc = imc.toFixed(2).replace('.', ',');
    
//     imcResult.textContent = formattedImc;

let firstDiv = document.querySelector('.first-step');
let secondDiv = document.querySelector('.second-step');
let finalDiv = document.querySelector('.final-step');


function go(currentStep, nextStep) {
    let dNone, dBlock;
    if (currentStep === 1) {
        dNone = firstDiv;
    } else if (currentStep === 2) {
        dNone = secondDiv;
    } else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    if (nextStep === 1) {
        dBlock = firstDiv;
    } else if (nextStep === 2) {
        dBlock = secondDiv;
    } else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

function validate() {
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if (!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        } else if (!peso.value) {
            peso.style.border = '1px solid red';
        } else {
            altura.style.border = '1px solid red';
        }
    } else {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        var imcFaixa = document.querySelector('#imc-faixa');
        var formattedImc = imc.toFixed(2).replace('.', ',');
    
        
        if (imc < 17) {
            imcFaixa.textContent = formattedImc; 
            result.style.color = 'red';
            result.innerHTML = 'Grave | Muito abaixo do peso!';
        } else if (imc >= 17 && imc < 18.5) {
            imcFaixa.textContent = formattedImc; 
            result.style.color = 'yellow';
            result.innerHTML = 'Magreza | Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            result.style.color = 'green';
            imcFaixa.textContent = formattedImc; 
            result.innerHTML = 'Normal | Peso normal';
        } else if (imc >= 25 && imc < 30) {
            result.style.color = 'yellow';
            imcFaixa.textContent = formattedImc; 
            result.innerHTML = 'Atenção | Acima do peso';
        } else if (imc >= 30 && imc < 35) {
            result.style.color = 'yellow';
            imcFaixa.textContent = formattedImc; 
            result.innerHTML = 'Sobrepeso | Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            result.style.color = 'red';
            imcFaixa.textContent = formattedImc; 
            result.innerHTML = 'Sobrepeso | Obesidade grau II';
        } else {
            result.style.color = 'black';
            imcFaixa.textContent = formattedImc; 
            result.innerHTML = 'Grave | Obesidade grau III';
        }
        go(2, 3);
    }
}

//     var imcFaixa = document.querySelector('#imc-faixa');
//     if (imc >= 16 && imc < 17) {
//         imcFaixa.textContent = ('Muito abaixo do peso.');
//     } else if (imc >= 17 && imc < 18.5) {
//         imcFaixa.textContent = ('Abaixo do peso.');
//     } else if (imc >= 18.5 && imc < 25) {
//         imcFaixa.textContent = ('Peso normal.');
//     } else if (imc >= 25 && imc < 30) {
//         imcFaixa.textContent = ('Acima do peso.');
//     } else if (imc >= 30 && imc < 35) {
//         imcFaixa.textContent = ('Obesidade grau I');
//     } else if (imc >=35 && imc <= 40) {
//         imcFaixa.textContent = ('Obesidade grau II');
//     } else if (imc > 40) {
//         imcFaixa.textContent = ('Obesidade grau III');
//     } else {
//         imcFaixa.textContent = ('Indisponível.')
//     }
// }

// start();