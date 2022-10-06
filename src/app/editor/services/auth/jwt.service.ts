import {Injectable} from '@angular/core';

const TOKEN_KEY = 'jwt-token'
const RESPONSE_KEY = 'jwt-response'

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() {
  }

  public storeToken(token: string) {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  }

  public getResponseKey(): any {
    const r = localStorage.getItem(RESPONSE_KEY)
    if (r) {
      return JSON.parse(r)
    }
    return {}
  }

  public storeResponse(r: any) {
    localStorage.removeItem(RESPONSE_KEY)
    localStorage.setItem(RESPONSE_KEY, JSON.stringify(r))
  }

  public clearStorage() {
    localStorage.clear()
  }
}
