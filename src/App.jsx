import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers.jsx';
import { TodoForm, TodoList, Footer } from './components/todo';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService';

class App extends Component {

  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
    destroyTodo(id)
      .then(() => this.showTempMethod('Todo Removed'))
  }

  handleToggle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({todos: updatedTodos});
    saveTodo(updated)
      .then(() => this.showTempMethod('todo updated'))
  }

  handleInputChange = e => this.setState({currentTodo: e.target.value})

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('testing');
    const newTodo = {
      name: this.state.currentTodo, 
      isComplete: false, 
      id: generateId()
    }
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
    createTodo(newTodo)
      .then(() => this.showTempMethod('Todo added'))
  }

  showTempMethod = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  render() {
    const submitHandler = this.state.currentTodo.trim() ? this.handleSubmit : this.handleEmptySubmit
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-sm-5 text-left">
            {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <TodoForm currentTodo={this.state.currentTodo} 
                      handleInputChange={this.handleInputChange} 
                      handleSubmit={submitHandler}
                      />
            <TodoList 
              todos={displayTodos}
              handleToggle={this.handleToggle}
              handleRemove={this.handleRemove}
              />
          <Footer/>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
