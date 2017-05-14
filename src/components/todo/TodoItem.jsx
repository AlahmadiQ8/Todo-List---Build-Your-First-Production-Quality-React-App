import React from 'react';
// import {partial} from '../../lib/utils'

export const TodoItem = ({ handleToggle, handleRemove, ...todo }) => {
  return (
  <div className='clearfix item'>
    <div className='float-left'>
      <input type="checkbox"
             className="form-check-input"
             onChange={handleToggle}
             checked={todo.isComplete}
      />
      {todo.name}
    </div>
    <div className='float-right'>
      <a
        onClick={handleRemove}
        href="#"
        className="btn btn-outline-danger btn-sm remove">
        remove
      </a>
    </div>
  </div>
)}

TodoItem.propTypes = {
  handleToggle: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}