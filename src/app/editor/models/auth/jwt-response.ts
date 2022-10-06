export interface JwtResponse {
    jwt_token: string,
    jwt_token_type: string,
    jwt_token_expiration: Date,
    username: string,
    id: number,
    roles: string[],
    authorities: string[]
  }
  