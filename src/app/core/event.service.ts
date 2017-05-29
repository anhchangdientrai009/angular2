import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
    private static events: { [id: string]: EventEmitter<any> } = {};

    static get(id: string) {
        if(!this.events[id])
            this.events[id] = new EventEmitter<any>();

        return this.events[id];
    }
}