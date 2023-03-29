/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let previuMonitor = document.querySelector("#monitor");
let display = document.querySelector("#monitorDis");
let buttons = document.querySelectorAll("#tec button");


buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let valor = e.target.innerHTML;
        if(+valor >= 0 || valor === "."){
            display.innerHTML += valor;
        }else{
            display.innerHTML += valor;
        }
    });
});





