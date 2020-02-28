/*
valores que são validados como falso

* -> false
* -> undefided
* -> null
* -> 0
* -> NaN
* -> string vazia("")
 */

var numeroTestado = 2;

switch (numeroTestado) {
    case 0:
        //executa esse bloco caso condicao seja igual a case (condicao == 2 / case == 0)
        break; //instrucao para finalizar o switch caso entre nesse bloco
    case 1:
        //executa esse bloco caso condicao seja igual a case (condicao == 2 / case == 1)
        break; //instrucao para finalizar o switch caso entre nesse bloco
    case 2:
        //executa esse bloco caso condicao seja igual a case (condicao == 2 / case == 2)
        break; //instrucao para finalizar o switch caso entre nesse bloco

    default:
        //executa esse bloco caso a condicao não seja igual a nenhuma case
        break; //instrucao para finalizar o switch caso entre nesse bloco
}