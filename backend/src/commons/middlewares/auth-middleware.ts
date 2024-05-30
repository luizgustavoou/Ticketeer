import { Request, Response, NextFunction } from "express";
import { UserService } from "../../core/users/user.service";
import { JwtService } from "../../infra/services/jwt.service";
import { UnauthorizedError } from "../../exceptions/unathorized-error";

export class AuthMiddleware {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      return next(new UnauthorizedError("Acesso negado."));
    }

    try {
      const payload: any = this.jwtService.verify(token);

      (<any>req)["user"] = await this.userService.findOneById(
        (<any>payload).sub
      );

      next();
    } catch (error) {
      return next(new UnauthorizedError("Token inválido."));
    }
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(" ") ?? [];

    return type === "Bearer" ? token : undefined;
  }
}
