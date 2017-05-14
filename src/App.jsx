import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { TodoFormContainer, TodoListContainer, Footer } from './components/todo';

class App extends Component {

  static contextTypes = {
    route: React.PropTypes.string
  }

  render() {
    return (
      <div className="App">
        <div className="App-header d-flex flex-column justify-content-center">
          <h2>Todo App</h2>
          <h3>with React/Redux & Server Fetching</h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-5 text-left">
            {this.props.errorMessage && <div className="alert alert-absolute alert-danger">{this.props.errorMessage}</div>}
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
