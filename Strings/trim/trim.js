var assert = require('assert');

// o método trim retiara todos os espaços no começo e no fim de uma String;
// esse método não aceita parametros, e o retorno é a nova String

var stringExemplo = " Ricardo    ";
var resultado = stringExemplo.trim();

var stringExemplo = " Ricardo, Carvalho    ";
var resultado2 = stringExemplo.trim();

var stringExemplo = "Ricardo, Carvalho    ";
var resultado3 = stringExemplo.trim();

try{
    assert.equal("Ricardo", resultado)
    assert.equal("Ricardo, Carvalho", resultado2)
    assert.equal("Ricardo, Carvalho", resultado3)
}catch (e) {
    console.log(e)
}
