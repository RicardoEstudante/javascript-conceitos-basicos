var assert = require('assert');

// slice é um método que serve para fatiar uma String ou Array
// esse método aceita dois parametros (indiceInicial / indicefinal);


var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado = nome.slice(4);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado1 = nome.slice(4, 6);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado2 = nome.slice(4, nome.length);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado3 = nome.slice(4, nome.length-1);


try{
    assert.deepEqual(["Silva", "Souza"], resultado)
    assert.deepEqual(["Silva", "Souza"], resultado1)
    assert.deepEqual(["Silva", "Souza"], resultado2)
    assert.deepEqual(["Silva"],          resultado3)
}catch (e) {
    console.log(e)
}

