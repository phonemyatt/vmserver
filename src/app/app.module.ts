import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize'

import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [   
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
