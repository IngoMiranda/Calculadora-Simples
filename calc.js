/*
- Evento de Clique nos butões;
  
- coletar os valores ;
  
- separar operadores de números;
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let previuMonitor = document.querySelector("#monitor");
let display = document.querySelector("#monitorDis");
let buttons = document.querySelectorAll("#tec button");

buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let valor = e.target.innerHTML;
        if(+valor >= 0 || valor === "."){
            console.log(valor);
        }else{
            console.log("opera " + valor)
        }
    });
});

