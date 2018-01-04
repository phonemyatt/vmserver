import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule  } from 'angular2-materialize';

@Component({
  selector: 'app-simpleloginregistration',
  templateUrl: './simpleloginregistration.component.html',
  styleUrls: ['./simpleloginregistration.component.css']
})
export class SimpleloginregistrationComponent implements OnInit {
  registerbirth: string;

  constructor() { this.registerbirth = new Date().toString(); }

  ngOnInit() {
  }

}
