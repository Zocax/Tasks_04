const prompt = require("prompt-sync")();

var n = Number(prompt("Escreva o valor de N: "))
var a = Number(prompt("Escreva o valor de A: "))
var b = Number(prompt("Escreva o valor de B: "))
var count = 0
var countTwo = 0

for (var index = 0; index <= n; index++ ) {
        if (index % 2 != 0) {
            console.log(`Numero impar de 0 a N:`, index);
            count = count + index
        }
}
console.log(`Soma dos numeros impares de 0 a N`, count);

for (var indexTwo = a; indexTwo <= b; indexTwo++) {
    if (indexTwo % 2 != 0) {
        countTwo = countTwo + indexTwo
        console.log(`Os numeros impares entre A e B: `, indexTwo);
    }
}
console.log(`Soma dos numeros impares de A e B: `, countTwo);