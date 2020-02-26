var assert = require('assert');
// - tipo especial de objeto
// - conjunto ordenado de valores numerados por um indice (começa em 0);

var array = new Array();

array[0] = "primeiro indice";
array[1] = "segundo indice";
array[2] = "terceiro indice";

var resultado = array.length; //Deve retornar o valor 3! (numero do maior indice +1);

var array2 = ["0", "1", "3", "4"];
var resultado1 = array2.length; //deve retornar 4;

var array3 = [1,2,3];
array3.push(4); // push adiciona no final do array

var array4 = [1,2,3,4];
array4.pop(); // retira do final

var array5 = [1,2,3,4];
array5.unshift(0); //adiciona no começo do array

var array6 = [1,2,3,4];
array6.shift(); // remove do começo do array

var array7 = [2,3];
array7.unshift(0, 1);



try{
    assert.equal(3, resultado);
    assert.equal(4, resultado1);
    assert.deepEqual([1,2,3,4], array3);
    assert.deepEqual([1,2,3], array4);
    assert.deepEqual([0,1,2,3,4], array5);
    assert.deepEqual([2,3,4], array6);
    assert.deepEqual([0,1,2,3], array7);

}catch (e) {
    console.log(e);
}






