import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemperaturecheckComponent } from './temperaturecheck.component';

const routes: Routes = [
  {
    path: '',
    component: TemperaturecheckComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class TemperatureRoutingModule { }
