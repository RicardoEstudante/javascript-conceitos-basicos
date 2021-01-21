var assert = require('assert');

// slice é um método que serve para fatiar uma String ou Array
// esse método aceita dois parâmetros (índiceInicial / índiceFinal);


var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado = nome.slice(4);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado1 = nome.slice(4, 6);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado2 = nome.slice(4, nome.length);

var nome = ["Ricardo", "Carvalho", "Santos", "da", "Silva", "Souza"]
var resultado3 = nome.slice(4, nome.length-1);

var nomeString = "Ricardo, Carvalho, Santos";
var resultado4 = nomeString.slice(9)

try{
    assert.deepEqual(["Silva", "Souza"], resultado)
    assert.deepEqual(["Silva", "Souza"], resultado1)
    assert.deepEqual(["Silva", "Souza"], resultado2)
    assert.deepEqual(["Silva"],          resultado3)
    assert.deepEqual("Carvalho, Santos",          resultado4)
}catch (e) {
    console.log(e)
}

