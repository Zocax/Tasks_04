const prompt = require("prompt-sync")();

var x = Number(prompt("Escreva o valor de X: "))
var a = 0
var b = 0

while (a + b != x) {
    a = Number(prompt("Escreva aqui o valor de A: "))
    b = Number(prompt("Escreva aqui o valor de B: "))   
}
console.log(`${a} + ${b} = ${x}`);