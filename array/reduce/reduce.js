var assert = require('assert');

// reduce itera um array e retorna um objeto final
// de acordo com a logica implementada na função de callback

var exemplo = [1,2,3,4,5];
var total = exemplo.reduce(function (total, num) {
        return total + num;
}); // função para somar todos os membros do array

var exemplo2 = [1,2,3,4];
var total1 = exemplo2.reduce((total, num) => total + num, 0); // arrow function para somar todos os membros do array

try{
    assert.equal(15, total);
    assert.equal(10, total1);
}catch (e) {
    console.log(e);
}