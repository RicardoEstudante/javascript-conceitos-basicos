const assert = require('assert');

function soma(a = 2,b = 2) {
    return a + b;
}



try {
    assert.deepEqual(4, soma())
} catch (error) {
    console.log(error);
}
