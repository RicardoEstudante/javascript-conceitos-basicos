

/*
* break é usado para terminar laços, ou conjuntos de labels
*
* quando o break é utilizado com uma label, ele encerra a label
*
* quando o break é usado sem uma label, ele encerra o bloco de codigo mais interno que
* ele está contido (while, do-while, for, switch) ou transfere o controle para a proxima instrução
 */
var teste = 1;

switch (teste) {
    case 0:
        console.log("esse bloco não vai ser executado");
        break;  // a execução não passa por aqui pois o teste é diferente do case;
    case 1:
        console.log("esse bloco vai ser executado");
                //a execução vai passar por aqui e continuar pois não existe um break
    case 2:
        console.log("esse codigo tambem vai ser executado");
        break;  //a execução vai passar por aqui e vai encerrar o switch, pois o break encerra a instrução

    case 3:
        console.log("esse codigo tbm não vai ser executado");
                 //a execução não passa aqui pois o teste é diferente da case, e no caminho foi encontrado um break acima;
}
