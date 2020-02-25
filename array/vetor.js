// - tipo especial de objeto
// - conjunto ordenado de valores numerados por um indice (começa em 0);

var array = new Array();

array[0] = "primeiro indice";
array[1] = "segundo indice";
array[2] = "terceiro indice";

console.log(array.length); //Deve retornar o valor 3! (numero do maior indice +1);

var array2 = ["0", "1", "3", "4"];
console.log(array2.length); //deve retornar 4;

// adicionando e removendo no array
var addUlt = array2.push("5");
var removeUlt = array2.pop();
var addCome = array2.unshift("0");
var removeCome = array2.shift();
var removeItem = array2.shift(pos, 1);




