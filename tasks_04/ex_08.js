var array = [1, 3, 5]
var target = 4

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            console.log(`Posiçao ${i} + Posiçao ${j} = ${target}`);
        }
    }
}