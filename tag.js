document.body.onload = createTags();
 
function createTags(){

    let body, main, display, monitor, bottons;

    body = document.querySelector('body');
    main = document.createElement('main');
    display = document.createElement('div');
    monitor = document.createElement('p');
    bottons = document.createElement('botton');


    main.setAttribute("class", "corpo");
    main.setAttribute("id","corpo");
    display.setAttribute("id","display");
    display.appendChild(monitor);
    main.appendChild(display);
    body.appendChild(main);
    console.log(body);
   
    
}
