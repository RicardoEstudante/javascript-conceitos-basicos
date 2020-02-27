

var data = new Date(); // instanciando o objeto data

data.getTime(); // milissegundos desde 1900
data.getDate(); // retorna o dia atual do mes
data.getDay(); // retorna o dia atual da semana
data.getFullYear(); // retorna o ano inteiro
data.getMinutes(); // retorna os minutos
data.getSeconds(); // retorna os segundos
data.getHours(); //retorna a hora
data.getMonth(); // retorna o mes -1 (a contagem começa em 0)


const datas = new Date('Thu')       // instanciando um objeto Date e passando uma data
datas instanceof Date && !isNaN(datas);   // verificando se a data passada na instançia é valida

