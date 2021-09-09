import { Component, EventEmitter, Output, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  templateUrl: 'todos.component.html',
  selector: 'app-todos',
})
export class TodosComponent {
  todos: Todo[] = [
    {
      label: 'Buy milk',
      completed: false,
      id: '42',
    },
    {
      label: 'Build something fun!',
      completed: false,
      id: '43',
    },
  ];

  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();

  get itemsLeft(): number {
    return (this.todos || []).filter((t) => !t.completed).length;
  }

  clearCompleted(): void {
    (this.todos || []).filter((t) => t.completed).forEach((t) => this.onDelete(t));
  }

  addTodo(input: HTMLInputElement): void {
    const todo = {
      completed: false,
      label: input.value,
    };
    const result: Todo = { ...todo, id: Math.random().toString() };
    this.todos.push(result);
    input.value = '';
  }

  onChange(todo: Todo): void {
    if (!todo.id) {
      return;
    }
  }

  onDelete(todo: Todo): void {
    if (!todo.id) {
      return;
    }
    const idx = this.todos.findIndex((t) => t.id === todo.id);
    if (idx < 0) {
      return;
    }
    this.todos.splice(idx, 1);
  }
}