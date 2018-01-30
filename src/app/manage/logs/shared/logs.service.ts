import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { take, mergeMap } from 'rxjs/operators';
import { LogModel, LogUIModel } from './logmodel';
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
        ic: '',
        position: '',
        company: '',
        email: '',
        hp: '',
        address: ''
    };
    private hostLog: HostModel =  {
        id: '',
        imgpath: '',
        name: '',
        ic: '',
        position: '',
        companyid: '',
        pemail: '',
        hp: ''
    };
    private localUILog: LogUIModel = {
        id: '',
        timein: '',
        timeout: '',
        visitor: this.visitorLog,
        host: this.hostLog,
        vtoken: '',
    };

    // database
    private localLog: LogModel = {
        id: '',
        timein: '',
        timeout: '',
        visitor: '',
        host: '',
        vtoken: '',
    };

    logRef = this.afs.collection(this.loglink, ref => ref.orderBy('timein'));

    constructor(private afs: AngularFirestore, private https: HttpClient) {}

    returnLogCollections() {
        return this.afs.collection<LogUIModel>(this.loglink, ref => ref.orderBy('timein'))
        .snapshotChanges().map(results => {
            return results.map(a => {
                const data = a.payload.doc.data() as LogModel;
                const visitorid = data.visitor;
                const hostid = data.host;
                const mydata: LogUIModel = {
                    id: data.id,
                    timein: data.timein,
                    timeout: data.timeout,
                    visitor: this.visitorLog,
                    host: this.hostLog,
                    vtoken: data.vtoken,
                };
                this.afs.doc<VisitorModel>(this.visitorlink + '/' + visitorid).ref.get().then(visitor => {
                    if (visitor.exists) {
                        mydata.visitor.id = visitor.data().id;
                        mydata.visitor.imgpath = visitor.data().imgpath;
                        mydata.visitor.name = visitor.data().name;
                        mydata.visitor.ic = visitor.data().ic;
                        mydata.visitor.position = visitor.data().position;
                        mydata.visitor.company = visitor.data().comapny;
                        mydata.visitor.email = visitor.data().email;
                        mydata.visitor.hp = visitor.data().hp;
                        mydata.visitor.address = visitor.data().address;
                    }
                });
                this.afs.doc<HostModel>(this.hostlink + '/' + hostid).ref.get().then(host => {
                    if (host.exists) {
                        mydata.host.id = host.data().id;
                        mydata.host.imgpath = host.data().imgpath;
                        mydata.host.name = host.data().name;
                        mydata.host.ic = host.data().ic;
                        mydata.host.position = host.data().position;
                        mydata.host.companyid = host.data().companyid;
                        mydata.host.pemail = host.data().pemail;
                        mydata.host.hp = host.data().hp;
                    }
                });
                return mydata;
            });
        });
    }

    sendEmail(email: string, message: string) {
        const url = `https://us-central1-vmsystem-4aa54.cloudfunctions.net/sendmail`;
        const body = {
            emailto: email,
            text: message
        };

        this.https.post(url, body).subscribe( (res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    sendSms(phoneNumber: string, message: string) {
        const url = `https://us-central1-vmsystem-4aa54.cloudfunctions.net/sendsms`;
        // const headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        // const headers = { headers: new HttpHeaders({'Content-Type': 'application/json',
        //                                             'Access-Control-Allow-Origin': '*',
        //                                             'Access-Control-Allow-Methods': 'POST',
        //                                             'Access-Control-Allow-Headers': 'Content-Type'
        //                                             })};
        const body = {
            text: message,
            sms: phoneNumber
        };
        this.https.post(url, body).subscribe( (res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    deleteLog(logid: string) {
        console.log(logid);
        this.afs.collection<LogModel>(this.loglink).doc(logid).delete();
    }

}