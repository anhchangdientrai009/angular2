import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormComponent } from '../../core/form.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';

@Component({
    selector: 'user-detail',
    templateUrl: '../views/user-detail.component.html'    
})
export class UserDetailComponent implements OnInit, OnDestroy, FormComponent {

    title: string;
    isSaving: Boolean = false;        
    form: FormGroup;        
       
    private _subscription: any; 

    constructor(private _fb: FormBuilder, 
        private _userService: UserService, 
        private _router: Router,
        private _route: ActivatedRoute) {                
    }

    ngOnInit(){
        this.initialForm();
        this.initialUser();                             
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    onSubmit() {
        this.isSaving = true;
        let user = this.form.value;
        this._userService
            .saveUser(user)
            .subscribe(res => {
                console.log(res);
                this.form.markAsPristine();
                this._router.navigate(["users"]);
            });
                           
    }

    private initialForm() {
        this.form = this._fb.group({
            id: [''],
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phone: [],
            address: this._fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })            
        });
    }   

    private initialUser() {
        let userId = null;
        this._subscription = this._route.params.subscribe(params => userId = +params['id']);

        this.title = userId ? "Edit a user" : "Add a user";

        if(!userId)
            return;

        this._userService
            .getUser(userId)
            .subscribe((user: User) => {  
                console.log(user);                        
                this.form.patchValue({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: {
                        street: user.address.street,
                        suite: user.address.suite,
                        city: user.address.city,
                        zipcode: user.address.zipcode
                    }
                })
            },
            (error) => {
                console.log(error);
                if(error.status == 404)                
                    this._router.navigate(["notfound"]);                
            }); 
    } 
}