
// a palavra chave extends é usada para permitir a herança
// uma classe pode herdar todos atributos e métodos de outra class

class List {
    constructor() {
        this.data = []
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.user = "ricardo";
    }
    showUser(){
        console.log(this.user);
    }
}

var MinhaLista = new TodoList();

minhaLista.add('new todo');
