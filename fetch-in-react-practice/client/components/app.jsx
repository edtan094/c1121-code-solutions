import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(res => res.json())
      .then(list => this.setState({ todos: list }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    const init = { method: 'POST', body: JSON.stringify(newTodo), headers: { 'Content-type': 'application/json' } };
    fetch('/api/todos', init)
      .then(res => res.json())
      .then(task => {
        const array = [];
        array.push(task);

        this.setState({ todos: this.state.todos.concat(array) });
      }
      )
      .catch(error => console.error(error));
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const init = { method: 'PATCH', headers: { 'Content-type': 'application/json' } };
    const listOfTasks = this.state.todos;
    const taskStatus = {};
    for (let i = 0; i < listOfTasks.length; i++) {
      if (todoId === listOfTasks[i].todoId) {
        if (listOfTasks[i].isCompleted === true) {
          taskStatus.isCompleted = false;
        } else {
          taskStatus.isCompleted = true;
        }
      }
    }
    init.body = JSON.stringify(taskStatus);
    fetch(`/api/todos/${todoId}`, init)
      .then(res => res.json())
      .then(update => {
        // console.log(update);
        for (let i = 0; i < listOfTasks.length; i++) {
          if (todoId === listOfTasks[i].todoId) {
            listOfTasks.slice(i, i + 1);
            listOfTasks[i].isCompleted = update;
            this.setState({ todos: listOfTasks });
          }
        }
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
