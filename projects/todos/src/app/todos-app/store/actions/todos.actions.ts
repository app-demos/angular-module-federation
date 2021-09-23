import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction(
  '[Todos] LOAD TODOS'
);

export const loadTodosSuccess = createAction(
  '[Todos] LOAD TODOS SUCCESS',
  props<{ data: any }>()
);

export const loadTodosFailure = createAction(
  '[Todos] LOAD TODOS FAILURE',
  props<{ error: any }>()
);

export const deleteTodo = createAction(
  '[Todos] DELETE TODO',
  props<{ todo: Todo }>()
);

export const updateTodo = createAction(
  '[Todos] UPDATE TODO',
  props<{ todo: Todo }>()
);

export const clearCompleted = createAction(
  '[Todos] CLEAR COMPLETED TODOS'
);

export const addTodo = createAction(
  '[Todos] ADD TODO',
  props<{ todo: Todo }>()
);


