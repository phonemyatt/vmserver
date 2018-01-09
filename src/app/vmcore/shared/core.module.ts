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

// Sub Core Components
import { CompanyModule } from './../companyinfo/shared/company.module';
import { VisitorModule } from './../myvisitors/shared/visitor.module';
import { LogModule } from './../mylogs/shared/log.module';
import { HostModule } from './../myhosts/shared/host.module';
import { SecurityModule } from './../mysecurities/shared/security.module';
import { DeviceModule } from './../mydevices/shared/device.module';

// Core Router
import { CoreRoutingModule } from './core-routing.module';
import { MaterializeDirective } from 'angular2-materialize/dist/materialize-directive';
import { COMPILER_OPTIONS } from '@angular/core/src/linker/compiler';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        MaterializeModule,
        VisitorModule,
        LogModule,
        HostModule,
        SecurityModule,
        DeviceModule,
        CompanyModule
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