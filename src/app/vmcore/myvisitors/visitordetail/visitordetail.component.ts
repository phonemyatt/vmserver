import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';

@Component({
  selector: 'app-visitordetail',
  templateUrl: './visitordetail.component.html',
  styleUrls: ['./visitordetail.component.css']
})
export class VisitordetailComponent implements OnInit {
  @Input() singleVisitor:VisitorModel = {
    name: '',
    position: '',
    company: '',
    ic: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  }; 
  @Output() clickOnEditButton = new EventEmitter<VisitorModel>();

  constructor() { }

  ngOnInit() {
  }

  onClickEditButton(){
    this.clickOnEditButton.emit(this.singleVisitor);
  }

}
