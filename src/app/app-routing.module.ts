import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './features/auth/auth.module#AuthModule'
  },
  {
    path: 'error',
    loadChildren: './features/error/error.module#ErrorModule'
  },
  {
    path: 'main',
    loadChildren: './features/main/main.module#MainModule'
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
