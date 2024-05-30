import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { MotivosService } from "./motivos.service";
import { StatusCodes } from "http-status-codes";
import { MotivoData } from "../tickets/entities/ticket.entity";

export class MotivosControllerImpl {
  constructor(private readonly motivosService: MotivosService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.motivosService.findMany();

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.motivosService.findOneById(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const MotivosDTO = plainToClass(MotivoData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.motivosService.create(MotivosDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const MotivosDTO = plainToClass(MotivoData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.motivosService.update(+id, MotivosDTO);

      return res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.motivosService.delete(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
