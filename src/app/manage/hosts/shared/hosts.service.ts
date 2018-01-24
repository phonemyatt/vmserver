import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take } from 'rxjs/operators';
import * as faker from 'faker'; // optional
import { HostModel } from './hostmodel';

@Injectable()
export class HostServices {
    private hostlink = 'hosts';
    colRef = this.afs.collection(this.hostlink, ref => ref.orderBy('__name__'));
    constructor(private afs: AngularFirestore, private https: HttpClient) {}

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

    deleteHost(host: HostModel) {
        this.afs.collection(this.hostlink).doc(host.id).delete();
    }

    updateHost(host: HostModel) {
        this.afs.collection(this.hostlink).doc(host.id).update({
            imgpath: host.imgpath,
            name: host.name,
            position: host.position,
            company: host.company,
            ic: host.ic,
            email: host.email,
            hp: host.hp,
            address: host.address
        });
    }
    // return firestore collection to table
    returnHostCollections() {
        return this.afs.collection<HostModel>(this.hostlink);
    }
    // Add one host
    addOneHost(host: HostModel ) {
        if ( host ) {
            this.colRef.add(host).then(x => {
                this.afs.collection(this.hostlink).doc(x.id).update({
                    id: x.id
                });
            });
        }
    }

    // Add one Random host
    addOneRandomHost() {
        const host: HostModel = {
                id: '',
                imgpath: faker.image.avatar(),
                name: faker.name.findName(),
                position: faker.name.jobTitle(),
                company: faker.company.companyName(),
                ic: faker.internet.password(),
                email: faker.internet.email(),
                hp: faker.phone.phoneNumber(),
                address: faker.address.streetAddress()
        };
        this.colRef.add(host).then(x => {
            this.afs.collection(this.hostlink).doc(x.id).update({
                id: x.id
            });
        });
        // this.afs.collection(this.hostlink).add(host).then(x => {
        //     this.afs.collection(this.hostlink).doc(x.id).update({
        //         id: x.id
        //     });
        // });
    }

    // Helper to quickly generate dummy host data
    generateHosts(size: number) {
        for (const i of Array(size)) {
            const dummyData: HostModel = {
                id: '',
                imgpath: faker.image.avatar(),
                name: faker.name.findName(),
                position: faker.name.jobTitle(),
                company: faker.company.companyName(),
                ic: faker.internet.password(),
                email: faker.internet.email(),
                hp: faker.phone.phoneNumber(),
                address: faker.address.streetAddress()
            };
             this.colRef.add(dummyData).then(x => {
                 this.colRef.doc(x.id).update({
                     id: x.id
                 });
             });
        }
    }

    deleteHostCollection(path: string, batchSize: number): Observable<any> {
        const source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(
            expand(val => this.deleteBatch(path, batchSize)),
            takeWhile(val => val > 0)
        );
    }

    // Detetes documents as batched transaction
    private deleteBatch(path: string, batchSize: number): Observable<any> {
        const colRef = this.afs.collection(path, ref => ref.orderBy('__name__').limit(batchSize));
        return colRef.snapshotChanges().pipe(
            take(1),
            mergeMap(snapshot => {

                // Delete documents in a batch
                const batch = this.afs.firestore.batch();
                snapshot.forEach(doc => {
                    batch.delete(doc.payload.doc.ref);
                });
                return fromPromise(batch.commit()).map(() => snapshot.length);
            })
        );
    }
}
