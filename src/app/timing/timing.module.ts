import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimingRoutingModule } from './timing-routing.module';
import { TimingComponent } from './timing.component';


@NgModule({
  declarations: [
    TimingComponent
  ],
  imports: [
    CommonModule,
    TimingRoutingModule
  ]
})
export class TimingModule { }
