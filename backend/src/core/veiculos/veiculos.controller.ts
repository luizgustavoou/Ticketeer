import { Request, Response, NextFunction } from "express";

import { plainToClass } from "class-transformer";
import { VeiculosService } from "./veiculos.service";
import { StatusCodes } from "http-status-codes";
import { VeiculosData } from "./entities/veiculos.entity";

export class VeiculosControllerImpl {
  constructor(private readonly veiculosService: VeiculosService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.veiculosService.findMany();

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.veiculosService.findOneById(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const VeiculosDTO = plainToClass(VeiculosData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.veiculosService.create(VeiculosDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const VeiculosDTO = plainToClass(VeiculosData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.veiculosService.update(+id, VeiculosDTO);

      return res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.veiculosService.delete(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
