
    //Exercícios JavaScript funções 

    function imprimirNoConsole () {
      console.log("Hello World");
    }
    
    imprimirNoConsole ();
    
    //função com parâmetro 
    
    function imprimirIdade(idade) {
      console.log(`Voce tem ${idade} anos`);
    }
    
    imprimirIdade(12);
    imprimirIdade(28);
    imprimirIdade(45);
    
    
    //usando retorno

    function soma(a, b) {
      return a + b;
    }
    
    console.log(soma(4, 5));
    console.log(soma(10, 20));
    console.log(soma(100, 50));
    
    
    //retornando um número aleatório com Math.random();
    
    function numeroAleatorio(num) {
      return Math.floor(Math.random() * num) + 1;
    }
    
    console.log(numeroAleatorio(10));
    console.log(numeroAleatorio(100));
    console.log(numeroAleatorio(150));
    
    //função com if e else

    function podeEntrarNaAuto(idade) {
      if (idade >= 18) {
        console.log("Pode se matricular na Auto escola");
      }
      else {
        console.log("Não Pode se matricular na auto  escola");
      }
     
    }
    
    podeEntrarNaAuto(15);
    podeEntrarNaAuto(18);
    
    
    //=== (Valor e Tipo igual) – é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
    
    
      //O operador typeof retorna uma string indicando o tipo de operação.
      
    function verificarTipoDeDado(dado) {
      if (typeof dado === 'string') {
        console.log("Este dado é uma string");
      }
      else if (typeof dado === 'number') {
        console.log("Este dado é um número");
      }
      else if (typeof dado === 'boolean') {
        console.log("Este dado é um Boolean");
      }
    }
    
    verificarTipoDeDado(true);
    verificarTipoDeDado(30);
    verificarTipoDeDado("teste");
    
    //Função que recebe um número negativo e retorna um número positivo ( Math.abs) número + absoluto 
    
    
    function numeroPos(numNegativo) {
      return Math.abs(numNegativo);
    }
    
    console.log(numeroPos(-13));
    console.log(numeroPos(4));
    console.log(numeroPos(-13,4));
    
    
    //texto.length verifica o tamanho do texto 
    function checarTamanhoTexto(texto) {
      if (texto.length > 10) {
        console.log("texto muito longo");
      }
      else {
        console.log("texto dentro do limite ");
      }
    }
    checarTamanhoTexto("teste");
    checarTamanhoTexto("Vamos testar");
    checarTamanhoTexto("menor que 10");
    
    
    function baseEpotencia(a, b) {
      return Math.pow(a, b);
      //return a ** b;
    }
    console.log(baseEpotencia(2, 2));
    console.log(baseEpotencia(5, 2));
    console.log(baseEpotencia(10, 2));
    
    function imprimePar(num) {
      for (let i = num; i > 0; i--) {
        if (i % 2 == 0 ) {
          console.log(i);
        }
      }
    }
    
    imprimePar(15);
   