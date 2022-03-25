// EstruturaSequencial


// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 

// let nome = prompt("Digite o seu nome:")
// console.log(nome)
// alert("Seu nome é: "+nome)


// #------------------------------------------------------------------------------------------------------------#

// 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

// let n1 = parseInt(prompt("Digite o primeiro número"))
// let n2 = parseInt(prompt("Digite o segundo número"))

// alert("A soma dos dois números é: "+(n1+n2))

// #------------------------------------------------------------------------------------------------------------#

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

// let nota1 = parseFloat(prompt("Digite a primeira nota"))
// let nota2 = parseFloat(prompt("Digite a segunda nota"))

// alert("A média é: "+((nota1+nota2) /2))

// #------------------------------------------------------------------------------------------------------------#

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

// let ano = parseInt(prompt("Em qual ano você nasceu?"))

// alert("Sua idade é: "+(2022-ano))

// #------------------------------------------------------------------------------------------------------------#

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

// let horaGanha = parseFloat(prompt("Quanto você ganha por hora? "))
// let horaTrabalhada = parseInt(prompt("Quantas horas você trabalhou no mês?"))

// alert("Você ganha R$ "+(horaGanha*horaTrabalhada)+" por mês")

// #------------------------------------------------------------------------------------------------------------#

// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

// let F = parseInt(prompt("Quantos graus Fahrenheit?"))

// alert("Graus celsius: "+(5 * ((F-32)/9)))


// #------------------------------------------------------------------------------------------------------------#

// EstruturaDeDecisao
// 1.	Faça um Programa que peça dois números e imprima o maior deles.

// let n1 = parseInt(prompt("Digite o primeiro número"))
// let n2 = parseInt(prompt("Digite o segundo número"))

// if (n1 > n2 ){
//     alert(+n1+" é maior")
// }else {
//     alert(+n2+" é maior")
// }

// #------------------------------------------------------------------------------------------------------------#

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

// let n = parseInt(prompt("Digite um número"))

// // if ( n > 0) {
// //     alert("Esse número é positivo !")
// // } else{
// //     alert("Esse número é negativo !")
// // }

// #------------------------------------------------------------------------------------------------------------#

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

// let sexo = prompt("Digite seu sexo").toLowerCase();

// // if (sexo === "f"){
// //     alert("Femino!");
// // } else if ( sexo === "m"){
// //     alert("Masculino!");
// // } else {
// //     alert("Sexo inválido!")
// // }

// #------------------------------------------------------------------------------------------------------------#

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// a.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// b.	A mensagem "Reprovado", se a média for menor do que sete;
// c.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = parseFloat(prompt("Digite a primeira nota"))
// let nota2 = parseFloat(prompt("Digite a segunda nota"))
// let nota3 = parseFloat(prompt("Digite a terceira nota"))

// let media = (nota1+nota2+nota3) / 3

// if (media >= 7){
//     alert("Sua média foi : "+media+ " Você foi aprovado!")
// }else if (media <7){
//     alert("Sua média foi : "+media+ " Você foi reprovado!")
// }else if(media === 10){
//     alert("Sua média foi : "+media+ " Aprovado com Dinstinção!")
// }

// #------------------------------------------------------------------------------------------------------------#

// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.

// let n1 = parseInt(prompt("Digite um número"))
// let n2 = parseInt(prompt("Agora outro número"))
// let n3 = parseInt(prompt("E mais um número"))

// let maior = Math.max(n1,n2,n3)
// let menor = Math.min(n1,n2,n3)

// alert("O maior número digitado foi: "+maior+" e o menor número digitado foi: "+menor)


// #------------------------------------------------------------------------------------------------------------#

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

// let n1 = parseInt(prompt("Digite um numero"))
// let n2 = parseInt(prompt("Digite outro número"))

// if (n1 %2 === 0 && n2 %2 ===0 ){
//     alert(+n1+" é par e "+n2+" também")
// }else if(n1 %2 === 0 && n2 %2 != 0){
//     alert(+n1+" é par e "+n2+" é impar")
// }else{
//     alert(+n1+" é ímpar e "+n2+" também")
// }


// #------------------------------------------------------------------------------------------------------------#

// Estruturas de Repetição:

// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e
//  continue pedindo até que o usuário informe um valor válido.

// while (true) {
//     let nota = prompt("Digite uma nota");

//     if (nota >= 0 && nota <= 10){
//         alert("Nota válida!")
        //    break;
//     } else{
//         alert("Nota invalida")
//     }
// }

// for (var i = 0; i <= 10; i++){
//     alert(i)
// }


// #------------------------------------------------------------------------------------------------------------#

// // 2.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
// // mostrando uma mensagem de erro e voltando a pedir as informações.

// while (true){
//     let nome = prompt("Digite seu nome");
//     let senha = prompt("Digite sua senha")

//     if(nome != senha){
//         alert("Senha correta! ")
//         break;
//     } else{
//         alert("Senha incorreta! Tente novamente")
//     }
// }


// #------------------------------------------------------------------------------------------------------------#
// // 3.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

// let j = 1

// for (let i = 1 ; i<=20 ; i++){
//     j = i
//    console.log(j)
// }

// #------------------------------------------------------------------------------------------------------------#
// // 4.	Faça um programa que leia 5 números e informe o maior número.

// for (let i = 0 ;i <=5 ; i++){
//     let input = parseInt(prompt("Digite um valor"));

//     if (i === 0){
//         maior = input;
//     }

//     else if (input > maior){
//         maior = input
//     }

