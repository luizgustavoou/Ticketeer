import { NextFunction, Request, Response } from "express";
import { TicketData } from "./entities/ticket.entity";
import { plainToClass } from "class-transformer";
import { TicketService } from "./ticket.service";

export class TicketControllerImpl {
  constructor(private readonly ticketService: TicketService) {}

  async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const output = await this.ticketService.findMany();

      return res.status(200).send(output);

      res.status(201).send(output);
    } catch (error) {
      return next(error);
    }
  }
  async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const output = await this.ticketService.findOneById(+id);

      return res.status(200).send(output);

      res.status(201).send(output);
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

      res.status(201).send(output);
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

      return res.status(201).send(output);

      res.status(201).send(output);
    } catch (error) {
      return next(error);
    }
  }
}
