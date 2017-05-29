import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { PostSelectedService } from '../services/post-selected.service'; 
//import { EventService } from '../../core/event.service';
import { PostService } from '../services/post.service';
import { Post, Comment } from '../models/post';

@Component({
    selector: 'post-detail',
    templateUrl: '../views/post-detail.component.html'
})
export class PostDetailComponent implements OnInit {

    isPostLoading: Boolean = true;
    isCommentsLoading: Boolean = true;
    isReloadPost: Boolean = false;
    post: Post = new Post();

    private _subscription: any;    
    private _id: number;    

    constructor(private _postService: PostService, 
        private _route: ActivatedRoute,
        private _postSelectedService: PostSelectedService){        
    }

    ngOnInit() {       
        // (+) converts string 'id' to a number
        // let id = +this.route.snapshot.params['id'];

        // this.service.getHero(id)
        //     .then((hero: Hero) => this.hero = hero); 
        
        this._route.params.subscribe(params => {            
            this._id = +params['id'];            
            this.loadPostComments(); 
        });        

        //can use viewchild instead of event emitter
        // EventService.get('reloadPost')
        //     .subscribe(() => {            
        //         this.isReloadPost = true;
        // }); 
        this._postSelectedService.selected$.subscribe(() => {
            this.isReloadPost = true;
        })               
    }
        
    private loadPostComments() {
        this.isReloadPost = false;
        this.isPostLoading = true;
        this.isCommentsLoading = true;

        Observable.forkJoin(
            this._postService.getPost(this._id),
            this._postService.getComments(this._id)
        )
        .subscribe(res => {
            this.post = res[0];
            this.post.comments = res[1];
        },
        (error) => console.log(error),
        () => {
            this.isPostLoading = false;
            this.isCommentsLoading = false;
        });            
    }    
}