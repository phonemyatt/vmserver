import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Visitor Components - List < item < detail < edit
import { LoglistComponent } from './../loglist/loglist.component';
import { LogitemComponent } from './../logitem/logitem.component';
import { LogdetailComponent } from './../logdetail/logdetail.component';
import { LogeditComponent } from './../logedit/logedit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        LoglistComponent,
        LogitemComponent,
        LogdetailComponent,
        LogeditComponent
    ],
    exports: [
        LoglistComponent,
        LogitemComponent,
        LogdetailComponent,
        LogeditComponent,
    ],
    providers: []
})

export class LogModule {}