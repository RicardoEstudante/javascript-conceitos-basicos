document.getElementById();             // seleciona um elemento pela ID             (retorna um único elemento pois o cada ID é único)
document.getElementsByClassName();     // seleciona um elemento pela class          (retorna um vetor de elementos pois pode existir mais de uma tag com determinada classe)
document.getElementsByTagName();       // seleciona todos os elementos pela tag     (retorna um vetor de elementos pois pode existir diversas tags iguais)
document.getElementsByTagName()[0];    // seleciona o primeiro elemento pela tag
document.getElementsByName();          // seleciona um elemento pelo name           (retorna um vetor de elementos pois pode existir mais de um elementos com o mesmo name)
document.querySelectorAll();           // seleciona todos os elementos pelo seletor (retorna um vetor de elementos)
document.querySelector('div#nome input');      // seleciona um elemento pelo seletor passado (retorna somente um elemento)
document.querySelector('input[name=nome]');         // seleciona um elemento pelo seletor passado (retorna somente um elemento)

document.createElement('a'); // criando elemento (link) no html pelo JS
document.removeChild('input'); // removendo elemento do html pelo JS