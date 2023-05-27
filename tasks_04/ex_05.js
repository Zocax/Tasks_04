const prompt = require("prompt-sync")();

var listOfNumbers = 0
var sumOfNumbers = 0
var score = 0

while (listOfNumbers !== 9999) {
    listOfNumbers = Number(prompt("Digite um numero para a lista. "))
    if (listOfNumbers !== 9999) {
    sumOfNumbers = sumOfNumbers + listOfNumbers
    score = score + 1
    }
}
var calculation = sumOfNumbers / score
console.log("Fim da lista");
console.log(`A soma de todos os numeros da lista é: ${sumOfNumbers}`);

var n = Number(prompt("Qual o valor de N? "))
var sum = 0

for (var index = 1; index < n; index++) {
    sum = sum + index
}

console.log(`A soma dos números é: ${sum} é a média aritimética é: ${sum / n}`);