const prompt = require("prompt-sync")();

var numberOne = Number(prompt("Escreva um numero: "))

while (numberOne > 0.99) {
    numberOne = numberOne / 2
    console.log(` ${numberOne} : 2 = ${numberOne / 2} e o resto é ${numberOne % 2}.`);
}