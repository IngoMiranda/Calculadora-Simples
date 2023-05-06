/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let buttons = document.querySelectorAll("#tec button");
const display = document.querySelector("#monitorDis");
const displayOPen = document.querySelector("#monitor");
let digito = "";
let digitoAnterior = "";
let operador = "";

function atualizaDisplay(){
    display.textContent = `${digitoAnterior}${operador}${digito}`;
}

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let valor = btn.innerHTML;
        if(+valor >= 0 || valor === "."){
            digito += valor;
            digitoAnterior = digito;
               
        }else{
            operador += valor;
        }
        atualizaDisplay();
    });   

});




