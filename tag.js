document.body.onload = createTags();
 
function createTags(){

    var body = document.querySelector('body');
    var main = document.createElement('main');
    var display = document.createElement('div');
    var teclas = document.createElement('div');
    var monitor = document.createElement('p');
    var monitorDisplay = document.createElement('p');
   
    const valueText = [

        "CE", "C","DEL", "/", 7, 8, 9, "*", 4, 5, 6,"-", 1,
        2, 3, "+", 0, ".","="   
    ];

       

    //criação de id e class

    main.setAttribute("id","corpo");
    teclas.setAttribute("id","tec");
    display.setAttribute("id","display");
    monitor.setAttribute("id","monitor");
    monitorDisplay.setAttribute("id","monitorDis");
    
    

   // adicionando childs

    display.appendChild(monitor);
    display.appendChild(monitorDisplay);
    main.appendChild(display);
    main.appendChild(teclas);
    body.appendChild(main);

           
    for( let i = 0; i < 19; i++ ){

        let buttons = document.createElement('button');
        buttons.setAttribute("id", "buttons");
        teclas.appendChild(buttons);
        buttons.innerHTML = valueText[i];

        if(valueText[i] === "CE" || valueText[i] === "C" || valueText[i] === "DEL"){

            buttons.setAttribute('class', 'cor');
            let cor = document.querySelectorAll('.cor');
           
            cor.forEach(el=>{
                el.style.background = '#E2E2E2';
                el.style.color = '#343434';
            })
           
            
        }else if(valueText[i] === "="){

            buttons.setAttribute('class', 'equal');
           let corEqual = document.querySelector('.equal');
            corEqual.style.background = '#E2E2E2';
            corEqual.style.color = '#343434';

        }
             
    }
     
   
    
      
    
   
}
