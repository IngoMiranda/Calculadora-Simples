/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/



let buttons = document.querySelectorAll("#tec button");
let digito = "";
let operador = "";

// function displayW(digito, operador){
//     document.getElementById("monitorDisplay");

// }

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let valor = btn.innerHTML;
        if(+valor >= 0 || valor === "."){
            digito = valor;
            console.log(digito);        
        }else{
            operador = valor;
        }

    });
   
});





