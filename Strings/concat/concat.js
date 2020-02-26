var assert = require('assert');

//concat é um método que server para concatenar Strings
//esse método aceita diversos parametros, para serem concatenados,
//onde cada parametro vai sendo adicionado ao fim do array/objeto

var nome = "Ricardo";
var sobreNome = " Carvalho Santos";
var resultado = nome.concat(sobreNome);

var exemplo = [1,2,3];
var resultado1 = exemplo.concat([4,5,6]);

var exemplo2 = [1,2,3];
var object = {atributo: 4};
var resultado2 = exemplo2.concat(object);

try{
    assert.equal("Ricardo Carvalho Santos", resultado);
    assert.deepEqual([1,2,3,4,5,6], resultado1);
    assert.deepEqual([1,2,3,{atributo: 4}], resultado2);

}catch(e){
    console.log(e)
}