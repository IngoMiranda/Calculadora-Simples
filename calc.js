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
const display = document.querySelector("#monitorDis");
const displayOPen = document.querySelector("#monitor");
let digito = "";
let operador = "";

function displayAtualiza(digito){
    display.innerHTML += digito; 
    correcaoPonto();
    
};

// Eventos de clique

buttons.forEach((btns)=>{
    btns.addEventListener('click', ()=>{
        let btn = btns.innerHTML;
        displayAtualiza(btn);
    });
});

buttonC.addEventListener('click', ()=>{
    corrigirTudo();
});

buttonCe.addEventListener('click', ()=>{
    let nada = "enfeite!";
    displayAtualiza(nada);
});

buttonDel.addEventListener('click', ()=>{
    deletarUltimo();
});

// Funções correção e operações

function corrigirTudo(){
    display.innerHTML = " "; 
};

function deletarUltimo(){
    // slice gera uma nova matriz a partir de uma já existente. No caso abaixo uso o valor inical de 0 e o final de -1 
    // para que a sempre o ultimo valor da matriz seja excluído.
    display.innerHTML = display.innerHTML.slice(0,-1);
};

function correcaoPonto(entradaPonto){
    //display.innerHTML = entradaPonto;
    if(display.innerHTML.includes(".")){
        return;
    }
    
}