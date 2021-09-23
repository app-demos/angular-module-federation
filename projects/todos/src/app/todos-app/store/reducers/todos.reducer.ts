import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import * as TodoActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};


export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => {
    return state;
  }),
  on(TodoActions.loadTodosSuccess, (state, action) => {
    return !state.todos.length ? { ...state, todos: action.data } : state;
  }),
  on(TodoActions.loadTodosFailure, (state, action) => state),
  on(TodoActions.updateTodo, (state, action) => {
    const index = state.todos.findIndex((t) => t.id === action.todo.id);
    if (index < 0) {
      return state;
    }
    const todos = [...state.todos];
    todos[index] = action.todo;
    return { ...state, todos };
  }),
  on(TodoActions.deleteTodo, (state, action) => {
    const index = state.todos.findIndex((t) => t.id === action.todo.id);
    if (index < 0) {
      return state;
    }
    const todos = [...state.todos];
    todos.splice(index, 1);
    return { ...state, todos };
  }),
  on(TodoActions.clearCompleted, (state) => {
    const todos = state.todos.filter(t => !t.completed);
    return { ...state, todos };
  }),
  on(TodoActions.addTodo, (state, action) => {
    const todos = [...state.todos];
    todos.push(action.todo);
    return { ...state, todos };
  }),
);

