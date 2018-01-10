import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';

@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit {
  //selectedVisitor: VisitorModel;
  selectedRow : Number;
  @Input() allVisitors: VisitorModel[];
  @Output() clickOnSelectVisitor = new EventEmitter<VisitorModel>();

  constructor() { }

  ngOnInit() {
  }

  onSelectVisitor(visitor: VisitorModel) {
    //this.selectedVisitor = visitor;   
    this.clickOnSelectVisitor.emit(visitor);
  }

  setClickedRow(index) {
    this.selectedRow = index;
  }

}
