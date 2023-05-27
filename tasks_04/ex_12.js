const prompt = require("prompt-sync")();

var num = Number(prompt("Escreva o número decimal: "));
var string = "";
var rest = num;

while (num > 0.99) {
    rest = num % 2;
    string = String(rest) + string
    num = Math.floor(num / 2);
}

console.log(Number(string));