import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'tracker',
  pathMatch: 'full'
},
{
  path: 'tracker',
  loadChildren: () => import('./tracker-app/tracker-app.module').then((m) => m.TrackerAppModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }