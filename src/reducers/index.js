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

const updateTodo = (list, todo) => {
  const updatedIndex = list.findIndex(item => item.id === todo.id)
  return [
    ...list.slice(0, updatedIndex),
    todo,
    ...list.slice(updatedIndex+1)
  ]
}

/**
 * todos state
**/
export const todos = (state = {isFetching: false, items: []}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return { ...state, items: [...state.items, action.todo] };
    case 'TOGGLE_TODO':
      return { ...state, items: state.items.map(t => toggleTodo(t, action.id)) };
    case 'REMOVE_TODO':
      return { ...state, items: removeTodo(state.items, action.id) };
    case 'UPDATE_TODO':
      return { ...state, items: updateTodo(state.items, action.todo) };
    case 'RECEIVE_TODOS':
    case 'SET_TODOS':
      return {
        isFetching: false,
        items: action.todos,
      };
    case 'REQUEST_TODOS':
      return { ...state, isFetching: true };
    default:
      return state;
  }
}

/**
 * visibilityFilter state
**/
export const visibilityFilter =(state = '', action) => {
  switch(action.type) {
    case 'UPDATE_VISIBILITY':
      return action.filter;
    default:
      return state;
  }
}


/**
 * errorMessage state
**/
export const errorMessage =(state = '', action) => {
  switch(action.type) {
    case 'UPDATE_ERROR':
      return action.msg;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  visibilityFilter,
  errorMessage
})