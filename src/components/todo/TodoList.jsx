import React, { Component } from 'react';

import { TodoItem } from './TodoItem.jsx';

export const TodoList = (props) => (
  <div className="Todo-List">
      {props.todos.map(todo =>
        <TodoItem
          key={todo.id}
          handleToggle={props.handleToggle}
          handleRemove={props.handleRemove}
          {...todo}/>
      )}
  </div>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}