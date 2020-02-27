var assert = require('assert');

var valor1 = Math.abs(12,34); // valor absoluto de um número
var valor2 = Math.abs(-12); // se for negativo vira positivo
var valor3 = Math.ceil(13,9) // arredonta um número para baixo
var valor4 = Math.floor(13,1) // arredonta um número para baixo
var valor5 = Math.round(13,9)// arredonda um número para baixo
var valor6 = Math.min(3,10); // retorna o menor valor entre dois números
var valor7 = Math.max(3,10)// retorna o maior entre os dois números passados
var valor8 = Math.pow(2,3); // retorna um número elevado a o segundo número
var valor9 = Math.sqrt(100); // retorna a raiz quadrada de um número
var valor14 = Math.random(); // retorna um número aleatorio entre 0/1

try{
    assert.equal(12 , valor1);
    assert.equal(12 , valor2);
    assert.equal(13 , valor3);
    assert.equal(13 , valor4);
    assert.equal(13 , valor5)
    assert.equal(3  , valor6);
    assert.equal(10 , valor7);
    assert.equal(8  , valor8);
    assert.equal(10 , valor9);

}catch (e) {
    console(e);
}