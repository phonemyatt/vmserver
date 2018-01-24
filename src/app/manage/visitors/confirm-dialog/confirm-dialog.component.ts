import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VisitorServices } from './../shared/visitors.service';
import { VisitorModel } from './../shared/visitormodel';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmVisitorDialogComponent {
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
    private afs: VisitorServices,
    public dialogRef: MatDialogRef<ConfirmVisitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
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

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onConfirm(): void {
    this.afs.deleteVisitor(this.visitor);
    this.dialogRef.close('Yes');
  }


}
