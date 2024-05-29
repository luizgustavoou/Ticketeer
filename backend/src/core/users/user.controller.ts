import { Request, Response } from "express";

import { plainToClass } from "class-transformer";
import { UserData } from "./entities/user.entity";
import { UserService } from "./user.service";

export class UserControllerImpl {
  constructor(private readonly userService: UserService) {}

  async findMany(req: Request, res: Response) {
    const output = await this.userService.findMany();

    return res.status(200).send(output);
  }
  async findOneById(req: Request, res: Response) {
    const { id } = req.params;

    const output = await this.userService.findOneById(+id);

    return res.status(200).send(output);
  }

  async create(req: Request, res: Response) {
    const userDTO = plainToClass(UserData, req.body, {
      excludeExtraneousValues: true,
    });

    const output = await this.userService.create(userDTO);

    res.status(201).send(output);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const userDTO = plainToClass(UserData, req.body, {
      excludeExtraneousValues: true,
    });

    const output = await this.userService.update(+id, userDTO);

    return res.status(201).send(output);
  }
}
