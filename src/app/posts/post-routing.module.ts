import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './components/post.component';
import { PostDetailComponent } from './components/post-detail.component';

// export const PostRouting = RouterModule.forChild([    
//     { 
//         path: 'posts', 
//         component: PostComponent,
//         children: [
//             { path: ':id', component: PostDetailComponent }
//         ] 
//     },  
//     //{ path: 'posts/:id', component: PostComponent }    
// ]);

const routes: Routes = [
    { path: '', component: PostComponent, children: [
        { path: ':id', component: PostDetailComponent }
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {
    
}