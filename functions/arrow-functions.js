const assert = require('assert');

// arrow functions é uma sintaxe mais simples das funções anônimas;

// arrow function sem parâmetro
arrowFunction1 = () => {
    return "Hello!";
}

// arrow function com parâmetro
arrowFunction = (x, y) => {
    return x * y;
};

// arrow function retornando uma valor por default
arrowFunc = () => "Hello";

// arrow functions sem parenteses
teste = vari => "world";

let resultado = arrowFunction(5, 10);
resultado2 = arrowFunc();
try{
    assert.deepEqual("Hello!", arrowFunct());
    assert.deepEqual(50, resultado);
    assert.deepEqual("Hello", resultado2);
    assert.deepEqual("world", teste());
}catch (e) {
    console.log(e);
}