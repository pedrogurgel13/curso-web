// Função criar produto()
// obj: nome, preço e desconto


function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1

    }
}

//console.log(criarProduto('Lapis', 1.50))
//console.log(criarProduto('Bolsa', 50))


const prod1 = criarProduto('Lapis', 1.50)
const prod2 = criarProduto('Bolsa', 50)

console.log(prod2.nome)
