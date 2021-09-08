import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'todos',
  pathMatch: 'full'
},
{
  path: 'todos',
  loadChildren: () => import('./todos-app/todos-app.module').then((m) => m.TodosAppModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
