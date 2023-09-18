/*
- Evento de Clique nos butões; okey
  
- coletar os valores ; okey
  
- separar operadores de números; okey
  
- tratar possívei erros que usuário possa cometer ;
  
- criar função para calcular;*/


let buttons = document.querySelectorAll(".buttons");
let buttonC = document.querySelector("#c");
let buttonCe = document.querySelector("#ce");
let buttonDel = document.querySelector("#del");
let buttonEg = document.querySelector(".equal");
const display = document.querySelector("#monitorDis");
const displayOPen = document.querySelector("#monitor");
let operador = document.querySelectorAll(".operador");
let operadorAtual = "";
let primeiroNum = "";
let segundoNum = "";