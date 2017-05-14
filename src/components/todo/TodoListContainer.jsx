import React, { Component } from 'react';
import { connect } from 'react-redux'

import { TodoList } from './TodoList.jsx';
import { removeTodo, toggleTodo, updateVisibilityFilter } from '../../actions';


const mapStateToTodoListProps = (state, ownProps) => {
  switch (state.visibilityFilter) {
    case 'ACTIVE':
      return { todos: state.todos.filter(item => !item.isComplete) };
    case 'COMPLETE':
      return { todos: state.todos.filter(item => item.isComplete) };
    default:
      return { todos: state.todos };
  }
};

const mapDispatchToTodoListProps = (dispatch, ownProps) => (
  {
    handleToggle: (id) => dispatch(toggleTodo(id)),
    handleRemove: (id) => dispatch(removeTodo(id)),
  }
)

const TodoListContainer = connect(
  mapStateToTodoListProps, mapDispatchToTodoListProps
  )(TodoList);

export { TodoListContainer };