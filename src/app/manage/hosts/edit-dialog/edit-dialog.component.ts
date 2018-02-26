import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HostServices } from './../shared/hosts.service';
import { HostModel, HostUIModel } from './../shared/hostmodel';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditHostDialogComponent {
  title: string;
  host: HostUIModel = {
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
        this.host.pemail = data.pemail;
        this.host.cemail = data.cemail;
        this.host.hp = data.hp;
        this.host.address = data.address;
      }

      console.log(this.host.id);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateHost(): void {
    const hosttodatabase: HostModel = {
      id: this.host.id,
      imgpath: this.host.imgpath,
      name: this.host.name,
      position: this.host.position,
      companyid: 'super',
      ic: this.host.ic,
      hp: this.host.hp,
      pemail: this.host.pemail,
    };

    (this.data === 'new') ? this.vs.addOneHost(hosttodatabase) : this.vs.updateHost(hosttodatabase);
    this.dialogRef.close();
  }

}
