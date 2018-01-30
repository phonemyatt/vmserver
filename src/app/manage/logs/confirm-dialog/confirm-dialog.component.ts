import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogServices } from './../shared/logs.service';
import { LogModel, LogUIModel } from './../shared/logmodel';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmLogDialogComponent {
  logid = '';

  constructor(private afs: LogServices,
    public dialogRef: MatDialogRef<ConfirmLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.logid = data.id; }

  onNoClick(): void {
    this.dialogRef.close('No');
  }
  onConfirm(): void {
    this.afs.deleteLog(this.logid);
    this.dialogRef.close('Yes');
  }

}
