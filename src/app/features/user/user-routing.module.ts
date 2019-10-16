import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'details',
        loadChildren: './details/details.module#DetailsModule'
      },
      {
        path: 'leaves',
        loadChildren: './leaves/leaves.module#LeavesModule'
      },
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule'
      },
      {
        path: '**',
        redirectTo: 'projects',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
