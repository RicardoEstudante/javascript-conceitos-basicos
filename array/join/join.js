const assert = require('assert');

// join junta os membros do array, excluindo os espaços, sendo separados apenas pelo separador
//

let vetor1 = [ 'R', 'i', 'c', 'a', 'r', 'd', 'o'];
let vetor2 = [ 'R', 'i', 'c', 'a', 'r', 'd', 'o'];
let vetor3 = [ 'Ricardo', 'Carvalho', 'Santos'];

var teste1 = vetor1.join(''); // junta todos os membros sem separador
var teste2 = vetor2.join('-'); // junta todos, inserindo um - entre cada um
var teste3 = vetor3.join(); // junta todos separando apenas pela virgula

try{
    assert.deepEqual("Ricardo", teste1);
    assert.deepEqual("R-i-c-a-r-d-o", teste2);
   assert.deepEqual("Ricardo,Carvalho,Santos", teste3);
}catch(e){
    console.log(e);
}