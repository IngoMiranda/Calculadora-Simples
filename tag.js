document.body.onload = createTags();
 
function createTags(){
    let body = document.querySelector('body');
    let main = document.createElement('main');
    let display = document.createElement('div');
    let monitor = document.createElement('p')
    let bottons = document.createElement('botton');


    main.setAttribute("class", "corpo");
    main.setAttribute("id","corpo");
    display.setAttribute("id","display")
    display.appendChild(monitor)
    main.appendChild(display);
    body.appendChild(main);
    console.log(body);
   
    
}
