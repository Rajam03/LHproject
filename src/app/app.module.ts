import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturecheckModule } from './temperaturecheck/temperaturecheck.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { temperaturecheckService } from './temperaturecheck/temperaturecheck.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemperaturecheckModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [temperaturecheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
