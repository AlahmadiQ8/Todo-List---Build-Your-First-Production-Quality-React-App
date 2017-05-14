import React from 'react';

const TodoForm = ({ handleSubmit }) => {

  let input = null;

  return (
  <form onSubmit={e => handleSubmit({e, input})}>
    <input type="text"
           ref={node => input = node}
           className="form-control"
            />
  </form>
  );
};

TodoForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
}

export { TodoForm };