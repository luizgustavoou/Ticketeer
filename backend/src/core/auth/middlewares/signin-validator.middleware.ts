import { MinLength, validateOrReject } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { UserData } from "../entities/user.entity";
import { Expose, plainToClass } from "class-transformer";

export class SigninDTO {
  @Expose()
  @MinLength(5)
  login!: string;

  @Expose()
  @MinLength(5)
  password!: string;
}

export const signinAuthValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Missing request body!" });
    }

    const userDTO = plainToClass(SigninDTO, req.body, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(userDTO);

    next();
  } catch (e: any) {
    const message = Object.values(e[0].constraints)[0];
    res.status(400).send({ message });
  }
};
