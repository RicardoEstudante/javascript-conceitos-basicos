var assert = require('assert');

// a função map nos permite percorrer um array e retornar um novo array
// cujos itens são o resultado de uma função de callback
// que recebe como parâmetro cada item do array original


var teste = [1,2,3];
var dobro = teste.map(function (item) {
        return item * 2;
});

var teste2 = [1,2,3];
var dobro2 = teste2.map(function (item) {
        return Math.pow(item, 2);
});

try{
    assert.deepEqual([2,4,6], dobro)
    assert.deepEqual([1,4,9], dobro2)
}catch (e) {
    console.log(e)
}