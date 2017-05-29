import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { SharedModule} from '../shared/shared.module';
import { FireBaseRoutingModule } from './firebase-routing.module';

import { FireBaseTestComponent } from './firebase-test.component';

@NgModule({
    imports: [        
        SharedModule,
        FireBaseRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: [
        FireBaseTestComponent
    ]
})
export class FireBaseModule {

}