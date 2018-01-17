import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostModel } from '../../shared/models/hostmodel';

@Component({
  selector: 'app-hostedit',
  templateUrl: './hostedit.component.html',
  styleUrls: ['./hostedit.component.css']
})
export class HosteditComponent implements OnInit {
  cacheHost: HostModel;
  @Input() editHost: HostModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };
  @Output() clickOnSaveHost = new EventEmitter<HostModel>();
  @Output() clickOnCancelHost = new EventEmitter<HostModel>();

  constructor() {
  }
  ngOnInit() {
    this.cacheHost = Object.assign( {}, this.editHost );
  }
  onClickSaveButton( host: HostModel) {
      this.clickOnSaveHost.emit(this.editHost);
  }
  onClickCancelButton() {
    this.clickOnCancelHost.emit(this.cacheHost);
  }
}