// }


// #------------------------------------------------------------------------------------------------------------#
// // 5.	Faça um programa que leia 5 números e informe a soma e a média dos números.

// let soma = 0;
// let media = 0;
// for (let i = 0; i < 5; i++) {
//   let n = parseInt(prompt("Digite um número"));
//   soma += n;
// }
// media = soma / 5;
// alert("A soma dos números é: " +soma);
// alert("A media dos números é: " +media);

// #------------------------------------------------------------------------------------------------------------#
// // 6.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

// for (let i = 0 ;i <=50 ;i++) {
//         if (i %2 !=0 ){
//                 console.log(i)
//         }
// }

// #------------------------------------------------------------------------------------------------------------#
// // 7.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
// // O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// // a.	Tabuada de 5:
// // b.	5 X 1 = 5
// // c.	5 X 2 = 10
// // d.	...
// // e.	5 X 10 = 50


// let n = parseInt(prompt("Qual número você quer ver a tabuada?"))

// for (let i = 1; i <= 10; i++){
//         console.log(n+" x "+i+ " = " +(n*i))
//         alert(n+" x "+i+" = "+(n*i))
// }


// #------------------------------------------------------------------------------------------------------------#
// Desafio FizzBuzz

// for (let i = 1; i <= 100;i++){
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0){
//         console.log("Fizz")
//     }else if (i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }


// #------------------------------------------------------------------------------------------------------------#

// ExerciciosListas:
// 1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

// let minhaLista = [12,25,35,20,100]

// for (let i = 0; i < minhaLista.length; i++){
//     console.log(minhaLista[i])
// }


// #------------------------------------------------------------------------------------------------------------#

// 2.	Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// let lista = [1,2,3,4,5,6,7,8,9,10]

// for (i = lista.length-1 ; i >=0 ; i--){
//     console.log(lista[i])
// }


// #------------------------------------------------------------------------------------------------------------#

// 3.	Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

// let lista = [];
// let soma = 0;
// let media = 0;

// for(let i = 0;i <4;i++){
//         lista.push(parseFloat(prompt("Digite uma nota")));
//         soma += lista[i];
// }

// media = soma/4;
// alert("Notas: "+lista+" média: "+media)

// #------------------------------------------------------------------------------------------------------------#

// 4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

// #------------------------------------------------------------------------------------------------------------#

// 5.	Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e
//  os números IMPARES no vetor ímpar. Imprima os três vetores.

// let numeros = []
// let par = []
// let impar = []

// for (let i =0;i <20; i++){

//         numeros.push(prompt("Digite um número:"))
//         if(numeros[i] %2 === 0){
//                 par.push(numeros[i])
//         }else{
//                 impar.push(numeros[i])
//         }
// }

// console.log("Pares: "+par)
// console.log("ímpares: "+impar)
// console.log("Lista original: " +numeros)

// #------------------------------------------------------------------------------------------------------------#


// 6.	Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média 
// de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

// #------------------------------------------------------------------------------------------------------------#

// 7.	Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

// let numeros = [1,2,3,4,5];
// let soma = 0;
// let mult = 1;

// for (let i = 0; i< numeros.length; i++){
//         soma += numeros[i];
//         mult *= numeros[i];
// }

// console.log("Soma: "+soma)
// console.log("Multiplicação: "+mult)
// console.log("Vetor : [" +numeros+"]")


// #------------------------------------------------------------------------------------------------------------#

// 8.	Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
// 9.	O instrutor deve elaborar esse programa.
// Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco. 
// O output do código deve ter o seguinte formato: 
// “{nomeDaPessoa} foi sorteada para pagar o churrasco!”
// 10.	Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”


// #------------------------------------------------------------------------------------------------------------#
// Exercícios Funções:

// 1.    Crie uma função que receba um inteiro e diga se ele é “Par
// ” para números pares ou “Ímpar” para números impares.


// function parImpar(numero){
//     if(numero %2 === 0){
//         alert("é par!")
//     }else{
//         alert("é ímpar!")
//     }
// }

// let numero = parseInt(prompt("Digite um número!"))

// parImpar()


// #------------------------------------------------------------------------------------------------------------#

// 2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles. 

// function adicao(n1,n2){
//         return n1 + n2
// }
// let n1 = parseInt(prompt("Digite um número"))
// let n2 = parseInt(prompt("Digite outro"))

// let soma = adicao(n1,n2)

// alert("A soma é: "+soma)


// #------------------------------------------------------------------------------------------------------------#
// 3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:

// negativo(1) // return -1
// negativo(-5) // return 5

// function negativo(n){
//         return -n
// }

// let n = parseInt(prompt("Digite um numero: "))

// alert("Negativo: "+negativo(n))

// #------------------------------------------------------------------------------------------------------------#

// 4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
// somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

// function somaPositivos(numeros){
//         let soma = 0
//         for(let i = 0; i < 4 ; i++){
//                 if(parseInt(numeros[i]) > 0){
//                         soma += (numeros[i])
//                 }
//         }
//         return ("A soma dos números positivos é: "+soma)
// }
// console.log(somaPositivos([-4,-7,71,13]))


// #------------------------------------------------------------------------------------------------------------#

// 5.	Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:

// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -345


// function menorNumero (n){
//         let menor = n[0]
//                 for(let i = 0; i < 5; i++){
//                         if (n[i] < menor){
//                                 menor = n[i]
//                         }
//                 }
//         return ("O menor número da lista é: "+menor)
// }

// console.log(menorNumero([5,15,-14,-250,581]))

