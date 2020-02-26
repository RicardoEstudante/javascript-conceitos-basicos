var assert = require('assert');

var exemplo = "Ricardo Carvalho Santos";
var resultado1 = exemplo.indexOf("Ricardo");
var resultado2 = exemplo.indexOf("Carvalho" , 7);
var resultado3 = exemplo.indexOf("C" ,-8);
var resultado4 = exemplo.indexOf("carvalho");

let nomeCorreto = false; 



if(exemplo.indexOf(" ") == 7 && exemplo.indexOf(" ", 8) == 16){
nomeCorreto = true;
}

try{
    assert.equal(0, resultado1);
    assert.equal(8, resultado2);
    assert.equal(8, resultado3);
    assert.equal(-1, resultado4);
    assert.equal(true, nomeCorreto);
}catch(e){
    console.log(e);
}