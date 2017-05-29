import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { User } from '../models/user.interface';

@Component({
    selector: 'users',
    templateUrl: '../views/user.component.html'         
})
export class UserComponent implements OnInit, OnDestroy {
    isLoading: Boolean = true;
    users: User[];
    
    private _subscription : any;    

    constructor(private _userService: UserService, 
        private _router: Router) {
    }

    ngOnInit() {
        this._subscription = this._userService
            .getUsers()
            .subscribe(us => {
                this.users = us;
            }, 
            null,
            () => this.isLoading = false);
    }

    ngOnDestroy(){
        this._subscription.unsubscribe();
    }

    addUser() {
        this._router.navigate(['users/new']);
    }

    deleteUser(user: User) {
        if(!confirm("Are you sure ?"))
            return;

        this._userService
            .deleteUser(user.id)
            .subscribe(res => {
                let index = this.users.indexOf(user);
                console.log(index);
                this.users.splice(index, 1);
            },
            err => console.log(err));
    }    
}