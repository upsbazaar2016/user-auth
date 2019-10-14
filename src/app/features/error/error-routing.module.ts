import { EmptyLayoutComponent } from './../../shared/layouts/empty-layout/empty-layout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'not-found',
        pathMatch: 'full'
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
