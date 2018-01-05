import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { CompanyinfoComponent } from './../companyinfo/companyinfo.component';
import { MyvisitorsComponent } from './../myvisitors/myvisitors.component';
import { MyhostsComponent } from './../myhosts/myhosts.component';
import { MysecuritiesComponent } from './../mysecurities/mysecurities.component';
import { MydevicesComponent } from './../mydevices/mydevices.component';
import { EmergencyresponseComponent } from './../emergencyresponse/emergencyresponse.component';
import { MypoliciesComponent } from './../mypolicies/mypolicies.component';
import { MylogsComponent } from '../mylogs/mylogs.component';

const childCoreRoutes: Routes = [{
    path: 'core',
    component: DashboardComponent,
    children: [
        { path: 'info', component: CompanyinfoComponent },
        { path: 'logs', component: MylogsComponent },
        { path: 'visitors', component: MyvisitorsComponent },
        { path: 'hosts', component: MyhostsComponent },
        { path: 'policies', component: MypoliciesComponent },
        { path: 'securities', component: MysecuritiesComponent },
        { path: 'emergency', component: EmergencyresponseComponent },
        { path: 'devices', component: MydevicesComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(childCoreRoutes)],
    exports: [RouterModule],
    providers: []
})
export class CoreRoutingModule { }