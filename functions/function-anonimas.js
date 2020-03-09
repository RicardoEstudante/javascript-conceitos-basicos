const assert = require('assert');

// função anônima, função que não tem nome, guardada em uma variavel
// variavel recebe a função, não declara o nome da função, o retorno da função é guardado dentro da variavel
let variavelRecebeFuncao = function (x,y) { //
    return x + y;
};



try{
    assert.deepEqual(4, variavelRecebeFuncao(2,2));
}catch (e) {
    console.log(e);
}