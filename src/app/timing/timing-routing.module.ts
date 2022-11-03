import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimingPageComponent } from './pages/timing-page/timing-page.component';
import { TimingComponent } from './timing.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: '',
        component: TimingPageComponent
      }      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimingRoutingModule { }
