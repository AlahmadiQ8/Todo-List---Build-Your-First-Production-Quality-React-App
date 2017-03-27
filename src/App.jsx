import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers.jsx';
import { TodoForm, TodoList, Footer } from './components/todo';
import {pipe, partial} from './lib/utils';

class App extends Component {

  state = {
    todos: [
      {id: 1, name: 'Building cool app', isComplete: true},
      {id: 2, name: 'Don\'t waste time', isComplete: false},
      {id: 3, name: 'OMG I love this', isComplete: false},
    ],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({todos: updatedTodos});
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
