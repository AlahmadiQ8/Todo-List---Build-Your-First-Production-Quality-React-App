import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { TodoFormContainer, TodoListContainer, Footer } from './components/todo';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService';

class App extends Component {

  static contextTypes = {
    route: React.PropTypes.string
  }

          // loadTodos()
          //   .then(todos => this.setState({todos}))

          // destroyTodo(id)
          //   .then(() => this.showTempMethod('Todo Removed'))

          // saveTodo(updated)
          //   .then(() => this.showTempMethod('todo updated'))

          // createTodo(newTodo)
          //   .then(() => this.showTempMethod('Todo added'))

          // showTempMethod = (msg) => {
          //   this.setState({message: msg})
          //   setTimeout(() => this.setState({message: ''}), 2500)
          // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-5 text-left">
            {this.props.errorMessage && <div className="alert alert-absolute alert-danger">{this.props.errorMessage}</div>}
            {//this.state.message && <div className="alert alert-absolute alert-success">{this.state.message}</div>
              }
            <TodoFormContainer/>
            <TodoListContainer route={this.context.route}/>
          <Footer/>
          </div>
        </div>


      </div>
    );
  }
}

App = connect(
  state => ({errorMessage: state.errorMessage })
  , null)(App);

export default App;
