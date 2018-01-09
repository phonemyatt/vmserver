import { Component, OnInit } from '@angular/core';
import { VisitorModel } from './../shared/models/visitormodel';
import { visitordata } from './../shared/models/data/visitordata';
import { VisitorModule } from './shared/visitor.module';

@Component({
  selector: 'app-myvisitors',
  templateUrl: './myvisitors.component.html',
  styleUrls: ['./myvisitors.component.css']
})
export class MyvisitorsComponent implements OnInit {
  toggle: Boolean = false;
  myVisitor: VisitorModule= {
    name: '',
    position: '',
    company: '',
    ic: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  myVisitors: VisitorModel[];

  constructor() { this.initDummyData();  }

  ngOnInit() {
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
    this.myVisitor = visitor
  }

  editVisitorDetail( visitor: VisitorModel ) {    
    this.check( visitor );
  }

  saveVisitorProfile( visitor: VisitorModel ) {
    this.check( visitor );
  }

  cancelSaveVisitorProfile( visitor: VisitorModel ) {
    this.check( visitor ); 
  }

}
