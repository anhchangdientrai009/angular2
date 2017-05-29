import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: '<firebase-test>',
    template: `
        <h1>Firebase</h1>
        <div class="row">
            <spinner [visible]="!(items|async)" mode="2"></spinner>
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let item of items|async">{{ item.$value }}</li>
            </ul>
        </div>        
    `
})
export class FireBaseTestComponent{
    items;

    constructor(private _db: AngularFireDatabase) {
        this.items = _db.list("Friends");      
    }
}