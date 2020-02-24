var assert = require('assert');

const vet1 = ["João", "da", "Silva", "Oliveira"]
stringExemplo = "João da Silva Oliveira";
resultado1 = stringExemplo.split(" ");
  
var vet2 = ["J", "o", "ã", "o"]
stringExemplo = "João";
resultado2 = stringExemplo.split("");
  
var vet3 = ["João", "da", "Silva"]
stringExemplo = "João da Silva Oliveira";
resultado3 = stringExemplo.split(" ", 3);
  
var vet4 = ["usuario", "gmail.com"]
stringExemplo = "usuario@gmail.com";
resultado4 = stringExemplo.split("@");
  
// var vet5 = ["Os ", " números"]
// stringExemplo = " Os 8000 números";
// resultado5 = stringExemplo.split(/\d+/); 
  
var vet6 = ["exemplo", "com", "dados", "no", "formato", "csv"]
conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado6 = conteudoCSV.split(/\s*;\s*/);


try{
    assert.deepEqual(vet1, resultado1)
    assert.deepEqual(vet2, resultado2)
    assert.deepEqual(vet3, resultado3)
    assert.deepEqual(vet4, resultado4)
    // assert.deepEqual(vet5, resultado5)
    assert.deepEqual(vet6, resultado6)
}catch(e){
    console.log(e);
}