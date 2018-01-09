import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompanyModel } from './../../shared/models/companymodel';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css']
})
export class CompanydetailComponent implements OnInit {
  @Input() detailcompany: CompanyModel;
  @Output() clickEditEvent = new EventEmitter<CompanyModel>();

  constructor() { }

  ngOnInit() { }

  initDummyData() {
    this.detailcompany = {
      name: 'Anewtech Systems',
      desc: 'Leading IPC Supplier and Solutions Provider',
      remark: `We are well established company in South East Asia providing world class services
               and solutions to manufacturing and medical industry
               with clear objectives and success stories to follow.`,
      img: 'https://anewtech.files.wordpress.com/2014/11/anewtech-systems-logo.jpg?w=848'
    };
  }

  onClickEditButton() {
    this.clickEditEvent.emit(this.detailcompany);
  }

}
