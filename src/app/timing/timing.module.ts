import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimingRoutingModule } from './timing-routing.module';
import { TimingComponent } from './timing.component';
import { TimingPageComponent } from './pages/timing-page/timing-page.component';


@NgModule({
  declarations: [
    TimingComponent,
    TimingPageComponent,
  ],
  imports: [
    CommonModule,
    TimingRoutingModule
  ]
})
export class TimingModule { }
