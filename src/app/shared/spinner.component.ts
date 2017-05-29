import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
        <i class="fa fa-spinner fa-spin"
           [class.fa-3x]="mode==3"
           [class.fa-2x]="mode==2"
           [class.fa-1x]="mode==1"           
            *ngIf="visible">
        </i>`
})
export class SpinnerComponent {
    @Input() visible: Boolean = true;
    @Input() mode: Number = 3;
}