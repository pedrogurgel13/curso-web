const escola = [{
    nomw: 'Turma M1',
    alunos: [{
        nome: 'Pedro',
        nota: 9.5
    }, {
        nome: 'Ana',
        nota: 7.9
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 10
    }, {
        nome: 'Luiz',
        nota: 5.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}