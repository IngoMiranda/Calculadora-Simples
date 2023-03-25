class Calculo{
    constructor(){
        this.monitorDisplay = "";
        this.monitor = "";
        this.iniciar();
    }

    iniciar(){
       
        let monitorE = document.querySelector("#monitorDis");
        monitorE.innerHTML = '0';    
    }

    get displayCalc(){
        return this.monitorDisplay;
    }

    set displayCalc(valor){
        this.monitorDisplay = valor;
        this.monitor = valor;
    }

}

let calc = new Calculo();