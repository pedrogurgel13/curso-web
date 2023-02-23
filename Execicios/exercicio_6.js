function verificarCPF(cpf) {
    if(true) {
        return true
    } else {
        return false
    }
}

function criarPessoa(nome, sobrenome, dataDeNascimento, cpf) {

    let cpfValido = verificarCPF(cpf)

    return{
        nome,
        sobrenome,
        dataDeNascimento,
        cpf,
        cpfValido
    }
}

const pessoa1 = criarPessoa('Pedro', 'Henrique', '28/06/2006', '123.456.789')
const pessoa2 = criarPessoa('Eliane', 'Gurgel', '08/10/1981', '987.654.321')

console.log(pessoa1)
console.log(pessoa2.nome)

// ('024.763.903-64') = 44 então CPF é valido