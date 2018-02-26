import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { LogModel, LogUIModel } from './shared/logmodel';
import { LogServices } from './shared/logs.service';
import { HostModel } from '../hosts/shared/hostmodel';
import { VisitorModel } from '../visitors/shared/visitormodel';
import { ConfirmLogDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements AfterViewInit {
  selectedRowIndex = -1;
  dataSource: MatTableDataSource<LogUIModel>;
  displayedColumns = ['timein', 'timeout', 'visitor', 'host', 'token', 'edit'];
  tempvisitor: VisitorModel = {
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
  temphost: HostModel = {
    id: '',
    imgpath: '',
    name: '',
    position: '',
    ic: '',
    companyid: '',
    pemail: '',
    hp: '',
  };
  locallog: LogUIModel = {
    id: '',
    timein: '',
    timeout: '',
    visitor: this.tempvisitor,
    host: this.temphost,
    vtoken: '',
  };

  constructor(private db: LogServices, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.db.returnLogCollections().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  clickToSendEmail(data) {
    const visitortext = `Dear ${data.visitor.name},
                  You signed in at ${data.timein} to meet ${data.host.name} and your virtual token is ${data.vtoken}.
                  Please use virtual token to sign out later`;
    this.db.sendSms(data.visitor.pemail, visitortext);

    const hosttext = `Dear ${data.host.name}, You have meeting with ${data.vistitor.name}  at ${data.timein}.
                  Please remind ${data.visitor.name} to use virtual token to sign out later`;
    this.db.sendSms(data.host.email, hosttext);
    this.snackBar.open(`Send reminder email to ${data.visitor.name} & ${data.host.name}`, 'Dismiss', {duration: 2000});
  }
  clickToSendSMS(data) {
    // tslint:disable-next-line:max-line-length
    const visitortext = `Dear ${data.visitor.name}, You signed in at ${data.timein} to meet ${data.host.name} and your virtual token is "${data.vtoken}". Please use virtual token to sign out later`;
    this.db.sendSms(data.visitor.hp, visitortext);

    // tslint:disable-next-line:max-line-length
    const hosttext = `Dear ${data.host.name}, You have meeting with ${data.visitor.name} at ${data.timein}. Please remind ${data.visitor.name} to use virtual token to sign out later`;
    this.db.sendSms(data.host.hp, hosttext);
    this.snackBar.open(`Send reminder sms to ${data.visitor.name} & ${data.host.name}`, 'Dismiss', {duration: 2000});
  }


  trackByUid(index, item) {
    return item.uid;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onClick(row): void {
    this.selectedRowIndex = row.id;
    this.locallog = row;
  }

  openHostDialog( data ): void {}
  deleteHostDialog( data ): void {
      // put dialog box here to confirm
      const dialogRef = this.dialog.open( ConfirmLogDialogComponent, {
        width: '350px',
        data: data
      });
      // this.db.deleteHost(data);
      dialogRef.afterClosed().subscribe(result => {
        if ( result === 'Yes') {
          this.selectedRowIndex = -1;
          this.locallog = {
              id: '',
              timein: '',
              timeout: '',
              visitor: {},
              host: {},
              vtoken: '',
            };
            this.snackBar.open('Deleted a hosts', 'Dismiss', {duration: 2000});
        }
      });
  }

  addOne() {}
  addOneRandom() {}
  generateData() {}
  deleteAllHosts() {}

}
