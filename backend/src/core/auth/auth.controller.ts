import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { AuthService } from "./auth.service";
import { SigninDTO } from "./middlewares/signin-validator.middleware";
import { StatusCodes } from "http-status-codes";
import { UserData } from "../users/entities/user.entity";

export class AuthControllerImpl {
  constructor(private readonly authService: AuthService) {}

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const userDTO = plainToClass(UserData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.authService.signup(userDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const signinDTO = plainToClass(SigninDTO, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.authService.signin(
        signinDTO.login,
        signinDTO.password
      );

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
