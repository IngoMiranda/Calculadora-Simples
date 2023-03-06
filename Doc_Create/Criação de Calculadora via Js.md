# Criação de Calculadora via Js

- Primeiro momento criei os arquivos: 1- HTML , 2- Dois CSS e 3- três Js;

- Segundo momento comecei a criar os elementos (as tg) via `JS` encontrei dificuldades inicialmente para realizar a inclusão, então fui pesquisar na internet, além de ver a documentação, encontrei a solução. 

- Para criação das tag iniciarei com uma função que irá carregar logo o meu `js` ; 

- Atribui ao meu `document`  a função `createTag` ficando a expressão da seguinte forma: `document.body.onload = createTags();` 

- Dentro da minha função delcarei as variáveis iniciais 
  
  ```variaveis
      let body = document.querySelector('body');
      let main = document.createElement('main');
      let display = document.createElement('div');
      let monitor = document.createElement('p');
      let bottons = document.createElement('botton');
  ```
  
  

- Em seguida usando a função `setAttribute()` adicionei os `id` e as `class`; 

- Para adicionar as tag  ao meu `body` usei a função `appendChild()`


