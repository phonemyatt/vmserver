import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';

@Component({
  selector: 'app-visitoredit',
  templateUrl: './visitoredit.component.html',
  styleUrls: ['./visitoredit.component.css']
})
export class VisitoreditComponent implements OnInit {
  cacheVisitor: VisitorModel;
  @Input() editvisitor: VisitorModel = {
    name: '',
    position: '',
    company: '',
    ic: '',
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
    this.cacheVisitor = this.editvisitor;
  }

  onClickSaveButton(visitor: VisitorModel){
    this.clickOnSaveVisitor.emit(this.editvisitor);
  }
  onClickCancelButton(){
    this.clickOnCancelVisitor.emit(this.cacheVisitor);
  }

}
