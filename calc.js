/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let buttons = document.querySelectorAll("#tec button");
const display = document.querySelector("#monitorDis");
const displayOPen = document.querySelector("#monitor");
//let digitoAnterior = "";
let digito = "";
let operador = "";

function displayAtualiza(digito){
    display.innerHTML += digito;    
}

buttons.forEach((btns)=>{
    btns.addEventListener('click', ()=>{
        let btn = btns.innerHTML;
        if(+btn >= 0 ){
            digito += btn;
                      
        }else if( btn === "."){
            digito += btn;
        }else if( btn === "CE" || btn === "C" || btn === "DEL" ){
            console.log(btn);
        }else{
            operador = btn;
            
        };

        displayAtualiza(btn);

    });
    
})






