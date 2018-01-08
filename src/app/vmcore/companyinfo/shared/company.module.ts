import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterializeModule  } from 'angular2-materialize';

// Visitor Components - List < item < detail < edit
import { CompanydetailComponent } from './../companydetail/companydetail.component';
import { CompanyeditComponent } from './../companyedit/companyedit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        CompanydetailComponent,
        CompanyeditComponent,
    ],
    exports: [
        CompanydetailComponent,
        CompanyeditComponent,
    ],
    providers: []
})

export class CompanyModule {}