import { Component, OnInit, Input } from '@angular/core';
import { HostModel } from '../../shared/models/hostmodel';

@Component({
  selector: 'app-hostitem',
  templateUrl: './hostitem.component.html',
  styleUrls: ['./hostitem.component.css']
})
export class HostitemComponent implements OnInit {
  @Input() singleHost: HostModel = {
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
