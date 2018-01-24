import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HostServices } from './../shared/hosts.service';
import { HostModel } from './../shared/hostmodel';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmHostDialogComponent {
  host: HostModel =  {
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
  constructor( private afs: HostServices,
    public dialogRef: MatDialogRef<ConfirmHostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
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

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onConfirm(): void {
  //  this.afs.deletehost(this.host);
    this.dialogRef.close('Yes');
  }



}
