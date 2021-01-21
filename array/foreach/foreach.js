
// forEach permite executar uma determinada função para cada item de um array
//  diferente do map o forEach não cria um novo array, somente percorre o array passado


let array = [1,2,3];

 function multi(item){
    console.log( item * 2);
}

array.forEach(multi);


