import { MaterializeDirective } from 'angular2-materialize';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.css']
})
export class MynavComponent implements OnInit {
  routeNames = [ { name: 'Company Info' , link: 'info' },
                 { name: 'Log' , link: 'logs' },
                 { name: 'Visitor' , link: 'visitors'},
                 { name: 'Host' , link: 'hosts'},
                 { name: 'Agreement' , link: 'policies'},
                 { name: 'Security' , link: 'securities'},
                 { name: 'Emergency' , link: 'emergency'},
                 { name: 'Device' , link: 'devices'},
              ];
  constructor() { }

  ngOnInit() {
  }

}
