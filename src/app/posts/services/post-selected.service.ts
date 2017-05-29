import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Post } from '../models/post';

@Injectable()
export class PostSelectedService {
    private _selected: BehaviorSubject<Post> = new BehaviorSubject<Post>(null);

    public selected$ = this._selected.asObservable().filter(post => !!post);

    selected(post: Post) {
        this._selected.next(post);
    } 
}