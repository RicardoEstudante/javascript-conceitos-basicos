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
var  condicao = 1;

switch (condicao) {
    case 0:

        continue; // a execução não vai passar por aqui pois a condição é diferente da case
    case 1:

    case 2:
}