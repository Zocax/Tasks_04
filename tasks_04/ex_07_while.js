const prompt = require("prompt-sync")();

var n = Number(prompt("Escreva o valor de N: "))
var countPrevious = 0
var countNext = 1
var fibonacci = 0
var score = 0

while (score < n) {
    score = score + 1
    countPrevious = countNext
    countNext = fibonacci
    fibonacci = countPrevious + countNext

    console.log(fibonacci);
}