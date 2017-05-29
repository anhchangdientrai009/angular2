import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

import { PostComponent } from './components/post.component';
import { PostDetailComponent } from './components/post-detail.component';
import { PostService } from './services/post.service';
import { UserService } from '../users/services/user.service';
import { PostSelectedService } from './services/post-selected.service';

@NgModule({
    declarations: [
        PostComponent,
        PostDetailComponent
    ],
    imports: [
        SharedModule,
        PostRoutingModule,        
    ],
    providers: [
        PostService,
        UserService,
        PostSelectedService
    ]
})
export class PostModule {

}