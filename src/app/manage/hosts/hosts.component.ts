import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HostModel, HostUIModel } from './shared/hostmodel';
import { HostServices } from './shared/hosts.service';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EditHostDialogComponent } from './edit-dialog/edit-dialog.component';
import { ConfirmHostDialogComponent } from './confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements AfterViewInit {
  selectedRowIndex = -1;
  displayedColumns = ['avatar', 'name', 'company', 'ic' , 'edit'];
  dataSource: MatTableDataSource<HostUIModel>;
  localhost: HostUIModel = {
    id: '',
    imgpath: '',
    name: '',
    position: '',
    company: '',
    ic: '',
    cemail: '',
    pemail: '',
    hp: '',
    address: '',
  };

  @ViewChild(MatSort) sort: MatSort;

  // hosts$: Observable<any>;

  constructor(private db: HostServices,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}

  // ngOnInit() {
  //   this.hosts$ = this.db.colRef.valueChanges();
  // }

  clickToSendEmail(data) {
    const text = `Dear ${data.name}, You have been registered in Visitor Mangement System, Anewtech.`;
    this.db.sendEmail(data.pemail, text);
    this.snackBar.open(`Send generated email to ${data.name}`, 'Dismiss', {duration: 2000});
  }
  clickToSendSMS(data) {
    const text = `Dear ${data.name}, You have been registered in Visitor Mangement System, Anewtech.`;
    this.db.sendSms( data.hp, text);
    this.snackBar.open(`Send generated sms to ${data.name}`, 'Dismiss', {duration: 2000});
  }

  ngAfterViewInit() {
      this.db.returnHostCollections().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  onClick(row): void {
    this.selectedRowIndex = row.id;
    this.localhost = row;
  }

   openHostDialog( data ): void {
    const dialogRef = this.dialog.open( EditHostDialogComponent, {
      width: '600px',
      height: '700px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Edited a host', 'Dismiss', {duration: 2000});
    });
  }
   deleteHostDialog( data ): void {
    // put dialog box here to confirm
    const dialogRef = this.dialog.open( ConfirmHostDialogComponent, {
      width: '350px',
      data: data
    });

    // this.db.deleteHost(data);
    dialogRef.afterClosed().subscribe(result => {
      if ( result === 'Yes') {
        this.selectedRowIndex = -1;
        this.localhost = {
            id: '',
            imgpath: '',
            name: '',
            position: '',
            company: '',
            ic: '',
            cemail: '',
            pemail: '',
            hp: '',
            address: '',
          };
          this.snackBar.open('Deleted a hosts', 'Dismiss', {duration: 2000});
      }
    });
  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  trackByUid(index, item) {
    return item.uid;
  }

  addOne() {
    // for dialog to create new host
    const dialogRef = this.dialog.open( EditHostDialogComponent, {
      width: '600px',
      height: '700px',
      data: 'new'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Added a host', 'Dismiss', {duration: 2000});
    });
  }

  addOneRandom() {
    this.db.addOneRandomHost();
  }

   generateData() {
    this.db.generateHosts(50);
    this.snackBar.open('Generated 50 hosts', 'Dismiss', {duration: 2000});
  }
   deleteAllHosts() {
    this.db.deleteHostCollection('hosts', 5). subscribe();
    this.snackBar.open('Deleted all hosts', 'Dismiss', {duration: 2000});
  }
}
