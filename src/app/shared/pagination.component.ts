import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
        <ul class="pagination">
            <li [class.disabled]="currentPageIndex == 1">
                <a (click)="onPagePrev()" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
            </li>                
            <li [class.active]="currentPageIndex == i + 1" *ngFor="let page of totalPages; let i = index">
                <a (click)="onPageChanged(i + 1)"> {{ i + 1 }}<span class="sr-only"></span></a>
            </li>                
            <li [class.disabled]="currentPageIndex == totalPages.length">
                <a (click)="onPageNext()" aria-label="Next"><span aria-hidden="true">&laquo;</span></a>
            </li>
        </ul>`
})
export class PaginationComponent implements OnChanges {

    @Input() items: any[];
    @Output() change = new EventEmitter();
    
    private currentPageIndex: number;    
    private totalPages: number[];
    private pageSize: number = 10;
    private currentItems: any[];
    
    ngOnChanges(){
        this.onPageChanged(1);
    }

    private onPagePrev() {
        if(this.currentPageIndex == 1)
            return;

        this.currentItems = this.getItemsInPage(this.currentPageIndex - 1);        
        this.change.emit({ page: this.currentPageIndex, items:  this.currentItems});
    }

    private onPageNext() {
        if(this.currentPageIndex == this.totalPages.length)
            return;

        this.currentItems = this.getItemsInPage(this.currentPageIndex + 1);
        this.change.emit({ page: this.currentPageIndex, items: this.currentItems });
    }

    private onPageChanged(page: number) {
        this.currentItems = this.getItemsInPage(page);
        this.change.emit({ page: this.currentPageIndex, items: this.currentItems });
    }

    private getItemsInPage(page: number) {
        let result = [];
        let startingPageIndex = (page - 1) * this.pageSize;
        let endingPageIndex = 0;
        let totalPageCount = 0;

        if(this.items) {
            endingPageIndex = Math.min(startingPageIndex + + this.pageSize, this.items.length);
            totalPageCount = Math.floor(this.items.length / this.pageSize);            
        }

        this.currentPageIndex = page;       
        this.totalPages = [];        

        for(let i = 0; i < totalPageCount; i++) {
            this.totalPages.push(i);
        }

        for(let i = startingPageIndex; i < endingPageIndex; i++) {
            result.push(this.items[i]);
        }

        return result;
    }
}