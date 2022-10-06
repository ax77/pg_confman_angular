import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { constants } from "../../shared/constants";

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<any> {
        return this.http.get(constants.MAIN_API_URL + 'auth/users', {
            headers: constants.AUTH_HTTP_HEADERS
        });
    }
}
