import jwt, { JwtPayload } from "jsonwebtoken";

export class ExpiresInConstants {
  public static SEVEN_DAYS = "7d";
}

export abstract class JwtService {
  abstract generateToken(id: string): string;
  abstract verify(token: string): JwtPayload | string;
}

export class JwtServiceImpl implements JwtService {
  constructor(private jwtSecret: string) {}

  generateToken(id: string): string {
    return jwt.sign({ id }, this.jwtSecret, {
      expiresIn: ExpiresInConstants.SEVEN_DAYS,
    });
  }

  verify(token: string): JwtPayload | string {
    return jwt.verify(token, this.jwtSecret);
  }
}
