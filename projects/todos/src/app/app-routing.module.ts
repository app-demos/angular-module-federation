import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: 'todos',
  component: AppComponent,
  children: [
    {
      path: 'app',
      loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: '**',
      redirectTo: 'app',
    },
  ],
},
{
  path: '**',
  redirectTo: 'todos',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
