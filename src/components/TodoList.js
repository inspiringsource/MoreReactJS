import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

// Todo (MVC)
// 1. add todo ✓
// 2. display todos ✓
// 3. cross off todo ✓
// 4. show number of active todos
// 5. filter all/active/complete
// 6. delete todo
// 7. delete all complete
//   7.1 only show if atleast one is complete
// 8. button to toggle all on/off

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: 'all',
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        } else {
          return todo
        }
      }),
    })
  }

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    })
  }

  render() {
    let todos = []

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter((todo) => !todo.complete)
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter((todo) => todo.complete)
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todo left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow('all')}>all</button>
          <button onClick={() => this.updateTodoToShow('active')}>active</button>
          <button onClick={() => this.updateTodoToShow('complete')}>complete</button>
        </div>

      </div>
    )
  }
}
