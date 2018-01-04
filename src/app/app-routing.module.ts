import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SimpleloginregistrationComponent } from './simpleloginregistration/simpleloginregistration.component';
import { SimplereviewComponent } from './simplereview/simplereview.component';
import { SimplemainComponent } from './simplemain/simplemain.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: LandingComponent },
    { path: 'review', component: SimplereviewComponent },
    { path: 'simple', component: SimpleloginregistrationComponent },
    { path: 'home' , component: SimplemainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}