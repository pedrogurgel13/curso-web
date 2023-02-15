/*
Crie um programa em JavaScript que identifique se o número passado na variável é par ou impar>

Instruções:
    1 - Deve ser feita uma função onde ela escreva na tela se o número é par ou ímpar.

    2 - Pode ser usado somente operadores aritméticos.

    3 - Use IF e ELSE para a decisão.

*/

function ParOuImpar(num) {
    if(num % 2 === 0) {
        console.log(num + ` é PAR `)
    } else if (num % 2 === 1) {
        console.log(num + ` é ÍMPAR `)
    } else {
        console.log("Inválido")
        
    }
}

ParOuImpar("5")