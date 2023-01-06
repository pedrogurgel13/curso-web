// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec () {
    const saudacao= 'Falaaa' //contexto léxico 2
    return saudacao
}

// Obejetos são grupos aninhados de pares de nome/valor
const cliente = {
    nome: 'Italo',
    idade: 35,
    peso: 78,
    endereco:{
        logradouro: 'Rua Afonso Pena',
        numero: 777
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.endereco)