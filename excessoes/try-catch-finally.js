var assert = require('assert');

var teste = 10;

/* aqui o try catch vai passar e não gerará uma exceção */

try{ // esse bloco vai tentar executar e detectar uma possível exceção
    assert.equal(10, teste); // testando um bloco que não vai gerar uma exceção
}catch(e){
    console.log(e);//esse bloco será executado somente se o try gerar uma exceção
}


/* aqui o try catch não vai passar e ira gerar uma exceção no catch */

try{ // esse bloco vai tentar executar e detectar uma possível exceção
    assert.equal(11, teste); // testando um bloco que não vai gerar uma exceção
}catch(e){
    console.log(e);//esse bloco será executado somente se o try gerar uma exceção
}

/* o comando finally executa independente de se ter gerado uma exceção ou não */

try{ // tenta executar o código
    assert.equal(10, teste); // o código é executado sem exceções
}catch (e) {
    console.log(e);
}finally { // o finally é sempre executado!
    console.log("o finally é executado independente do try catch");
}