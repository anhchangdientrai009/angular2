import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './components/user-detail.component';
import { PreventUnsavedChangesGuard } from '../core/prevent-unsaved-changes-guard.service';
import { UserComponent } from './components/user.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'new', component: UserDetailComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: ':id', component: UserDetailComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
    
}