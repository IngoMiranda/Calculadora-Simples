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
  
  ```appendChid
      main.setAttribute("class", "corpo");
      main.setAttribute("id","corpo");
      display.setAttribute("id","display");
      display.appendChild(monitor);
      main.appendChild(display);
      body.appendChild(main);
  ```

<<<<<<< HEAD
- 
=======
Para criar 15 buttons encontrei dificuldade sabia que precisava criar um loop no primeiro momento montei a estrutura, mas não estava sabendo executar, procurei na internet mais não encontrei. 

Fiz a pergunta ao chat GPT e consegui um exemplo que me mostrou como eu poderia realizar a execução;

```loop
for( let i = 1; i <= 15; i++ ){

        let buttons = document.createElement('button');
        buttons.setAttribute("id", "buttons");
        main.appendChild(buttons);
       



        
    }
```

Com o for os `buttons` foram criados, mas eu me encontrei com uma questão como atribuir valor aos botões. 

Então declarei uma `array valueText` com os valores dos botões e dentro do `for` chamei a minha lista e seu `index[i]` 



```código
 for( let i = 1; i <= 15; i++ ){

        let buttons = document.createElement('button');
        buttons.setAttribute("id", "buttons");
        main.appendChild(buttons);
        buttons.innerHTML = valueText[i];



        
    }
```



Percebi que a quantidade de botões estava errada e precisei corrigir o loop ficando dessa forma: 



```loop corrigido
for( let i = 0; i < 19; i++ ){

        let buttons = document.createElement('button');
        buttons.setAttribute("id", "buttons");
        main.appendChild(buttons);
        buttons.innerHTML = valueText[i];



        
    }
```




>>>>>>> 65b7fe9e5fe1ed99f5c2bf1b1325b0d3dd027b20
