parasails.registerPage('todosPage', {
  data: {
    todos: [],
    idCount: 0
  },

  methods: {
    addTodo: function (todo) {
      this.todos.push({
        id: this.idCount,
        title: todo,
        completed: false,
      });
      this.idCount++;
    },
    toggleTodo: function(id) {
      // this.todos[id].completed = !this.todos[id].completed;

      this.todos = this.todos.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          completed: todo.id === id ? !todo.completed : todo.completed,
        }
      })
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      })
    }
  },
});
