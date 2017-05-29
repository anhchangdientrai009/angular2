import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post, Comment } from "../models/post";

@Injectable()
export class PostService {

    private _baseUrl = "https://jsonplaceholder.typicode.com/posts";
    private _http: Http;
    private _ERROR = "Server has error";
    
    constructor(http: Http) {
        this._http = http;
    }

    getPosts() : Observable<Post[]> {
        return this._http.get(this._baseUrl)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR ));
    }

    getPost(id: number) : Observable<Post> {
        return this._http.get(this._baseUrl + '/' + id)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR ));
    }

    getPostOfUser(userId: number) : Observable<Post[]> {
        return this._http.get(this._baseUrl + '?userId=' + userId)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || this._ERROR ));
    }

    getComments(postId: number): Observable<Comment[]> {
        return this._http
            .get(this._baseUrl + '/' + postId + '/comments')
            .map(result => {
                return <Comment[]>result.json();
            })
            .catch(error => Observable.throw(error.json().error || this._ERROR ));
    }
}