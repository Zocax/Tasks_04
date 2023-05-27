const prompt = require("prompt-sync")();

var numberRoman = prompt("Escreva o numero romano: ")
var romanValues = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
var result = 0
for(var i = 0; i < numberRoman.length; i++) {
    var currentValue = romanValues[numberRoman[i]]
    var nextValue = romanValues[numberRoman[i+1]]
    if (nextValue && nextValue > currentValue) {
        result = result + nextValue - currentValue
    } else {
        result = result + currentValue
    }

} 
console.log(result)