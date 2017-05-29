import { NgModule } from '@angular/core';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { EventService } from './event.service';

@NgModule({
    providers: [
        EventService,
        PreventUnsavedChangesGuard
    ]
})
export class CoreModule {

}