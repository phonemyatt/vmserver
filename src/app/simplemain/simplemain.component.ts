import { Component, OnInit } from '@angular/core';
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  selector: 'app-simplemain',
  templateUrl: './simplemain.component.html',
  styleUrls: ['./simplemain.component.css']
})
export class SimplemainComponent implements OnInit {
  routeNames = [ 'Buttons',
                'Carousel',
                'Chips',
                'Collapsible',
                'Dialogs',
                'Dropdown',
                'Forms',
                'Tabs',
                'DatePicker',
                'Parallax',
                'ModelBindings'];
  constructor() { }

  ngOnInit() {
  }

}
