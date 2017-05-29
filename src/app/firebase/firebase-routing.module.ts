import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireBaseTestComponent } from './firebase-test.component';

const routes: Routes = [
    { path: '', component: FireBaseTestComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FireBaseRoutingModule {
    
}