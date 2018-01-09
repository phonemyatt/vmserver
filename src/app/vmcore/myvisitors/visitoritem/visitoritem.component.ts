import { Component, OnInit, Input } from '@angular/core';
import { VisitorModel } from './../../shared/models/visitormodel';

@Component({
  selector: 'app-visitoritem',
  templateUrl: './visitoritem.component.html',
  styleUrls: ['./visitoritem.component.css']
})
export class VisitoritemComponent implements OnInit {
  @Input() singleVisitor: VisitorModel = {
    name: '',
    position: '',
    company: '',
    ic: '',
    img: '',
    email: '',
    hp: '',
    address: '',
  };;

  constructor() { }

  ngOnInit() {
  }
}
