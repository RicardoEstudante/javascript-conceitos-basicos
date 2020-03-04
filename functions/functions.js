const assert = require('assert');

// funções são blocos de codigos designados para executar uma determinada ação

var x = 0, y = 0;

// função sem parametros
function semParametro() {
    let retornoDafuncao = "Retornando uma string";
    return retornoDafuncao;
}

// função passando um unico parametro
function multiplicandoValorParametro(x) {
        return x * 2;
}

// função passando dois parametros
function somaDoisNumeros(x, y) { //declarando o nome da função e passando dois parametros
    return x + y;  //função retornando a soma dos parametros passados!
}
