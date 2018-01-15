import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';


@Component({
  selector: 'app-visitordetail',
  templateUrl: './visitordetail.component.html',
  styleUrls: ['./visitordetail.component.css']
})
export class VisitordetailComponent implements OnInit {
  @Input() detailVisitor: VisitorModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnEditButton = new EventEmitter<VisitorModel>();
  @Output() clickOnAddButton = new EventEmitter<VisitorModel>();

  constructor() { }

  ngOnInit() {
  }

  onClickEditButton() {
    if ( this.checkEmpty() ) {
      this.clickOnEditButton.emit(this.detailVisitor);
    }
  }
  onClickAddButton() {
    this.clickOnAddButton.emit();
  }

  checkEmpty(): Boolean {
    if ( this.detailVisitor.name.length > 0 || this.detailVisitor.hp.length > 0 || this.detailVisitor.id.length > 0) {
      return true;
    }
    return false;
  }
}
