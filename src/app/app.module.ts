import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { LandingComponent } from './landing/landing.component';
import { SimpleloginregistrationComponent } from './simpleloginregistration/simpleloginregistration.component';
import { SimplereviewComponent } from './simplereview/simplereview.component';

import { AppRoutingModule } from './app-routing.module';
import { SimplemainComponent } from './simplemain/simplemain.component';

@NgModule({
  declarations: [
    LandingComponent, SimpleloginregistrationComponent, SimplereviewComponent, SimplemainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
