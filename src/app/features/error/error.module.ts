import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


@NgModule({
  declarations: [NotFoundComponent, UnauthorizedComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule
  ]
})
export class ErrorModule { }
