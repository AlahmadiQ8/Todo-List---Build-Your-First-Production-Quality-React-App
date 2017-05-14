const generateId = () => Math.floor(Math.random()*100000);
const baseUrl = 'http://localhost:8080/todos';

export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  todo: {
    name: text,
    isComplete: false,
    id: generateId(),
  },
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const updateTodo = todo => ({ type: 'UPDATE_TODO', todo });
export const updateErrorMessage = msg => ({ type: 'UPDATE_ERROR', msg });
export const updateVisibilityFilter = filter => ({ type: 'UPDATE_VISIBILITY', filter });


export const loadTodos = () => dispatch => {
  return fetch(baseUrl)
    .then(res => res.json())
    .then(todos => dispatch({ type: 'SET_TODOS', todos }))
    .catch(err => dispatch(updateErrorMessage(err.message)));
};

export const createTodo = (todo) => dispatch => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json)
  .catch(err => dispatch(updateErrorMessage(err.message)));
}
