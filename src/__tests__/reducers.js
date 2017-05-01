import { expect } from 'chai';
import { todos } from '../reducers';
import { deepFreeze } from '../lib/utils';

describe('todos', () => {

  it('adds todo', () => {
    const todosList = [];
    const todo = {
      name: 'test',
      isComplete: false,
      id: 0
    }
    const todosAfter = [todo];
    deepFreeze(todosList);
    const action = {type: 'ADD_TODO', todo}
    const result = todos(todosList, action);
    expect(result).to.be.deep.equal(todosAfter);
  });

  it('toggles todo item', () => {
    const todosList = [
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
    const todosAfter = [
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
    deepFreeze(todosList);
    const action = {type: 'TOGGLE_TODO', id: 1}
    const result = todos(todosList, action);
    expect(result).to.be.deep.equal(todosAfter);
  });

  it('remove todo item', () => {
    const todosList = [
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
    const todosAfter = [
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
    deepFreeze(todosList);
    const action = {type: 'REMOVE_TODO', id: 1}
    const result = todos(todosList, action);
    expect(result).to.be.deep.equal(todosAfter);
  })
})