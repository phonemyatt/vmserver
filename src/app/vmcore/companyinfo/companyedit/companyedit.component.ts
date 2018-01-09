import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule  } from 'angular2-materialize';
import { CompanyModel } from '../../shared/models/companymodel';


@Component({
  selector: 'app-companyedit',
  templateUrl: './companyedit.component.html',
  styleUrls: ['./companyedit.component.css']
})
export class CompanyeditComponent implements OnInit {
  cacheCompany: CompanyModel;
  @Input() editcompany: CompanyModel;
  @Output() clickSaveEvent = new EventEmitter<CompanyModel>();
  @Output() clickCancelEvent = new EventEmitter<CompanyModel>();

  constructor() {  }

  ngOnInit() {
    this.cacheCompany = this.editcompany; // cache before any changes apply.
  }

  onClickSaveButton() {
    this.clickSaveEvent.emit(this.editcompany);
  }

  onClickCancelButton() {
    this.clickCancelEvent.emit(this.cacheCompany);
  }

}
