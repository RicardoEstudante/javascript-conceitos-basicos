var assert = require('assert');

var nome = "Ricardo";
var resultado = nome.length;

var nome = ["Ricardo", "Carvalho", "Santos"];
var resultado1 = nome.length;

var nome = ["Ricardo", "Carvalho", "Santos"];
var resultado2 = nome.length-1;

var senha = "123456789";
var senhaValida = false;

if (senha.length > 8){
    senhaValida = true;
}

try{
    assert.equal(7,resultado);
    assert.equal(3,resultado1);
    assert.equal(2, resultado2);
    assert.equal(true, senhaValida);
}catch (e) {
    console.log(e)
}