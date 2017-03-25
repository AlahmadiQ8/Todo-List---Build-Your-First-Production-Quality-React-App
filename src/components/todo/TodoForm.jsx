import React, { Component } from 'react';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" 
           value={props.currentTodo}
           onChange={props.handleInputChange}
           className="form-control" 
           id="exampleInputEmail1" />
  </form>
);

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
}