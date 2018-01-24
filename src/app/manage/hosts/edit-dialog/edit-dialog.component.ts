import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HostServices } from './../shared/hosts.service';
import { HostModel } from './../shared/hostmodel';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditHostDialogComponent {
  title: string;
  host: HostModel = {
    id: '',
    imgpath: '',
    name: '',
    position: '',
    company: '',
    ic: '',
    email: '',
    hp: '',
    address: '',
  };

  constructor(
    private vs: HostServices,
    public dialogRef: MatDialogRef<EditHostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if ( data === 'new' ) {
        this.title = 'New Host Profile';
      } else {
        this.title = 'Edit Host Profile';
        this.host.id = data.id;
        this.host.imgpath = data.imgpath;
        this.host.name = data.name;
        this.host.position = data.position;
        this.host.company = data.company;
        this.host.ic = data.ic;
        this.host.email = data.email;
        this.host.hp = data.hp;
        this.host.address = data.address;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateHost(): void {
    (this.data === 'new') ? this.vs.addOneHost(this.host) : this.vs.updateHost(this.host);
    this.dialogRef.close();
  }

}
