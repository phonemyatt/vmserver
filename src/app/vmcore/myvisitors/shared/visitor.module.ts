import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

// Visitor Components - List < item < detail < edit
import { VisitorlistComponent } from './../visitorlist/visitorlist.component';
import { VisitoritemComponent } from './../visitoritem/visitoritem.component';
import { VisitordetailComponent } from './../visitordetail/visitordetail.component';
import { VisitoreditComponent } from './../visitoredit/visitoredit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        VisitorlistComponent,
        VisitoritemComponent,
        VisitordetailComponent,
        VisitoreditComponent,
    ],
    exports: [
        VisitorlistComponent,
        VisitoritemComponent,
        VisitordetailComponent,
        VisitoreditComponent,
    ],
    providers: []
})

export class VisitorModule {}