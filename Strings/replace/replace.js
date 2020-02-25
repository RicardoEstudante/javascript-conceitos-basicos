var assert = require('assert')

// Valor retornado: “Curso de PHP na DevMedia!”
exemplo = "Curso de JavaScript na DevMedia!";
resultado1 = exemplo.replace("JavaScript", "PHP");
  
// Valor retornado: “Curso de PHP na DevMedia! JavaScript também.”
exemplo = "Curso de JavaScript na DevMedia! JavaScript também.";
resultado2 = exemplo.replace("JavaScript", "PHP");
  
// Valor retornado: “Estudando PHP! PHP é uma linguagem dinâmica”
exemplo = "Estudando JavaScript! JavaScript é uma linguagem dinâmica";
resultado3 = exemplo.replace(/JavaScript/g, "PHP"); 
  
// Valor retornado: “Aprendendo JavaScript. JavaScript é na DevMedia”
exemplo = "Aprendendo Javascript. JAVAScript é na DevMedia"; 
resultado4 = exemplo.replace(/javascript/gi, "JavaScript"); 
  
// Valor retornado: “texto 1 <i> texto 2 </i> texto 3 <i> texto 4 </i>”
stringExemplo = " texto 1 <b> texto 2 </b> texto 3 <b> texto 4 </b>";
stringExemplo = stringExemplo.replace(/<b>/g , "<i>");
resultado5 = stringExemplo.replace(/<\/b>/g, "</i>");
  
// Valor retornado: “Contrato no valor de R$ 1050. 
// Lucro de R$ 210 para a empresa.”
string = "Contrato no valor de R$ 1000. Lucro de R$ 200 para a empresa.";
resultado6 = string.replace(/\d+/g, function aplicarIndice(x){
x = x*1.05;
return Math.floor(x);});

try{
    assert.equal("Curso de PHP na DevMedia!",resultado1)
    assert.equal("Curso de PHP na DevMedia! JavaScript também.",resultado2)
    assert.equal("Estudando PHP! PHP é uma linguagem dinâmica",resultado3)
    assert.equal("Aprendendo JavaScript. JavaScript é na DevMedia",resultado4)
    
    assert.equal("texto 1 <i> texto 2 </i> texto 3 <i> texto 4 </i>",resultado5)
    // assert.equal("Curso de PHP na DevMedia!",resultado6)
}catch(e){
    console.log(e);
}