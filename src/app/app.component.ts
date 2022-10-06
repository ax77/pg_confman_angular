import { Component } from '@angular/core';
import {AuthService} from "./editor/services/auth/auth.service";
import {JwtResponse} from "./editor/models/auth/jwt-response";
import {Router} from "@angular/router";
import {JwtService} from "./editor/services/auth/jwt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router, private jwt: JwtService) {
  }

  login() {

    this.auth.login('admin', 'secret123').subscribe( {

      next: response => {
        console.log(response);

        const jwtResponse: JwtResponse = {
          jwt_token: response.jwt_token,
          jwt_token_type: response.jwt_token_type,
          jwt_token_expiration: response.jwt_token_expiration,
          username: response.username,
          id: response.id,
          roles: response.roles,
          authorities: response.authorities
        }

        console.log(jwtResponse);

        this.jwt.storeToken(jwtResponse.jwt_token)
        this.jwt.storeResponse(jwtResponse)

        // this.router.navigate(['/'])

      }, error: err => {
        console.log(err)
      }
    })
  }

}
