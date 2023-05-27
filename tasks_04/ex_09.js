const prompt = require("prompt-sync")();

var array = []
var string = ""

while (arrayNumbers !== 9999) {
var arrayNumbers = Number(prompt("Escreva os numeros do array: (Para parar digite 9999)" ))
if (arrayNumbers !== 9999) {
    array.push(arrayNumbers)
}
}

for (var index = 0; index < array.length; index++) {
    string += String(array[index])
}

var sum = String(Number(string) + 1)
var result = []

for (var index = 0; index < sum.length; index++) {
    result.push(Number(sum[index]))
}
console.log(result);