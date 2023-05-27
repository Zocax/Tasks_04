const prompt = require("prompt-sync")();

var bin = prompt("Escreva o numero binario: ")
var pow = 0;
var result = 0;

for (var index = bin.length - 1; index >= 0; index--) {
  result = result + (Math.pow(2, pow) * Number(bin[index]));
  pow++;
}

console.log(result)