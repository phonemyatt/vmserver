import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

//material components <-- totally different from materialize-css
import { CoreMaterialModule } from './corematerials/corematerial.module';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    LandingComponent,
    SimpleloginregistrationComponent,
    SimplereviewComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule,
    AppRoutingModule,
    CoreMaterialModule
  ],
  providers: [],
  bootstrap: [ LandingComponent ]
})
export class AppModule { }
