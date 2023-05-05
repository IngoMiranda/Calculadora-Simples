/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let buttons = document.querySelectorAll("#tec button");
const display = document.querySelector("#monitorDis")
let digito = "";
//let digitoAnterior = "";
let operador = "";

function atualizaDisplay(){
    display.textContent = `${digito}${operador}`;
}

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let valor = btn.innerHTML;
        if(+valor >= 0 || valor === "."){
            digito = valor;
               
        }else{
            operador = valor;
        }
        atualizaDisplay();
    });   

});




