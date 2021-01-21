/*
valores que são validados como falso

* -> false
* -> undefined
* -> null
* -> 0
* -> NaN
* -> string vazia("")
 */


/* usando um único if  */
var condition = true;
if(condition){
    //executa esse código caso a expressão seja true
}

/* usando if e else  */
var condition = false;
if (condition){
    //executa esse bloco caso a expressão seja true
}else {
    //executa esse bloco caso a expressão seja false
}

/*usando if, else if e else */
var condition = 1;
if(condition == 0){
    //executa esse bloco caso a primeira expressão retorne true
}else if(condition == 1){
    //executa esse bloco caso a segunda expressão retorne true
}else{
    //executa esse bloco caso todas as expressões retornem falso
}


