import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogsListComponent, BlogsDetailsComponent, BlogSidebarComponent, BlogComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BlogsModule { }
