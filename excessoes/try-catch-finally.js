var assert = require('assert');

var teste = 10;

/* aqui o try catch vai passar e não gerará uma excessão */

try{ // esse bloco vai tentar executar e detectar uma possivel excessão
    assert.equal(10, teste); // testando um bloco que não vai gerar uma execessão
}catch(e){
    console.log(e);//esse bloco será executado somente se o try gerar uma execessão
}


/* aqui o try catch não vai passar e ira gerar uma excessão no catch */

try{ // esse bloco vai tentar executar e detectar uma possivel excessão
    assert.equal(11, teste); // testando um bloco que não vai gerar uma execessão
}catch(e){
    console.log(e);//esse bloco será executado somente se o try gerar uma execessão
}

/* o comando finally executa independete de se ter gerado uma excessaõ ou não */

try{ // tenta executar o codigo
    assert.equal(10, teste); // o codigo é executado sem execessões
}catch (e) {
    console.log(e);
}finally { // o finally é semrpre executado!
    console.log("o finally é executado independente do try catch");
}