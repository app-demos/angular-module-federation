import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);

export const selectPendingTodosCount = createSelector(
  selectTodos,
  (state) => state.length
);
