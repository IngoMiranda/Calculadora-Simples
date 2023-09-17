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
let buttonEg = document.querySelector(".equal");
const display = document.querySelector("#monitorDis");
const displayOPen = document.querySelector("#monitor");
let operador = document.querySelectorAll(".operador");
let operadorAtual = "";
let primeiroNum = "";
let segundoNum = "";

function displayAtualiza(valor) {
    if (!Number(valor)) {
        if (valor === "=") {
            resultadoCalc()

        } else {
            operador += valor;
        }

    } else {
        if (operador === " ") {
            primeiroNum = valor;
        }
    }

    display.innerHTML += valor;
    correcaoPonto(valor);
    corrigirTudo()
    resultadoCalc();
};

// Eventos de clique

buttons.forEach((btns) => {
    btns.addEventListener('click', () => {
        let btn = parseFloat(btns.innerHTML);
        displayAtualiza(btn);
    });
});

operador.forEach((btnOpera) => {
    btnOpera.addEventListener('click', () => {
        let operaBtn = btnOpera.innerHTML;
        displayAtualiza(operaBtn);
    });
});

buttonEg.addEventListener('click', );

buttonC.addEventListener('click', () => {
    corrigirTudo();
});

buttonCe.addEventListener('click', () => {
    let nada = "enfeite!";
    displayAtualiza(nada);
});

buttonDel.addEventListener('click', () => {
    deletarUltimo();
});

// Funções correção e operações

function corrigirTudo() {
    display.innerHTML = " ";
};

function deletarUltimo() {
    // slice gera uma nova matriz a partir de uma já existente. No caso abaixo uso o valor inical de 0 e o final de -1 
    // para que a sempre o ultimo valor da matriz seja excluído.
    display.innerHTML = display.innerHTML.slice(0, -1);
};

function correcaoPonto() {
    //display.innerHTML = entradaPonto;
    if (display.innerHTML.includes(".")) {
        return;
    }

}

function resultadoCalc() {

}