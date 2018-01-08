import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

// Landing Layer
import { LandingComponent } from './landing/landing.component';
import { SimpleloginregistrationComponent } from './simpleloginregistration/simpleloginregistration.component';
import { SimplereviewComponent } from './simplereview/simplereview.component';

// VM Core Layer
import { CoreModule } from './vmcore/shared/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    LandingComponent,
    SimpleloginregistrationComponent,
    SimplereviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ LandingComponent ]
})
export class AppModule { }
