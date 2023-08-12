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
};

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

function corrigirTudo(){
    display.innerHTML = " "; 
};

function deletarUltimo(){

};