import { combineReducers } from 'redux'

const toggleTodo = (t, id) => {
  if (t.id !== id) {
    return t;
  }

  return {
    ...t,
    isComplete: !t.isComplete
  }
}

const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}

export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'TOGGLE_TODO':
      return state.map(t => toggleTodo(t, action.id));
    case 'REMOVE_TODO':
      return removeTodo(state, action.id);
    default:
      return state;
  }
}

export const currentTodo = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT':
      return action.message;
    default:
      return state;
  }
}

export const errorMessage =(state = '', action) => {
  switch(action.type) {
    case 'UPDATE_ERROR':
      return action.message;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  currentTodo,
  errorMessage
})