import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExcerptDirective } from './directives/excerpt.directive';
import { LoadMoreDirective } from './directives/load-more.directive';
import { MentorshipTreeDirective } from './directives/mentorship-tree.directive';

@NgModule({
  declarations: [
    EmptyLayoutComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ExcerptDirective,
    LoadMoreDirective,
    MentorshipTreeDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmptyLayoutComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ExcerptDirective,
    LoadMoreDirective,
    MentorshipTreeDirective
  ]
})
export class SharedModule { }
