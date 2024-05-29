import { Request, Response } from "express";

import { plainToClass } from "class-transformer";
import { UserRepository } from "./user.repository";
import { UserData } from "./entities/user.entity";

export class UserControllerImpl {
  constructor(private readonly userRepository: UserRepository) {}

  async findMany(req: Request, res: Response) {
    const output = await this.userRepository.findMany();

    return res.status(200).send(output);
  }
  async findOneById(req: Request, res: Response) {
    const { id } = req.params;

    const output = await this.userRepository.findOneById(+id);

    return res.status(200).send(output);
  }

  async create(req: Request, res: Response) {
    const userDTO = plainToClass(UserData, req.body, {
      excludeExtraneousValues: true,
    });

    const output = await this.userRepository.create(userDTO);

    res.status(201).send(output);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const userDTO = plainToClass(UserData, req.body, {
      excludeExtraneousValues: true,
    });

    const output = await this.userRepository.update(+id, userDTO);

    return res.status(201).send(output);
  }
}
