const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Apravado!')
    }else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!!