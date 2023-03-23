class Calculo{
    constructor(){
        this.monitor = '0';
        this.iniciar();
        
    }

    iniciar(){
       
        let monitorEl = document.querySelector('#display');

        monitorEl.innerHTML = '12354';

        
    }

    get displayCalc(){
        return this.monitor;
    }

    set displayCalc(valor){
        this.monitor = valor;
    }

}

