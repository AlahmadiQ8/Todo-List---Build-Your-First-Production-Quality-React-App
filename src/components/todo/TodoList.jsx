import React, { Component } from 'react';

import { TodoItem } from './TodoItem.jsx';

export const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <div className="Todo-List">
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          handleToggle={e => handleToggle(todo.id)}
          handleRemove={e => handleRemove(todo.id)}
          {...todo}/>
      )}
  </div>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}