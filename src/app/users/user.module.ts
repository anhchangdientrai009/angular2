import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserService } from './services/user.service';


@NgModule({
    declarations: [
        UserComponent,
        UserDetailComponent        
    ],
    imports: [
        SharedModule,
        UserRoutingModule              
    ],
    providers: [
        UserService
    ]
})
export class UserModule {

}