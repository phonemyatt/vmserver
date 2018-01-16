import { Component, OnInit } from '@angular/core';
import { VisitorModel } from './../shared/models/visitormodel';
import { visitordata } from './../shared/models/data/visitordata';
import { VisitorModule } from './shared/visitor.module';
import { VisitorService } from './shared/visitor.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-myvisitors',
  templateUrl: './myvisitors.component.html',
  styleUrls: ['./myvisitors.component.css']
})
export class MyvisitorsComponent implements OnInit {
  toggle: Boolean = false;
  myRow = -1;
  myVisitor: VisitorModule= {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: ''
  };
  myVisitors: VisitorModel[];
  widgets$: Observable<any>;

  constructor(public db: VisitorService) { this.initDummyData();  }

  ngOnInit() {
    this.widgets$ = this.db.colRef.valueChanges();
  }

  deleteWidgets() {
    this.db.deleteCollection('widgets', 5). subscribe();
  }

  initDummyData() {
    this.myVisitors = visitordata;
  }

  check( myVisitor ) {
    if ( myVisitor ) {
      this.toggle = !this.toggle;
    }
  }
  selectVisitor( visitor: VisitorModel ) {
    this.myVisitor = visitor;
  }
  selectVisitorRow( row: number ) {
    this.myRow = row;
  }
  addNewVisitor() {
    this.myVisitors.push( new VisitorModel( '', 'https://d30y9cdsu7xlg0.cloudfront.net/png/363633-200.png', '', '', '', '', '', '') );
    this.check( true );
  }
  editVisitorDetail( visitor: VisitorModel ) {
    this.check( visitor );
  }
  saveVisitorProfile( visitor: VisitorModel ) {
    this.check( visitor );
  }
  cancelSaveVisitorProfile( visitor: VisitorModel ) {
    this.check( visitor );
    this.myVisitor = visitor;
    this.myVisitors[this.myRow] = visitor;
  }
}
