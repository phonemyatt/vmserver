import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HostServices } from './../shared/hosts.service';
import { HostModel, HostUIModel } from './../shared/hostmodel';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmHostDialogComponent {
  host: HostUIModel =  {
    id: '',
    imgpath: '',
    name: '',
    position: '',
    company: '',
    ic: '',
    pemail: '',
    cemail: '',
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
        this.host.pemail = data.pemail;
        this.host.cemail = data.cemail;
        this.host.hp = data.hp;
        this.host.address = data.address;
    }

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onConfirm(): void {
    this.afs.deleteHost(this.host);
    this.dialogRef.close('Yes');
  }



}
