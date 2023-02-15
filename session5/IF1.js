function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }

}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function SeForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

SeForVerdadeiroEuFalo()
SeForVerdadeiroEuFalo(null)
SeForVerdadeiroEuFalo(undefined)
SeForVerdadeiroEuFalo(NaN)
SeForVerdadeiroEuFalo('')
SeForVerdadeiroEuFalo(0)
SeForVerdadeiroEuFalo(-1)
SeForVerdadeiroEuFalo(' ')
SeForVerdadeiroEuFalo('?')
SeForVerdadeiroEuFalo([])
SeForVerdadeiroEuFalo([1,2])
SeForVerdadeiroEuFalo({})