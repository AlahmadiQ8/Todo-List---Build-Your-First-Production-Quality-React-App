import React from 'react';
import { connect } from 'react-redux'

import { addTodo, updateErrorMessage, createTodo } from '../../actions';
import { TodoForm } from './TodoForm.jsx';

let TodoFormContainer = ({ dispatch }) => {

  const handleSubmit = ({ e, input }) => {
    e.preventDefault();
    dispatch(updateErrorMessage(''));
    const todoText = input.value;
    if (todoText) {
      const action = addTodo(todoText);
      const todo = action.todo;
      dispatch(action);
      dispatch(createTodo(todo));
    } else {
      dispatch(updateErrorMessage('Input cannot be empty'));
    }
    input.value = '';
  }

  return (<TodoForm
           handleSubmit={handleSubmit} />);
}

TodoFormContainer = connect(
  null,
  (dispatch, ownProps) => ({
    dispatch,
    createTodo: (todo) => createTodo(todo),
  })
)(TodoFormContainer);

export { TodoFormContainer };