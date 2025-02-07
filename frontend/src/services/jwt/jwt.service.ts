import { jwtDecode } from "jwt-decode";

export interface JwtDecoded {
  email: string;
  sub: number;
  iat: number;
  exp: number;
}

export interface IJwtService {
  decode(token: string): any;
}

export class JwtServiceImpl implements IJwtService {
  decode(token: string): any {
    return jwtDecode(token);
  }
}
