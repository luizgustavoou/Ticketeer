import { Request, Response, NextFunction } from "express";
import { Roles } from "../../core/users/entities/user.entity";
import { ForbiddenError } from "../../exceptions/forbidden-error";

export class AuthorizationRoleMiddleware {
  constructor(private role: Roles) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    if (req.user.role !== this.role) {
      return next(
        new ForbiddenError("Você não tem permissão para executar essa operação")
      );
    }

    next();
  }
}
