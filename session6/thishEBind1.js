const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: fuunction e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()