import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { UserData } from "./entities/user.entity";
import { UserService } from "./user.service";
import { StatusCodes } from "http-status-codes";

export class UserControllerImpl {
  constructor(private readonly userService: UserService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.userService.findMany();

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.userService.findOneById(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userDTO = plainToClass(UserData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.userService.create(userDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const userDTO = plainToClass(UserData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.userService.update(+id, userDTO);

      return res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
