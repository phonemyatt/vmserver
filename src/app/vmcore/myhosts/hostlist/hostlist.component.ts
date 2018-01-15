import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostModel } from '../../shared/models/hostmodel';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit {
 // selectedHost: HostModel;
 selectedRow: Number;
 @Input() allHosts: HostModel[];
 @Output() clickOnSelectHost = new EventEmitter<HostModel>();
 @Output() clickOnSelectHostRow = new EventEmitter<Number>();

 constructor() { }

 ngOnInit() {
 }

 onSelectHost(host: HostModel) {
   // this.selectedHost = Host;
   this.clickOnSelectHost.emit(host);
 }

 setClickedRow(index) {
  this.selectedRow = index;
  this.clickOnSelectHostRow.emit(index);
}
}
