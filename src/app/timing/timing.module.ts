import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimingRoutingModule } from './timing-routing.module';
import { TimingComponent } from './timing.component';
import { TimingPageComponent } from './pages/timing-page/timing-page.component';
import { TimingTableComponent } from './tables/timing-table/timing-table.component';


@NgModule({
  declarations: [
    TimingComponent,
    TimingPageComponent,
    TimingTableComponent,
  ],
  imports: [
    CommonModule,
    TimingRoutingModule
  ]
})
export class TimingModule { }
