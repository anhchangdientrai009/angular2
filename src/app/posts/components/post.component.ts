import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
        
import { PostService } from '../services/post.service';
import { UserService } from '../../users/services/user.service';
import { Post } from '../models/post';
import { User } from '../../users/models/user.interface';
import { PostSelectedService } from '../services/post-selected.service'; 
//import { EventService } from '../../core/event.service';
import { PostDetailComponent } from './post-detail.component';

@Component({
    selector: 'posts',
    templateUrl: '../views/post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
    
    isPostLoading: Boolean = true;    
    users: User[];
    pagedPosts: Post[];
    currentPageIndex;
    totalPageCount: number[] = [];
    posts: Post[];   

    private _subscription: any;     
    private _pageSize = 10;

    constructor(private _postService: PostService, 
        private _userService: UserService,
        private _postSelectedService: PostSelectedService){       
    }

    ngOnInit() {
        this.loadPosts();
        this.loadUsers();                                            
    }

    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

    reloadPosts(userId: number) {
        this.isPostLoading = true;        
        //can use viewchild instead of event emitter        
        //EventService.get('reloadPost').emit();
        this._postSelectedService.selected(new Post());        

        if(!userId) 
            return this.loadPosts();                           

        this._postService
            .getPostOfUser(userId)
            .subscribe(posts => {
                this.posts = posts;                                           
            },
            (error) => console.log(error),
            () => this.isPostLoading = false);
    }   

    onPageChanged($event) {
        this.pagedPosts = $event.items;
    }    

    private loadUsers() {
        this._userService
            .getUsers()
            .subscribe(users => {
                this.users = users;
            },
            (error) => console.log(error));
    }

    private loadPosts() {
        return this._subscription = this._postService
            .getPosts()
            .subscribe(posts => {                
                this.posts = posts;                
            },
            (error) => console.log(error),
            () => this.isPostLoading = false);  
    }
}