import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VisitorServices } from './../shared/visitors.service';
import { VisitorModel } from './../shared/visitormodel';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
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
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateVisitor(): void {
    this.vs.updateVisitor(this.visitor);
    this.dialogRef.close();
  }
}
