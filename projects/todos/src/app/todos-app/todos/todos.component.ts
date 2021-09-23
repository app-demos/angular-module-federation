import { Component, EventEmitter, Output, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../store/models/todo';
import * as todosSelector from '../store/selectors/todos.selectors'
import * as TodosActions from '../store/actions/todos.actions';
@Component({
  templateUrl: 'todos.component.html',
  selector: 'app-todos',
})
export class TodosComponent {
  todos$: Observable<Todo[]>;
  pendingTodosCount$: Observable<number>;

  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();

  constructor(private store: Store) {
    this.store.dispatch(TodosActions.loadTodos());
    this.todos$ = this.store.select(todosSelector.selectTodos);
    this.pendingTodosCount$ = this.store.select(todosSelector.selectPendingTodosCount);
  }

  clearCompleted(): void {
    this.store.dispatch(TodosActions.clearCompleted());
  }

  addTodo(input: HTMLInputElement): void {
    const todo: Todo = {
      completed: false,
      label: input.value,
      id: Math.random().toString()
    };
    this.store.dispatch(TodosActions.addTodo({ todo }));
    input.value = '';
  }

  onChange(todo: Todo): void {
    this.store.dispatch(TodosActions.updateTodo({ todo }));
  }

  onDelete(todo: Todo): void {
    this.store.dispatch(TodosActions.deleteTodo({ todo }));
  }
}