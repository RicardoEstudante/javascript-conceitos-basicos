var assert = require('assert');
/*
* continue é usado para reiniciar uma instrução (while, do-while, for, label)
*
* quando o continue é utilizado com uma label,
* ele é aplicado ao laço identificado com essa label
*
* quando o continue é usado sem uma label ele encerrara a iteração atual mais interna
* de uma instrução (while, do-while, for), porem ele continua a execução do laço
* apartir da proxima iteração (ao contrario do break, o continue não encerra a execução completa)
 */




for (let i = 0; i < 5; i++) { // declarando um for para iterar até o 9
    if (i >= 2 && i < 4){ // criando uma condição no qual a variavel i seja maior do que 1 e menor do que 4 (2,3)
        continue;  // pulando a iteração toda vez que atender a condição
    }
    console.log(i);
}