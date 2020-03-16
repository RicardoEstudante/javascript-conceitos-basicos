var assert = require('assert');

// filter permite filtrar um array de acordo com uma condição passada
// sendo assim o filter só retornara os valores que atenderem determina condição

const arr = [1,2,3,4,5,6,7,8];

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

try{
    assert.deepEqual([2,4,6,8], filter)
}catch(e){
    console.log(e);
}