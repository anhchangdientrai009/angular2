import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SpinnerComponent,
        PaginationComponent
    ],    
    exports: [
        CommonModule,        
        ReactiveFormsModule,
        SpinnerComponent,
        PaginationComponent
    ]
})
export class SharedModule {

}