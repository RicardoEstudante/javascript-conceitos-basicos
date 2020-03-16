// a palavra reservada class permite a criação de objetos com caracteristicas proprias
// tambem conhecidos de classes

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push(1);
        console.log(this.todos);
    }
}

const minhaLista = new TodoList();

minhaLista.addTodo(1);
