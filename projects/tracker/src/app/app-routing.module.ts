import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitsFormComponent } from './components/habits-form/habits-form.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';

const routes: Routes = [{
  path: 'add',
  component: HabitsFormComponent
}, {
  path: '**',
  component: HabitsListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
