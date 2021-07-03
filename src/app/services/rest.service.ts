import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndPoints } from '../config/appConstants';


@Injectable(
    { providedIn: 'root' }
)

export class RestService {
    constructor(
        private http: HttpClient
    ){

    }

    public sayHello() : Observable<any>{
        return this.http.get( ApiEndPoints.HELLO, {});
    }

}

