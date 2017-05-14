const generateId = () => Math.floor(Math.random()*100000);

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

