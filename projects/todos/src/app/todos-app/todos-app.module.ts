import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosFilter } from './todos/todos.pipe';
import { TooltipDirective } from './todos/todo/tooltip.directive';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { StoreModule } from '@ngrx/store';

import * as todosReducer from './store/reducers/todos.reducer';

const routes = [
  {
    path: '',
    component: TodosComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todos', todosReducer.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  declarations: [TodosComponent, TodoComponent, TodosFilter, TooltipDirective],
  exports: [],
})
export class TodosAppModule { }