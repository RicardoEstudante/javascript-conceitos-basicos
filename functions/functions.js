const assert = require('assert');

// funções são blocos de códigos designados para executar uma determinada ação

var x = 0, y = 0;

// função sem parâmetros
function semParametro() {
    let retornoDafuncao = "Retornando uma string";
    return retornoDafuncao;
}

// função passando um único parâmetro
function multiplicandoValorParametro(x) {
        return x * 2;
}

// função passando dois parâmetros
function somaDoisNumeros(x, y) { //declarando o nome da função e passando dois parâmetros
    return x + y;  //função retornando a soma dos parâmetros passados!
}
