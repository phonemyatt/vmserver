import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

// Core Components
import { MynavComponent } from './../mynav/mynav.component';
import { CompanyinfoComponent } from './../companyinfo/companyinfo.component';
import { MyvisitorsComponent } from './../myvisitors/myvisitors.component';
import { MyhostsComponent } from './../myhosts/myhosts.component';
import { MysecuritiesComponent } from './../mysecurities/mysecurities.component';
import { MydevicesComponent } from './../mydevices/mydevices.component';
import { EmergencyresponseComponent } from './../emergencyresponse/emergencyresponse.component';
import { MypoliciesComponent } from './../mypolicies/mypolicies.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { MylogsComponent } from './../mylogs/mylogs.component';

// Core Router
import { CoreRoutingModule } from './coure-routing.module';
import { MaterializeDirective } from 'angular2-materialize/dist/materialize-directive';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        MaterializeModule,
    ],
    declarations: [
        CompanyinfoComponent,
        MyvisitorsComponent,
        MyhostsComponent,
        MysecuritiesComponent,
        MydevicesComponent,
        EmergencyresponseComponent,
        MypoliciesComponent,
        DashboardComponent,
        MynavComponent,
        MylogsComponent
    ],
    providers: []
})
export class CoreModule {}