import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take } from 'rxjs/operators';
import * as faker from 'faker'; // optional
import { VisitorModel } from './visitormodel';

@Injectable()
export class VisitorServices {
    private visitorlink = 'visitors';
    colRef = this.afs.collection(this.visitorlink, ref => ref.orderBy('__name__'));
    constructor(private afs: AngularFirestore) {}

    updateVisitor(visitor: VisitorModel) {
        this.afs.collection(this.visitorlink).doc(visitor.id).update({
            imgpath: visitor.imgpath,
            name: visitor.name,
            position: visitor.position,
            company: visitor.company,
            ic: visitor.ic,
            email: visitor.email,
            hp: visitor.hp,
            address: visitor.address
        });
    }
    // return firestore collection to table
    returnVisitorCollections() {
        return this.afs.collection<VisitorModel>(this.visitorlink);
    }

    // to track visitor
    trackVisitorByUid(index, item) {
        return item.uid;
    }
    // Add one
    addOneVisitor() {
        const visitor: VisitorModel = {
            imgpath: faker.image.imageUrl(),
                name: faker.name.findName(),
                position: faker.name.jobTitle(),
                company: faker.company.companyName(),
                ic: faker.internet.password(),
                email: faker.internet.email(),
                hp: faker.phone.phoneNumber(),
                address: faker.address.streetAddress()
        };
        this.afs.collection(this.visitorlink).add(visitor);
    }

    // Helper to quickly generate dummy visitor data
    generateVisitors(size: number) {
        for (const i of Array(size)) {
            const dummyData: VisitorModel = {
                imgpath: faker.image.imageUrl(),
                name: faker.name.findName(),
                position: faker.name.jobTitle(),
                company: faker.company.companyName(),
                ic: faker.internet.password(),
                email: faker.internet.email(),
                hp: faker.phone.phoneNumber(),
                address: faker.address.streetAddress()
            };
            this.colRef.add(dummyData);
        }
    }

    deleteCollection(path: string, batchSize: number): Observable<any> {
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