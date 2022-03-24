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

let n1 = parseInt(prompt("Digite um numero"))
let n2 = parseInt(prompt("Digite outro número"))

if (n1 %2 === 0 && n2 %2 ===0 ){
    alert(+n1+" é par e "+n2+" também")
}else if(n1 %2 === 0 && n2 %2 != 0){
    alert(+n1+" é par e "+n2+" é impar")
}else{
    alert(+n1+" é ímpar e "+n2+" também")
}

