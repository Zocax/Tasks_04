const prompt = require("prompt-sync")();

var n = Number(prompt("Escreva o valor de N: "))
var countPrevious = 0
var countNext = 1
var fibonacci = 0

for (var index = 0; index < n; index++) {
countPrevious = countNext
countNext = fibonacci
fibonacci = countPrevious + countNext

if (true) {
    console.log(`${countPrevious} + ${countNext} = ${fibonacci}`);
}
}