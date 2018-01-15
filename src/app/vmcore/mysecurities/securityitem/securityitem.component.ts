import { Component, OnInit, Input } from '@angular/core';
import { SecurityModel } from '../../shared/models/securitymodel';

@Component({
  selector: 'app-securityitem',
  templateUrl: './securityitem.component.html',
  styleUrls: ['./securityitem.component.css']
})
export class SecurityitemComponent implements OnInit {
  @Input() singleSecurity: SecurityModel = {
    name: '',
    position: '',
    company: '',
    id: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };

  constructor() { }

  ngOnInit() {
  }
}
