import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { HabitsFormComponent } from './components/habits-form/habits-form.component';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: HabitsListComponent
  },
  {
    path: 'add',
    component: HabitsFormComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HabitsListComponent, HabitsFormComponent],
  exports: [],
})
export class TrackerAppModule { }
