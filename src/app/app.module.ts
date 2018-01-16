import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

// angular firebase
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const firebaseConfig = environment.firebaseCOnfig;


// Landing Layer
import { LandingComponent } from './landing/landing.component';
import { SimpleloginregistrationComponent } from './simpleloginregistration/simpleloginregistration.component';
import { SimplereviewComponent } from './simplereview/simplereview.component';

// VM Core Layer
import { CoreModule } from './vmcore/shared/core.module';
import { MaterialModule } from './material.module';
import { CoreManageModule } from './manage/shared/modules/coremanage/coremanage.module';
// material components <-- totally different from materialize-css
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
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    CoreManageModule
  ],
  providers: [],
  bootstrap: [ LandingComponent ]
})
export class AppModule { }
