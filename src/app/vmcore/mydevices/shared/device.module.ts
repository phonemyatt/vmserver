import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Visitor Components - List < item < detail < edit
import { DevicelistComponent } from './../devicelist/devicelist.component';
import { DeviceitemComponent } from './../deviceitem/deviceitem.component';
import { DevicedetailComponent } from './../devicedetail/devicedetail.component';
import { DeviceeditComponent } from './../deviceedit/deviceedit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        DevicelistComponent,
        DeviceitemComponent,
        DevicedetailComponent,
        DeviceeditComponent,
    ],
    exports: [
        DevicelistComponent,
        DeviceitemComponent,
        DevicedetailComponent,
        DeviceeditComponent,
    ],
    providers: []
})

export class DeviceModule { }