/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let displaySuperior = document.querySelector("#monitor");
let displayPrincipal = document.querySelector("#monitorDis");
let buttons = document.querySelectorAll("#tec button");
let digitoPrincipal = "";
let digitoSuperior = "";


buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let valor = btn.innerHTML;
        if(+valor >= 0 || valor === "."){
            digitoPrincipal += valor;
        
        }else{
            digito += valor;
            
        }
        
        displayPrincipal.innerHTML = digitoPrincipal;
        displaySuperior.innerHTML = digitoPrincipal;
        
    });

    
});





