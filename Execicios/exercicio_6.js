// Funcao fabrica (Factory)
// crie uma Pessoa
// Paramentros: nome, sobrenome, dataDeNascimento, cpf

function criarPessoa(nome, sobrenome, dataDeNascimento, cpf) {
    return{
        nome,
        sobrenome,
        dataDeNascimento,
        cpf
    }
}

const pessoa1 = criarPessoa('Pedro', 'Henrique', '28/06/2006', '123.456.789')
const pessoa2 = criarPessoa('Eliane', 'Gurgel', '08/10/1981', '987.654.321')

console.log(pessoa1)
console.log(pessoa2.nome)