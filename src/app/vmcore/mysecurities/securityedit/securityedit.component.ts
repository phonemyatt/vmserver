import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecurityModel } from '../../shared/models/securitymodel';

@Component({
  selector: 'app-securityedit',
  templateUrl: './securityedit.component.html',
  styleUrls: ['./securityedit.component.css']
})
export class SecurityeditComponent implements OnInit {
  cacheSecurity: SecurityModel;
  @Input() editSecurity: SecurityModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnSaveSecurity = new EventEmitter<SecurityModel>();
  @Output() clickOnCancelSecurity = new EventEmitter<SecurityModel>();

  constructor() {
  }
  ngOnInit() {
    this.cacheSecurity = this.editSecurity;
  }

  onClickSaveButton( host: SecurityModel) {
      this.clickOnSaveSecurity.emit(this.editSecurity);
  }
  onClickCancelButton() {
    this.clickOnCancelSecurity.emit(this.cacheSecurity);
  }
}
