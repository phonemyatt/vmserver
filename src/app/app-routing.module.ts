import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SimpleloginregistrationComponent } from './simpleloginregistration/simpleloginregistration.component';
import { SimplereviewComponent } from './simplereview/simplereview.component';

import { DashboardComponent } from './vmcore/dashboard/dashboard.component';
import { DashComponent } from './manage/dash/dash.component';

const routes: Routes = [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: '', component: LandingComponent },
    { path: 'review', component: SimplereviewComponent },
    { path: 'simple', component: SimpleloginregistrationComponent },
    { path: 'core' , component: DashboardComponent },
    { path: 'manage' , component: DashComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule { }