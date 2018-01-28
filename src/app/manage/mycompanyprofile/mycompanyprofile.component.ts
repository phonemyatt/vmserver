import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MyCompanyServices } from './shared/mycompany.service';
import { CompanyModel } from './shared/companymodel';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-mycompanyprofile',
  templateUrl: './mycompanyprofile.component.html',
  styleUrls: ['./mycompanyprofile.component.css']
})
export class MycompanyprofileComponent implements OnInit {
  private mycompany: CompanyModel = {
    id: '',
    imgpath: '',
    name: '',
    desc: '',
    remark:  '',
    address: '',
    tel: '',
    fax: '',
    cemail: '',
    homelink: '',
    fblink: '',
    googlelink: '',
  };
  constructor(private mcs: MyCompanyServices, private sanitizer: DomSanitizer) {
    console.log('Result');
    this.mcs.getOne().subscribe(result => {
      this.mycompany = result;
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
  }

}
