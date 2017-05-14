import deepFreeze from 'deep-freeze';
import { todos } from '../reducers';

describe('todos', () => {

  it('adds todo', () => {
    const todosList = { isFetching: false, items: [] };
    const todo = {
      name: 'test',
      isComplete: false,
      id: 0
    }
    const todosAfter = { isFetching: false, items: [todo] };
    deepFreeze(todosList);
    const action = {type: 'ADD_TODO', todo}
    const result = todos(todosList, action);
    expect(result).toEqual(todosAfter);
  });

  it('toggles todo item', () => {
    const items = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'test1',
        isComplete: false,
        id: 1
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const itemsAfter = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'test1',
        isComplete: true,
        id: 1
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const todosList = { isFetching: false, items }
    const todosAfter = { isFetching: false, items: itemsAfter }
    deepFreeze(todosList);
    const action = {type: 'TOGGLE_TODO', id: 1}
    const result = todos(todosList, action);
    expect(result).toEqual(todosAfter);
  });

  it('remove todo item', () => {
    const items = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'test1',
        isComplete: false,
        id: 1
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const itemsAfter = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const todosList = { isFetching: false, items }
    const todosAfter = { isFetching: false, items: itemsAfter }
    deepFreeze(todosList);
    const action = {type: 'REMOVE_TODO', id: 1}
    const result = todos(todosList, action);
    expect(result).toEqual(todosAfter);
  })

  it('updates todo item', () => {
    const items = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'test1',
        isComplete: false,
        id: 1
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const itemsAfter = [
      {
        name: 'test',
        isComplete: false,
        id: 0
      },
      {
        name: 'updated',
        isComplete: true,
        id: 1
      },
      {
        name: 'test2',
        isComplete: false,
        id: 2
      },
    ];
    const todosList = { isFetching: false, items }
    const todosAfter = { isFetching: false, items: itemsAfter }
    deepFreeze(todosList);
    const action = {type: 'UPDATE_TODO', todo: { name: 'updated', isComplete: true, id: 1 } }
    const result = todos(todosList, action);
    expect(result).toEqual(todosAfter);
  });


  it('Set todos', () => {
    const itemsAfter = [
        {
          name: 'test',
          isComplete: false,
          id: 0
        },
        {
          name: 'updated',
          isComplete: true,
          id: 1
        },
        {
          name: 'test2',
          isComplete: false,
          id: 2
        },
    ];
    const todosAfter = { isFetching: false, items: itemsAfter }
    const action = {type: 'SET_TODOS', todos: itemsAfter }
    const result = todos(undefined, action);
    expect(result).toEqual(todosAfter); 
  });

})