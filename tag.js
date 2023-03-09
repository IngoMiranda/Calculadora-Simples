document.body.onload = createTags();
 
function createTags(){

    let body = document.querySelector('body');
    let main = document.createElement('main');
    let display = document.createElement('div');
    let monitor = document.createElement('p');
    

    //criação de id e class

    main.setAttribute("id","corpo");
    display.setAttribute("id","display");
    monitor.setAttribute("id","monitor");
    const valueText = [

        "CE", "C","DEL", "/", 7, 8, 9, "*", 4, 5, 6,"-", 1,
        2, 3, "+", 0, ",","="  
    ];
    console.log(valueText);
    // adicionando childs

    display.appendChild(monitor);
    main.appendChild(display);
    body.appendChild(main);
        
    for( let i = 1; i <= 15; i++ ){

        let buttons = document.createElement('button');
        buttons.setAttribute("id", "buttons");
        main.appendChild(buttons);
        buttons.innerHTML = valueText[i];



        
    }

   


       
    
   
    
}
