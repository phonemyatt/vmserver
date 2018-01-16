import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { MaterialModule } from './../../../../material.module';


// Core Manage Module
import { DashComponent } from './../../../dash/dash.component';
import { VisitorsComponent } from './../../../visitors/visitors.component';
import { HostsComponent } from './../../../hosts/hosts.component';
import { SecuritiesComponent } from './../../../securities/securities.component';

// Core Visitor Module
import { EditDialogComponent } from './../../../visitors/edit-dialog/edit-dialog.component';

// Core Manage Router
import { CoreManageRoutingModule } from './coremanage-routing.module';
import { VisitorServices } from '../../../visitors/shared/visitors.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreManageRoutingModule,
    MaterializeModule,
    MaterialModule,
  ],
  declarations: [
    DashComponent,
    VisitorsComponent,
    HostsComponent,
    SecuritiesComponent,
    EditDialogComponent,
  ],
  providers: [
    VisitorServices
  ]
})
export class CoreManageModule { }
