/***************************************************************************
* Objetivo: Entrada de odis números e realizar a soma entre eles 
* Data: 09/08/2023
* Autor: Marcel
* Versão: 1.2.0
 ***************************************************************************/

//import da biblioteca readline
var readline = require('readline');


//cria um objeto de entrada de dados para interagir com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite seu nome: ', function(nomeUsuario){
    var nome = nomeUsuario;

    //entrada de dados para receber o valor 1
    entradaDados.question('Digite o valor1: ', function(valor1Usuario){

        //recebe o valor1
     var valor1 = valor1Usuario

      //entrada de dados para receber o valor2  
    entradaDados.question('Digite o valor2: ', function(valor2Usuario){
      
        //recebe o valor2
     var valor2 = valor2Usuario
        
        /**Métodos para conversão de String para números
         *parseInt() - Converte uma string para numero inteiro
         *parseFloat() - converte uma string para número real
         *Number() - converte uma string para número, ela define se o número será inteiro ou real
          
         */
     var resultado = Number(valor1) + Number(valor2);

     console.log('O nome do usuário é: ' + nome);
     console.log('A soma do resultado é: ' + resultado);
   
        // console.log(typeof(resultado))

        //força uma saída do terminal
        entradaDados.close();
        })
    })
})

    