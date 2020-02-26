var assert = require('assert')

// o metódo replace serve para substituir um pedaço de uma String por outro pedaço
// nesse método devem ser passados dois parametros onde
// o primeiro é o pedaço da String que você deseja substituir
// e o segundo é a String que vai substituir o primeiro parametro

exemplo = "ricardo Carvalho Santos";
resultado1 = exemplo.replace("ricardo", "Ricardo");

exemplo = "ricardo Carvalho Santos, ricardo";
resultado2 = exemplo.replace("ricardo", "Ricardo");

exemplo = "ricardo Carvalho Santos, ricardo";
resultado3 = exemplo.replace(/ricardo/g, "Ricardo");

exemplo = "CoRONavirus Carvalho Santos, CORONAvirus";
resultado4 = exemplo.replace(/coronavirus/gi, "Ricardo");

try{
    assert.equal("Ricardo Carvalho Santos",resultado1);
    assert.equal("Ricardo Carvalho Santos, ricardo",resultado2);
    assert.equal("Ricardo Carvalho Santos, Ricardo",resultado3);
    assert.equal("Ricardo Carvalho Santos, Ricardo",resultado4);
}catch(e){
    console.log(e);
}