import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VisitorServices } from './../shared/visitors.service';
import { VisitorModel } from './../shared/visitormodel';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditVisitorDialogComponent {
  title: string;
  visitor: VisitorModel = {
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
    private vs: VisitorServices,
    public dialogRef: MatDialogRef<EditVisitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if ( data === 'new' ) {
        this.title = 'New Visitor Profile';
      } else {
        this.title = 'Edit Visitor Profile';
        this.visitor.id = data.id;
        this.visitor.imgpath = data.imgpath;
        this.visitor.name = data.name;
        this.visitor.position = data.position;
        this.visitor.company = data.company;
        this.visitor.ic = data.ic;
        this.visitor.email = data.email;
        this.visitor.hp = data.hp;
        this.visitor.address = data.address;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateVisitor(): void {
    (this.data === 'new') ? this.vs.addOneVisitor(this.visitor) : this.vs.updateVisitor(this.visitor);
    this.dialogRef.close();
  }
}
