document.body.onload = createTags();
 
function createTags(){

    let body = document.querySelector('body');
    let main = document.createElement('main');
    let display = document.createElement('div');
    let monitor = document.createElement('p');
    let bottons = document.createElement('botton');

    //criação de id e class

    main.setAttribute("id","corpo");
    display.setAttribute("id","display");
    monitor.setAttribute("id","monitor");
    bottons.setAttribute("id", "buttons");


    // adicionando childs

    display.appendChild(monitor);
    main.appendChild(display);
    body.appendChild(main);

    
    if(mian = document.getElementById("bottons")){

        console.log("estou aqui");

    }else{
        main.appendChild(bottons);
    }


       
    
   
    
}
