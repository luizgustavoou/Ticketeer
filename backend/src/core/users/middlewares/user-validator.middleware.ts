import { validateOrReject } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { UserData } from "../entities/user.entity";
import { plainToClass } from "class-transformer";

export const createUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Missing request body!" });
    }

    const userDTO = plainToClass(UserData, req.body, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(userDTO);

    next();
  } catch (e: any) {
    const message = Object.values(e[0].constraints)[0];
    res.status(400).send({ message });
  }
};
