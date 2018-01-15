import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';

@Component({
  selector: 'app-visitoredit',
  templateUrl: './visitoredit.component.html',
  styleUrls: ['./visitoredit.component.css']
})

export class VisitoreditComponent implements OnInit {
  cacheVisitor: VisitorModel;
  @Input() editVisitor: VisitorModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnSaveVisitor = new EventEmitter<VisitorModel>();
  @Output() clickOnCancelVisitor = new EventEmitter<VisitorModel>();

  constructor() {
  }
  ngOnInit() {
    this.cacheVisitor = Object.assign( {}, this.editVisitor );
  }
  onClickSaveButton(visitor: VisitorModel) {
      this.clickOnSaveVisitor.emit(visitor);
  }
  onClickCancelButton(visitor: VisitorModel) {
    this.clickOnCancelVisitor.emit(visitor);
  }
}
