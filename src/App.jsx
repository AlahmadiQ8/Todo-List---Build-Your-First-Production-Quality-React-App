import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers.jsx';


import { TodoForm, TodoList } from './components/todo';

class App extends Component {

  state = {
    todos: [
      {id: 1, name: 'Building cool app', isComplete: true},
      {id: 2, name: 'Don\'t waste time', isComplete: false},
      {id: 3, name: 'OMG I love this', isComplete: false},
    ],
    currentTodo: ''
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-sm-4 text-left">
            {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
            <TodoForm currentTodo={this.state.currentTodo} 
                      handleInputChange={this.handleInputChange} 
                      handleSubmit={submitHandler}
                      />
            <TodoList 
              todos={this.state.todos}
              handleToggle={this.handleToggle}/>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
