import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './../../../dash/dash.component';
import { VisitorsComponent } from './../../../visitors/visitors.component';
import { HostsComponent } from './../../../hosts/hosts.component';
import { SecuritiesComponent } from './../../../securities/securities.component';

const childCoreRoutes: Routes = [{
    path: 'manage',
    component: DashComponent,
    children: [
        { path: 'visitors', component: VisitorsComponent },
        { path: 'hosts', component: HostsComponent },
        { path: 'securities', component: SecuritiesComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(childCoreRoutes)],
    exports: [RouterModule],
    providers: []
})
export class CoreManageRoutingModule { }