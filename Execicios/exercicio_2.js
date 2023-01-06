/*2. Escreva um programa que converta segundos em minutos, e minutos em horas. E exiba da seguinte forma:

Tempo: 67702 segundos
Hora convertida: 18:48:22 */

let segundos = 67702
let minutos = 60
let horas = 60
let tempo = segundos / minutos / horas

console.log(tempo.toFixed(4));