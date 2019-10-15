import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent
  },
  {
    path: 'new-blog',
    component: BlogComponent
  },
  {
    path: ':id',
    component: BlogsDetailsComponent
  },
  {
    path: 'edit-blog/:id',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
