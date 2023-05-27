const prompt = require("prompt-sync")()

var n = Number(prompt("Qual o valor de N? "))
var countEmplooySalary = 0
var countNewSalary = 0

for (var index = 0; index < n; index++) {
var emplooyName = prompt("Qual o nome do funcionario? ")
var emplooySalary = Number(prompt("Qual o salario do funcionario? "))
var newSalary = 0

if (emplooySalary < 150) {
    newSalary = (emplooySalary * (25 / 100)) + emplooySalary
} 
if (emplooySalary >= 150 && emplooySalary < 300) {
    newSalary = (emplooySalary * (20 / 100)) + emplooySalary
}
if (emplooySalary >= 300 && emplooySalary < 600) {
    newSalary = (emplooySalary * (15 / 100)) + emplooySalary
}
if (emplooySalary >= 600) {
    newSalary = (emplooySalary * (10 / 100)) + emplooySalary
}
countNewSalary = newSalary + countNewSalary
countEmplooySalary = emplooySalary + countEmplooySalary

console.log(`Name: ${emplooyName};
Salario do funcionario: ${emplooySalary}; 
Salario reajustado: ${newSalary}`);}
if (countNewSalary < countEmplooySalary) {
    var calculationSalary = countEmplooySalary - countNewSalary
} else {
    var calculationSalary = countNewSalary - countEmplooySalary
}
console.log(`A soma dos salarios atuais e reajustados é : ${countEmplooySalary + countNewSalary};
A diferença entre eles é: ${calculationSalary}`);
console.log(`A media aritimetica é: ${countEmplooySalary / n}`);