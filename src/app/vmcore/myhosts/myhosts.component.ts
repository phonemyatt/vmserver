import { Component, OnInit } from '@angular/core';
import { HostModel } from './../shared/models/hostmodel';
import { hostdata } from './../shared/models/data/hostdata';
import { HostModule } from './shared/host.module';

@Component({
  selector: 'app-myhosts',
  templateUrl: './myhosts.component.html',
  styleUrls: ['./myhosts.component.css']
})
export class MyhostsComponent implements OnInit {
  toggle: Boolean = false;
  myRow = -1;
  myHost: HostModel= {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  myHosts: HostModel[];

  constructor() { this.initDummyData();  }

  ngOnInit() {
  }
  initDummyData() {
    this.myHosts = hostdata;
  }
  check( myHost ) {
    if ( myHost ) {
      this.toggle = !this.toggle;
    }
  }
  selectHost( host: HostModel ) {
    this.myHost = host;
  }
  selectHostRow( row: number ) {
    this.myRow = row;
  }
  addNewHost() {
    this.myHosts.push( new HostModel( '', 'https://d30y9cdsu7xlg0.cloudfront.net/png/363633-200.png', '', '', '', '', '', '') );
    this.check( true );
  }
  editHostDetail( host: HostModel ) {
    this.check( host );
  }
  saveHostProfile( host: HostModel ) {
    this.check( host );
  }
  cancelSaveHostProfile( host: HostModel ) {
    this.check( host );
    this.myHost = host;
    this.myHosts[this.myRow] = host;
  }
}
