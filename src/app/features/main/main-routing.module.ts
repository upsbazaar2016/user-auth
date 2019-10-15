import { MainLayoutComponent } from './../../shared/layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: './../user/user.module#UserModule'
      },
      {
        path: 'blogs',
        loadChildren: './../blogs/blogs.module#BlogsModule'
      },
      {
        path: '',
        redirectTo: 'blogs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
