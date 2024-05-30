import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { ContatosService } from "./contatos.service";
import { StatusCodes } from "http-status-codes";
import { MotivoData } from "../tickets/entities/ticket.entity";

export class ContatosControllerImpl {
  constructor(private readonly contatosService: ContatosService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.contatosService.findMany();

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.contatosService.findOneById(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const ContatosDTO = plainToClass(MotivoData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.contatosService.create(ContatosDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const ContatosDTO = plainToClass(MotivoData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.contatosService.update(+id, ContatosDTO);

      return res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.contatosService.delete(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
