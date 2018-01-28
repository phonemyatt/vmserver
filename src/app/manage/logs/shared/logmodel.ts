import { HostModel } from './../../hosts/shared/hostmodel';
import { VisitorModel } from './../../visitors/shared/visitormodel';

export interface LogModel {
    id?: string;
    host?: string;
    visitor?: string;
    timein?: string;
    vtoken?: string;
}

export interface LogUIModel {
    id?: string;
    host?: HostModel;
    visitor?: VisitorModel;
    timein?: string;
    vtoken?: string;
}