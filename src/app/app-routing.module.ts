import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },           
    { path: 'users', loadChildren: 'app/users/user.module#UserModule' }, 
    { path: 'posts', loadChildren: 'app/posts/post.module#PostModule' },
    { path: 'firebase', loadChildren: 'app/firebase/firebase.module#FireBaseModule' },
    { path: '**', component: NotFoundComponent },   
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}