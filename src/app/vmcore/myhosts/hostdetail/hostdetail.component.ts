import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostModel } from '../../shared/models/hostmodel';


@Component({
  selector: 'app-hostdetail',
  templateUrl: './hostdetail.component.html',
  styleUrls: ['./hostdetail.component.css']
})
export class HostdetailComponent implements OnInit {
  @Input() detailHost: HostModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnEditButton = new EventEmitter<HostModel>();
  @Output() clickOnAddButton = new EventEmitter<HostModel>();

  constructor() { }
  ngOnInit() {
  }

  onClickEditButton() {
    if ( this.checkEmpty() ) {
      this.clickOnEditButton.emit(this.detailHost);
    }
  }
  onClickAddButton() {
    this.clickOnAddButton.emit();
  }
  checkEmpty(): Boolean {
    if ( this.detailHost.name.length > 0 || this.detailHost.hp.length > 0 || this.detailHost.id.length > 0) {
      return true;
    }
    return false;
  }
}
