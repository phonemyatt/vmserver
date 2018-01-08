import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../shared/models/companymodel';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {
  parentCompany: CompanyModel;
  toggle: Boolean = false;


  constructor() { this.initDummyData(); }

  ngOnInit() {
  }

  initDummyData() {
    this.parentCompany = {
      name: 'Anewtech Systems',
      desc: 'Leading IPC Supplier and Solutions Provider',
      remark: `We are well established company in South East Asia providing world class services and
              solutions to manufacturing and medical industry
              with clear objectives and success stories to follow.`,
      img: 'https://anewtech.files.wordpress.com/2014/11/anewtech-systems-logo.jpg?w=848',
      website: 'http://www.anewtech.net',
      google: 'http://www.google.com/search?q=anewtech+systems',
      facebook: 'https://www.facebook.com/anewtech.net/'
    };
  }

  editDetail(parentCompany) {
    this.check(parentCompany);
  }

  saveProfile(parentCompany) {
    console.log(parentCompany);
    this.check(parentCompany);
  }

  cancelSaveProfile(parentCompany) {
    console.log(parentCompany);
    this.check(parentCompany);
  }

  check(parentCompany) {
    if (parentCompany) {
      this.toggle = !this.toggle;
    }
  }

}
