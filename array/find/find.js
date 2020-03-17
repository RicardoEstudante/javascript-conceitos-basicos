const assert = require('assert');

// find procura um valor dentro de um array
// se o valor é encontra ele retorna o mesmo
// se não for encotrado retonar undefined

var arr = [2,3,5,6,7,8,10];

const find = arr.find(function(item){
    return item === 5;
});

try{
    assert.deepEqual(5, find);
}catch(e){
    console.log(e);
}