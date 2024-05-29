import { NextFunction, Request, Response } from "express";
import { TicketData } from "./entities/ticket.entity";
import { plainToClass } from "class-transformer";
import { TicketService } from "./ticket.service";
import { StatusCodes } from "http-status-codes";

export class TicketControllerImpl {
  constructor(private readonly ticketService: TicketService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.ticketService.findMany();

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.ticketService.findOneById(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const ticketDTO = plainToClass(TicketData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.ticketService.create(ticketDTO);

      res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const ticketDTO = plainToClass(TicketData, req.body, {
        excludeExtraneousValues: true,
      });

      const output = await this.ticketService.update(+id, ticketDTO);

      return res.status(StatusCodes.CREATED).send(output);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.ticketService.delete(+id);

      return res.status(StatusCodes.OK).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
