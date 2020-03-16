const assert = require('assert');

// método estatico é um método que pode ser invoca sem ser instanciado,
// ou seja não é preciso usar a palavra chave new; 

class math{
    static soma(a,b){
        return a+b;
    }
}

try{
    assert.deepEqual(5, math.soma(2,3));
}catch(e){
    console.log(e);
}