import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecurityModel } from '../../shared/models/securitymodel';

@Component({
  selector: 'app-securitylist',
  templateUrl: './securitylist.component.html',
  styleUrls: ['./securitylist.component.css']
})
export class SecuritylistComponent implements OnInit {
  // selectedSecurity: SecurityModel;
  selectedRow: Number;
  @Input() allSecurities: SecurityModel[];
  @Output() clickOnSelectSecurity = new EventEmitter<SecurityModel>();
  @Output() clickOnSelectSecurityRow = new EventEmitter<Number>();
  constructor() { }
  ngOnInit() {
  }
  onSelectSecurity(security: SecurityModel) {
    // this.selectedSecurity = Security;
    this.clickOnSelectSecurity.emit(security);
  }
  setClickedRow(index) {
    this.selectedRow = index;
    this.clickOnSelectSecurityRow.emit(index);
  }
}
