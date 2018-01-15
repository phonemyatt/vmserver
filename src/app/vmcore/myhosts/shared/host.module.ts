import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

// Visitor Components - List < item < detail < edit
import { HostlistComponent } from './../hostlist/hostlist.component';
import { HostitemComponent } from './../hostitem/hostitem.component';
import { HostdetailComponent } from './../hostdetail/hostdetail.component';
import { HosteditComponent } from './../hostedit/hostedit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        HostlistComponent,
        HostitemComponent,
        HostdetailComponent,
        HosteditComponent,
    ],
    exports: [
        HostlistComponent,
        HostitemComponent,
        HostdetailComponent,
        HosteditComponent,
    ],
    providers: []
})

export class HostModule { }