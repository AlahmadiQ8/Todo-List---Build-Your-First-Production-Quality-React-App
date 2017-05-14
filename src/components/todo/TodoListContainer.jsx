import React, { Component } from 'react';
import { connect } from 'react-redux'

import { TodoList } from './TodoList.jsx';
import { removeTodo, toggleTodo, updateVisibilityFilter, loadTodos, updateErrorMessage } from '../../actions';

class TodoListContainer extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <TodoList {...this.props} />
    );
  }
}

const mapStateToTodoListProps = (state, ownProps) => {
  switch (state.visibilityFilter) {
    case 'ACTIVE':
      return { todos: state.todos.items.filter(item => !item.isComplete) };
    case 'COMPLETE':
      return { todos: state.todos.items.filter(item => item.isComplete) };
    default:
      return { todos: state.todos.items };
  }
};

const mapDispatchToTodoListProps = (dispatch, ownProps) => (
  {
    fetchTodos: () => dispatch(loadTodos()),
    handleToggle: (id) => dispatch(toggleTodo(id)),
    handleRemove: (id) => dispatch(removeTodo(id)),
  }
)

TodoListContainer = connect(
  mapStateToTodoListProps, mapDispatchToTodoListProps
  )(TodoListContainer);

export { TodoListContainer };