import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureRoutingModule } from './temperature.routing.module';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperaturecheckComponent } from './temperaturecheck.component';

@NgModule({
  declarations: [
    TemperaturecheckComponent
  ],
  imports: [
    CommonModule,
    TemperatureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemperaturecheckModule { }
