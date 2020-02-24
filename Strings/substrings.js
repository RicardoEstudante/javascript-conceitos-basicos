var assert = require('assert')

stringExemplo = "JavaScript é na DevMedia!";
resultado1 = stringExemplo.substring(16);

stringExemplo = "substring(): Aprenda a ultilizar na DevMedia!";
resultado2 = stringExemplo.substring(13, 32);

stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado3 = stringExemplo.substring(4, -5);

stringExemplo = "substring(): Aprenda a utilizar na DevMedia!";
resultado4 = stringExemplo.substring(4, 0);

htmlExemplo = "<b>Texto em destaque</b>";
resultado5 = htmlExemplo.substring(3, htmlExemplo.length - 4);

emailExemplo = "exemplo@devmedia.com.br";
resultado6 = emailExemplo.substring(emailExemplo.indexOf("@") + 1);
  
try{
    assert.equal("DevMedia!", resultado1);
    assert.equal("Aprenda a ultilizar", resultado2);
    assert.equal("subs", resultado3);
    assert.equal("subs", resultado4);
    assert.equal("Texto em destaque", resultado5);
    assert.equal("devmedia.com.br", resultado6);
}catch(e){
    console.log(e);
}
