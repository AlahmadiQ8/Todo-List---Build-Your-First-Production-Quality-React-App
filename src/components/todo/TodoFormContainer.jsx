import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addTodo, updateErrorMessage } from '../../actions';
import { TodoForm } from './TodoForm.jsx';

let TodoFormContainer = ({ dispatch }) => {

  const handleSubmit = ({ e, input }) => {
    e.preventDefault();
    dispatch(updateErrorMessage(''));
    const todoText = input.value;
    (todoText)
    ? dispatch(addTodo(todoText))
    : dispatch(updateErrorMessage('Input cannot be empty'));
    input.value = '';
  }

  return (<TodoForm
           handleSubmit={handleSubmit} />);
}

TodoFormContainer = connect()(TodoFormContainer);

export { TodoFormContainer };