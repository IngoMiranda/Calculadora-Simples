/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/

<<<<<<< HEAD


let buttons = document.querySelectorAll("#tec button");
let digito = "";
let operador = "";

// function displayW(digito, operador){
//     document.getElementById("monitorDisplay");

// }
=======
let buttons = document.querySelectorAll("#tec button");
const display = document.querySelector("#monitorDis");
let digitoAnterior= "0";
let digito= "";
let operador = "";

function atualizaDisplay(){
    display.textContent = `${digito} ${operador}`;
}
>>>>>>> 2e175e184b27caf5a350be68306e14cd2b04e444

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let valor = btn.innerHTML;
        if(+valor >= 0 || valor === "."){
<<<<<<< HEAD
            digito = valor;
            console.log(digito);        
        }else{
            operador = valor;
        }

    });
   
=======
            digito += valor; 
                 
        }else{
            operador = valor;
        }
        atualizaDisplay();
    });
    
>>>>>>> 2e175e184b27caf5a350be68306e14cd2b04e444
});




