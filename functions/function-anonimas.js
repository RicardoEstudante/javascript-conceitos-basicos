const assert = require('assert');

// função anônima, função que não tem nome, guardada em uma variável
// variável recebe a função, não declara o nome da função, o retorno da função é guardado dentro da variável
let recebeFunction = function (x,y) { //
    return x + y;
};



try{
    assert.deepEqual(4, recebeFunction(2,2));
}catch (e) {
    console.log(e);
}