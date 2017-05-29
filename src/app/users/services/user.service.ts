import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../models/user.interface';

@Injectable()
export class UserService {
    private _baseUrl = "https://jsonplaceholder.typicode.com/users/";
    private _http;
    private _ERROR = "Server has error";

    constructor(http: Http) {        
        this._http = http;
    }

    getUsers() : Observable<User[]> {
        return this._http.get(this._baseUrl)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR));
    }

    getUser(id: number) : Observable<User> {
        return this._http.get(this._baseUrl + id)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR));
    }    

    saveUser(user: User) : Observable<Response> {
        if(user.id == 0)
            return this.createUser(user);
        
        return this.updateUser(user);
    }

    deleteUser(id: number) : Observable<Response> {
        return this._http.delete(this._baseUrl + id)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR));
    }

    private createUser(user: User) {
        return this._http.post(this._baseUrl, user)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR));
    }

    private updateUser(user: User) {
        return this._http.put(this._baseUrl + user.id, user)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR));
    }
}