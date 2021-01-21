/*
valores que são validados como falso

* -> false
* -> undefined
* -> null
* -> 0
* -> NaN
* -> string vazia("")
 */

var numeroTestado = 2;

switch (numeroTestado) {
    case 0:
        //executa esse bloco caso condição seja igual a case (condição == 2 / case == 0)
        break; //instrução para finalizar o switch caso entre nesse bloco
    case 1:
        //executa esse bloco caso condição seja igual a case (condição == 2 / case == 1)
        break; //instrução para finalizar o switch caso entre nesse bloco
    case 2:
        //executa esse bloco caso condição seja igual a case (condição == 2 / case == 2)
        break; //instrução para finalizar o switch caso entre nesse bloco

    default:
        //executa esse bloco caso a condição não seja igual a nenhuma case
        break; //instrução para finalizar o switch caso entre nesse bloco
}