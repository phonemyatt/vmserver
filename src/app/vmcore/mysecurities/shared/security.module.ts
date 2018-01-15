import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

// Visitor Components - List < item < detail < edit
import { SecuritylistComponent } from './../securitylist/securitylist.component';
import { SecurityitemComponent } from './../securityitem/securityitem.component';
import { SecuritydetailComponent } from './../securitydetail/securitydetail.component';
import { SecurityeditComponent } from './../securityedit/securityedit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        SecuritylistComponent,
        SecurityitemComponent,
        SecuritydetailComponent,
        SecurityeditComponent,
    ],
    exports: [
        SecuritylistComponent,
        SecurityitemComponent,
        SecuritydetailComponent,
        SecurityeditComponent
    ],
    providers: []
})

export class SecurityModule { }