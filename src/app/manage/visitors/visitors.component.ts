import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VisitorModel } from './shared/visitormodel';
import { VisitorServices } from './shared/visitors.service';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements AfterViewInit {

  displayedColumns = ['name', 'company', 'ic' , 'edit'];
  dataSource: MatTableDataSource<VisitorModel>;

  @ViewChild(MatSort) sort: MatSort;

  // visitors$: Observable<any>;

  constructor(private db: VisitorServices,
              public dialog: MatDialog) {}

  // ngOnInit() {
  //   this.visitors$ = this.db.colRef.valueChanges();
  // }

  ngAfterViewInit() {
    this.db.returnVisitorCollections().valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  private openDialog( data ): void {
    const dialogRef = this.dialog.open( EditDialogComponent, {
      width: '350px',
      data: data
    });
  }
  private deleteDialog( data ): void {

  }

  private applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  private trackByUid(index, item) {
    return this.db.trackVisitorByUid(index, item);
  }
  private addOne() {
    this.db.addOneVisitor();
  }

  private generateData() {
    this.db.generateVisitors(50);
  }
  private deleteAllVisitors() {
    this.db.deleteCollection('visitors', 5). subscribe();
  }

}
