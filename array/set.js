
var teste = new Set(); // instancia um objeto do tipo Set

teste.add(1); // adicona um membro
teste.add(2);
teste.add("3"); // adiciona uma string
teste.clear(); // limpa todos os membros
teste.add({a:1,b:2}); // add por referencia de propriedades

var o = {a: 1, b: 2};  // criando um objeto
teste.add(o); // add o objeto criado no na instancia de set
; // limpa todos os membros

console.log(teste.has);

console.log(teste)



