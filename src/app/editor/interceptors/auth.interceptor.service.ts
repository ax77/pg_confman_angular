import { Injectable } from '@angular/core';
import {JwtService} from "../services/auth/jwt.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private jwt: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let savedReq = req;

    const jwtToken = this.jwt.getToken();
    if(jwtToken != null) {
      savedReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)})
    }

    return next.handle(savedReq);
  }


}
