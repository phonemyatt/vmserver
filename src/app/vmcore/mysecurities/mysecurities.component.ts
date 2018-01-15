import { Component, OnInit } from '@angular/core';
import { SecurityModel } from './../shared/models/securitymodel';
import { securitydata } from './../shared/models/data/securitydata';
import { SecurityModule } from './shared/security.module';

@Component({
  selector: 'app-mysecurities',
  templateUrl: './mysecurities.component.html',
  styleUrls: ['./mysecurities.component.css']
})
export class MysecuritiesComponent implements OnInit {
  toggle: Boolean = false;
  myRow = -1;
  mySecurity: SecurityModel= {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  mySecurities: SecurityModel[];

  constructor() { this.initDummyData();  }

  ngOnInit() {
  }

  initDummyData() {
    this.mySecurities = securitydata;
  }

  check( mySecurity ) {
    if ( mySecurity ) {
      this.toggle = !this.toggle;
    }
  }
  selectSecurity( security: SecurityModel ) {
    this.mySecurity = security;
  }
  selectSecurityRow( row: number ) {
    this.myRow = row;
  }
  addNewSecurity() {
    this.mySecurities.push( new SecurityModel( '', 'https://d30y9cdsu7xlg0.cloudfront.net/png/363633-200.png', '', '', '', '', '', ''));
    this.check( true );
  }
  editSecurityDetail( security: SecurityModel ) {
    this.check( security );
  }
  saveSecurityProfile( security: SecurityModel ) {
    this.check( security );
  }
  cancelSaveSecurityProfile( security: SecurityModel ) {
    this.check( security );
    this.mySecurity = security;
    this.mySecurities[this.myRow] = security;
  }
}
