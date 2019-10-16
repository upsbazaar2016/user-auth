import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';


@NgModule({
  declarations: [LeavesComponent],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    ReactiveFormsModule
  ]
})
export class LeavesModule { }
