import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { UserData } from "./entities/user.entity";
import { AuthService } from "./auth.service";

export class AuthControllerImpl {
  constructor(private readonly authService: AuthService) {}

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const userDTO = plainToClass(UserData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.authService.signup(userDTO);

      res.status(201).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
