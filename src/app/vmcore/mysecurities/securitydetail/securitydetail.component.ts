import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecurityModel } from '../../shared/models/securitymodel';

@Component({
  selector: 'app-securitydetail',
  templateUrl: './securitydetail.component.html',
  styleUrls: ['./securitydetail.component.css']
})
export class SecuritydetailComponent implements OnInit {
  @Input() detailSecurity: SecurityModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnEditButton = new EventEmitter<SecurityModel>();
  @Output() clickOnAddButton = new EventEmitter<SecurityModel>();

  constructor() { }
  ngOnInit() {
  }

  onClickEditButton() {
    if ( this.checkEmpty() ) {
      this.clickOnEditButton.emit(this.detailSecurity);
    }
  }
  onClickAddButton() {
    this.clickOnAddButton.emit();
  }
  checkEmpty(): Boolean {
    if ( this.detailSecurity.name.length > 0 || this.detailSecurity.hp.length > 0 || this.detailSecurity.id.length > 0) {
      return true;
    }
    return false;
  }
}
