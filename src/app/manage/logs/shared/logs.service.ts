import { Injectable } from '@angular/core';
import { LogModel } from './logmodel';
import { HostModel } from './../../hosts/shared/hostmodel';
import { VisitorModel } from './../../visitors/shared/visitormodel';

@Injectable()
export class LogServices {
    private visitorlink = 'visitors';
    private hostlink = 'hosts';
    private loglink = 'logs';
    private visitorLog: VisitorModel = {
        id: '',
        imgpath: '',
        name: '',
    };
    constructor() {}
}