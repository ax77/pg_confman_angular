import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { constants } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(constants.MAIN_API_URL + 'auth/login', {
      username, password
    }, {
      headers: constants.AUTH_HTTP_HEADERS
    });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(constants.MAIN_API_URL + 'auth/register', {
      username, password
    }, {
      headers: constants.AUTH_HTTP_HEADERS
    });
  }

  // TODO:
  logout() {

  }
}
