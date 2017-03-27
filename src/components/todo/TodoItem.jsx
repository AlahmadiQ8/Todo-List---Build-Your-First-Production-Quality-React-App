import React from 'react';
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return (
  <div className='clearfix item'>
    <div className='float-left'>
      <input type="checkbox" 
             className="form-check-input"
             onChange={handleToggle}
             checked={props.isComplete}
      />
      {props.name}
    </div>
    <div className='float-right'>
      <a onClick={handleRemove} href="#" className="btn btn-outline-danger btn-sm remove">remove</a>
    </div>
  </div>
)}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired, 
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}