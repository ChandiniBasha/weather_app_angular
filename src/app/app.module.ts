import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';


@NgModule({
    declarations: [
    AppComponent,
    WeatherCardComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }