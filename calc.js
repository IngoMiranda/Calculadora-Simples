/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let buttons = document.querySelectorAll(".buttons");
let buttonC = document.querySelector("#c");
let buttonCe = document.querySelector("#ce");
let buttonDel = document.querySelector("#del");
let buttonIgual = document.querySelector(".equal");
let display = document.querySelector("#monitorDis");
//const displayOPen = document.querySelector("#monitor");
let operadores = document.querySelectorAll(".operador");
let operadorAtual = "";
let primeiroNum = "";
let segundoNum = "";


function displayAtualiza(valor) {
    if (!Number(valor)) {
        if (valor === "=") {
            console.log("função");
        } else {
            operadorAtual = valor;
        }
    } else if (operadorAtual === "") {
        primeiroNum += valor;
    } else {
        segundoNum += valor;
    }

    display.innerHTML += valor;

};

//Eventos 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let btn = Number(button.innerHTML);
        displayAtualiza(btn)
    });
});

operadores.forEach((operadorButton) => {
    operadorButton.addEventListener('click', () => {
        let operadorBtn = operadorButton.innerHTML;
        displayAtualiza(operadorBtn);
    });
});

buttonC.addEventListener('click', () => {
    display.innerHTML = "";
    primeiroNum = "";
    segundoNum = "";
    operadorAtual = "";
});

buttonCe.addEventListener('click', () => {});

buttonDel.addEventListener('click', () => {});

buttonIgual.addEventListener('click', () => {});