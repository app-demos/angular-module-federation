import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  templateUrl: 'todo.component.html',
  selector: 'app-todo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: any;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  editMode = false;

  toggle(): void {
    this.todo.completed = !this.todo.completed;
    this.update.emit(this.todo);
  }

  completeEdit($event: any): void {
    this.todo.label = $event.target?.value;
    this.editMode = false;
    this.update.emit(this.todo);
  }

  enableEditMode(): void {
    this.editMode = true;
  }
}