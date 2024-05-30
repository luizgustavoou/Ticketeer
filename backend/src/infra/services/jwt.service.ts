import jwt, { JwtPayload } from "jsonwebtoken";

export class ExpiresInConstants {
  public static SEVEN_DAYS = "7d";
}

export abstract class JwtService {
  abstract generateToken(paylaod: any): string;
  abstract verify(token: string): JwtPayload | string;
}

export class JwtServiceImpl implements JwtService {
  constructor(private jwtSecret: string) {}

  generateToken(payload: any): string {
    return jwt.sign({ ...payload }, this.jwtSecret, {
      expiresIn: ExpiresInConstants.SEVEN_DAYS,
    });
  }

  verify(token: string): JwtPayload | string {
    return jwt.verify(token, this.jwtSecret);
  }
}
