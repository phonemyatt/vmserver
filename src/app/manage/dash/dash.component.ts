import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  title: String = 'VMS';
  constructor() { }
  routeNames =  [{ name: 'My Company' , link: 'companies' },
                 { name: 'Logs' , link: 'logs' },
                 { name: 'Visitors' , link: 'visitors' },
                 { name: 'Hosts' , link: 'hosts' },
                 { name: 'Securities' , link: 'securities' },
                ];

  ngOnInit() {
  }
}
